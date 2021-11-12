/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, nextTick, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getStorage, setCookie, setSession, getSession } from "@/utils/auth.js";
import { initWallet, myWallet, transferAccounts, getContract, getSendDragonContract, getMarketContract, getBalanceHandle, setApprovalForAll, isApprovedForAll } from "@/utils/metaMask/ethers.js";
import { ethers, BigNumber } from "ethers";
import { useI18n } from "vue-i18n"; //要在js中使用国际化
import dragonLocalTypeList from "./dragonLocalTypeList"; //要在js中使用国际化
import dragonLocalTypeName from "./dragonLocalTypeName";
import Confetti from "@/assets/lottie/dragonEgg-claim/DragonEgg.json";
import html2canvas from "html2canvas";
import { useStore } from "vuex";
import { Decimal } from 'decimal.js'
import DragonExchange from '@/utils/metaMask/dragonJson/DragonExchange.json'




const eggToDragon = ref(null);



// 初始化数据
const myDragonDetailState = reactive({
    loadingForm: {
        loadingShowText: 'Loading...',
        loadingShow: false,
    },

    isOpening: false,
    sellBoxshow: false,
    sellForm: {
        type: 1,
        price: 0,
        startPrice: 0,
        endPrice: 0,
        days: 0,
    },
    myAddress: null,
    dragonLocalTypeName: dragonLocalTypeName,
    dragonDetail: {
        countDownTime: [],
        clazz: 1
    },
    defaultOptions: {
        container: eggToDragon.value,
        animationData: Confetti,
        loop: true,
        autoplay: true,
    },
    anim: {},
    isStartDragon: false,
    selectLocalDragon: null,
    sendDragonShow: false,
    sendForm: {
        walletAddress: null
    },
    sendLoading: false

});





export default function myDragonDetail() {

    const router = useRouter()
    const route = useRoute()
    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const $message = inject("$message");
    const store = useStore()
    const { t } = useI18n();

    onBeforeUnmount(() => {
        clearInterval(myDragonDetailState.dragonDetail.countDownFn)
    })
    const init = () => {
        loadingHandle(false)
        myDragonDetailState.isStartDragon = false
        console.log('router', router)
        console.log('router', route)
        myDragonDetailState.dragonDetail.id = route.params.id
        myDragonDetail()
        dragonAddressIsSameWalletAddress()
    }

    const initSellForm = () => {
        myDragonDetailState.sellBoxshow = false
        myDragonDetailState.sellForm = {
            type: 1,
            price: 0,
            startPrice: 0,
            endPrice: 0,
            days: 0,
        }
    }

    const myDragonDetail = () => {
        let params = {
            id: myDragonDetailState.dragonDetail.id
        }
        API.myMainland.dragonDetail(params).then(res => {
            if (res.code == 0) {
                myDragonDetailState.dragonDetail = res.data
                if (myDragonDetailState.dragonDetail.no > 10000) {

                    myDragonDetailState.dragonDetail.hatchTime = new Date(myDragonDetailState.dragonDetail.createTime).getTime() + 3 * 24 * 60 * 60 * 1000 // ID  大于10000 3天
                } else {
                    myDragonDetailState.dragonDetail.hatchTime = new Date(myDragonDetailState.dragonDetail.createTime).getTime() + 7 * 24 * 60 * 60 * 1000 // ID  小于等于10000 7天
                }
                console.log('myDragonDetailState.dragonList', myDragonDetailState.dragonDetail)

                myDragonDetailState.dragonDetail.countDownTime = ['00', '00', '00', '00']
                countDown()
            } else {
                $message.warning(t(`message['${res.i18n}']`));
            }
        })
    }

    // 孵化时间倒计时

    const countDown = async () => {
        let item = myDragonDetailState.dragonDetail
        let startTime = await getNowTime();//当前时间
        let end = new Date(item.hatchTime); //结束时间
        let result = parseInt((end - startTime) / 1000); //计算出豪秒
        myDragonDetailState.dragonDetail.countDownFn = setInterval(() => {
            result -= 1
            if (result <= 0) {
                clearInterval(myDragonDetailState.dragonDetail.countDownFn)
            }


            item.countDownTime = countDownFun(result);
        }, 1000)
    }
    const getNowTime = () => {
        return new Promise((resolve, reject) => {
            API.activity.getServericeTime({}).then(res => {
                resolve(res.data.timestamp)
            })

        })

    }
    //倒计时
    const countDownFun = (result) => {
        // console.log(time)

        let d = parseInt(result / (24 * 60 * 60)); //用总共的秒数除以1天的秒数
        let h = parseInt((result / (60 * 60)) % 24); //精确小时，用去余
        let m = parseInt((result / 60) % 60); //剩余分钟就是用1小时等于60分钟进行趣余
        let s = parseInt(result % 60);
        //当倒计时结束时，改变内容
        if (result <= 0) {
            return false;
        }
        if (d < 10) {
            d = "0" + d;
        }
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        if (d == 0 && h == 0 && m == 0) {
            //   return "剩余" + s + "秒";
            return ['00', '00', '00', s];
        } else if (d == 0 && h == 0) {
            //  return "剩余" + m + "分" + s + "秒";
            return ['00', '00', m, s];
        } else if (d == 0) {
            // return "剩余" + h + "时" + m + "分" + s + "秒";
            return ['00', h, m, s];
        } else {
            // return "剩余" + d + "天" + h + "时" + m + "分" + s + "秒";
            return [d, h, m, s];
        }
    }

    const back = () => {
        router.back()
    }


    const openDradonEgg = async (item) => {
        if (!getSession("address")) {
            let address = await initWallet()
            setSession('address', address)
            let bindAddress = await store.dispatch("login/SET_LINK_ADDRESS_SAME_BIND", address);
            if (!bindAddress) {
                return $message.warning(t(`message['pleaseBindWalletAddress']`));
            }
            openDradonEggHandle(item)
        } else {
            let bindAddress = await store.dispatch("login/SET_LINK_ADDRESS_SAME_BIND", getSession("address"));
            if (!bindAddress) {
                return $message.warning(t(`message['pleaseBindWalletAddress']`));
            }
            openDradonEggHandle(item)
        }
    }

    const openDradonEggHandle = async (item) => {
        //  startClaim()
        console.log('openDradonEgg', item)
        loadingHandle(true, 'Dragon being generated, please do not refresh...')
        myDragonDetailState.selectLocalDragon = item
        // const balance = await myWallet()
        // if (0 > (new Decimal(balance).sub(new Decimal(0.005))).toNumber()) {
        //     return $message({
        //         type: 'warning',
        //         message: 'Sorry, your BNB is not enough'
        //     })
        // }
        nextTick(async () => {
            await hatchDragonImg()
            let params = {
                "chainType": 1, // 1 BSC 2 ETH
                "id": item.id,

            }
            API.myMainland.dragonEggHatch(params).then(res => {
                if (res.code == 0) {
                    growUpDragonEgg(res.data)
                } else {
                    $message.warning(t(res.i18n));
                }
            })
        })




    }

    const hatchDragonImg = () => {
        return new Promise(async (resolve, reject) => {
            let params = {
                heroId: myDragonDetailState.selectLocalDragon.id,
            }
            let formData = new FormData();
            let file = await createImg()
            formData.append("file", file);
            // formData.append("heroId", params.heroId);
            API.myMainland.hatchDragon(formData, params).then(res => {
                if (res.code == 0) {
                    resolve(res)
                } else {
                    $message.warning(t(res.i18n));
                }
            })

        })
    }


    // 生成图片
    const createImg = () => {
        console.log('document', document.querySelector(".dragon-main"))
        const width = document.querySelector(".dragon-main").offsetWidth;
        const height = document.querySelector(".dragon-main").offsetHeight;
        return new Promise((resolve, reject) => {
            html2canvas(document.querySelector(".dragon-main"), {
                width,
                height,
                scrollY: 0,
                scrollX: 0,
                backgroundColor: null, //设置图片背景为透明
                dpi: window.devicePixelRatio * 2,
                scale: 1,
                useCORS: true,
            }).then((canvas) => {
                console.log("canvas", canvas);
                const href = canvas.toDataURL("image/png");
                console.log('href', href)
                let url = base64ToFile(href, 'dragon')
                resolve(url)
                // downloadImage(href);
            });
        })

    };

    const base64ToFile = (urlData, fileName) => {
        let arr = urlData.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bytes = atob(arr[1]); // 解码base64
        let n = bytes.length
        let ia = new Uint8Array(n);
        while (n--) {
            ia[n] = bytes.charCodeAt(n);
        }
        return new File([ia], fileName, { type: mime });
    }

    const downloadImage = (url) => {
        // 如果是在网页中可以直接创建一个 a 标签直接下载
        let a = document.createElement("a");
        a.href = url;
        console.log()
        a.download = "dragon";
        a.click();
    };




    const growUpDragonEgg = (data) => {
        loadingHandle(true, 'Payment is in progress, please do not refresh...')
        const contract = getSendDragonContract()
        console.log('contract', contract)

        let params = {
            id: BigNumber.from(data.no.toString()),
            geneDomi: BigNumber.from(data.geneDomi.toString()),
            geneRece: BigNumber.from((data.recessive + data.recessiveSec).toString()),
            //  geneRece: BigNumber.from(('310032200523005140042500136002270014100432004530012400215').toString()),
            matronId: BigNumber.from(data.father.toString()),
            sireId: BigNumber.from(data.mother.toString()),
            stage: data.no > 10000 ? 2 : 1,
            attr: {
                health: BigNumber.from(data.health.toString()),
                attack: BigNumber.from(data.attack.toString()),
                defense: BigNumber.from(data.defend.toString()),
                speed: BigNumber.from(data.speed.toString()),
                lifeForce: BigNumber.from(data.intellect.toString()),
            },
            skill: {
                horn: BigNumber.from(data.skillNo1.skillId.toString()),
                ear: BigNumber.from(data.skillNo2.skillId.toString()),
                wing: BigNumber.from(data.skillNo3.skillId.toString()),
                tail: BigNumber.from(data.skillNo4.skillId.toString()),
                talent: BigNumber.from(data.talent.talentId.toString()),
            },
            uri: data.uri,
            timestamp: BigNumber.from(data.timestamp.toString()),
            sign: data.sign,

        }
        console.log('params', params)

        contract.hatchDragonEggs(params.id, params.geneDomi, params.geneRece, params.matronId, params.sireId, params.stage, params.attr, params.skill, params.uri, params.timestamp, params.sign).then(async res => {
            console.log('res', res)
            if (res) {
                myDragonDetailState.isOpening = false
                startClaim()
                let data1 = {
                    id: data.id,
                    orderId: data.orderId,
                    transHash: res.hash,
                    no: data.no
                }
                hatchPaymentHandle(data1, res)
            }
        }).catch((error) => {
            loadingHandle(false)

            console.log('error', error)
            if (error.code == 4001) {
                $message.warning(error.message);
            } else {
                $message.warning(error.data);
            }
        })
    }
    const handleAnimation = (anim) => {
        myDragonDetailState.anim = anim;
        console.log('handleAnimation===========', anim);
    };
    const startClaim = () => {
        myDragonDetailState.isStartDragon = true;
        console.log('myDragonDetailState', myDragonDetailState)
        // myDragonDetailState.anim.goToAndPlay(0, true);
        setTimeout(() => {
            // myDragonDetailState.isStartDragon = true;
            myDragonDetailState.anim.goToAndPlay(0, true);
        }, 1000);
    };


    // 孵化回调
    const hatchPaymentHandle = (data, contract) => {
        let params = {
            id: data.id,
            orderId: data.orderId,
            transHash: data.transHash,

        }
        API.myMainland.hatchPayment(params).then(res => {
            if (res.code == 0) {
                // setIntelDragonDetail(data.no)
                contractResp(contract)

            } else {
                $message.warning(t(res.i18n));
            }
        })
    }

    const contractResp = async (contract) => {
        loadingHandle(false)
        let receipt = await contract.wait()
        console.log('receipt', receipt)
        await getBalanceHandle()
        myDragonDetail()
        $message.success('success');
    }

    const sendDragon = async () => {
        let address = await initWallet()
        if (myDragonDetailState.myAddress != address) {
            return $message({
                type: 'warning',
                message: t(`message['addressNotSamemyAddress']`),
                customClass: 'zZindex',
            })
        }
        myDragonDetailState.sendDragonShow = true
        console.log('====')
    }
    const closeBox = () => {
        myDragonDetailState.sendDragonShow = false
        myDragonDetailState.sendForm.walletAddress = ''
    }
    const confirm = async () => {
        console.log(myDragonDetailState.dragonDetail)
        if (myDragonDetailState.dragonDetail.lockStatus != 0) {
           return $message({
                type: 'warning',
                message:'Your dragon is locked, please try again in 3 minutes',
                customClass: 'zZindex',
            })
        }
        console.log('myDragonDetailState.sendForm.walletAddress', ethers.utils.isAddress(myDragonDetailState.sendForm.walletAddress))
        if (!ethers.utils.isAddress(myDragonDetailState.sendForm.walletAddress)) {
            return $message({
                type: 'warning',
                message: t(`message['receive.not.address']`),
                customClass: 'zZindex',
            })
        }


        const contract = getSendDragonContract()
        let params = {
            tokenId: BigNumber.from(myDragonDetailState.dragonDetail.no.toString()),

        }
        const tx = await contract.functions["ownerOf(uint256)"](params.tokenId);
        console.log('tx', tx[0], myDragonDetailState.myAddress)
        if ((tx[0]).toLowerCase() != myDragonDetailState.myAddress) {
            return $message({
                type: 'warning',
                message: t(`message['addressNotSamemyAddress']`),
                customClass: 'zZindex',
            })
        }


        sendDragonApi()
    }
    const sendDragonApi = async () => {
        // const balance = await myWallet()
        // if (0 > (new Decimal(balance).sub(new Decimal(0.005))).toNumber()) {
        //     return $message({
        //         type: 'warning',
        //         message: 'Sorry, your BNB is not enough'
        //     })
        // }
        myDragonDetailState.sendLoading = true
        let params = {
            heroId: myDragonDetailState.dragonDetail.id,
            recvAddress: myDragonDetailState.sendForm.walletAddress
        }
        API.myMainland.sendDragonEgg(params).then(res => {
            if (res.code == 0) {
                sendDragonContract(res.data)
            } else {
                myDragonDetailState.sendLoading = false
                $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })
            }
        })
    }

    const sendDragonContract = async (data) => {
        const contract = getSendDragonContract()
        let params = {
            from: data.sendAddr,
            to: data.recvAddr,
            tokenId: BigNumber.from(data.heroNo.toString()),

        }
        console.log('getSendDragonContract', params)


        try {
            const tx = await contract.functions["safeTransferFrom(address,address,uint256)"](params.from, params.to, params.tokenId);
            console.log('tx', tx)
            if (tx) {
                let data1 = {
                    id: data.id,
                    transHash: tx.hash,
                }
                sendDragonApiCallBack(data1, tx)
            }
        } catch (error) {
            console.log('error', error)
            myDragonDetailState.sendLoading = false
            $message({
                type: 'warning',
                message: t(`message['${error.message}']`),
                customClass: 'zZindex',
            })
            let cancelParams = {
                id: data.id,
            }
            API.myMainland.sendDragonEggCancel(cancelParams).then(res => {

            })
        }



    }

    const sendDragonApiCallBack = (data, contract) => {
        let params = {
            id: data.id,
            trHash: data.transHash
        }
        API.myMainland.sendDragonEggCallBack(params).then(res => {
            if (res.code == 0) {
                contractSendDragonResp(contract)

            } else {
                $message.warning(t(`message['${res.i18n}']`));
            }
        })
    }

    const contractSendDragonResp = async (contract) => {
        let receipt = await contract.wait()
        console.log('receipt', receipt)
        await getBalanceHandle()
        myDragonDetailState.sendLoading = false
        myDragonDetailState.sendDragonShow = false
        $message.success('success');
        router.back()
    }

    const dragonAddressIsSameWalletAddress = async () => {
        let params = {
            heroId: myDragonDetailState.dragonDetail.id
        }
        let res = await API.myMainland.GetWalletAddressByID(params)
        if (res.code == 0) {
            myDragonDetailState.myAddress = res.data.ownerAddress
        } else {
            $message.warning(t(`message['${res.i18n}']`));
        }

    }


    const upDragon = () => {
        // console.log('upDragon')
        // loadingHandle(true, 'isApprove...')
        // isApprove()
        myDragonDetailState.sellBoxshow = true

    }
    const upDragonAPi = () => {
        console.log('upDragonAPi')
        let params = {
            productId: myDragonDetailState.dragonDetail.id,
            saleType: myDragonDetailState.sellForm.type, // 1固定价格，2 拍卖,
            price: myDragonDetailState.sellForm.price,
            type: myDragonDetailState.dragonDetail.status, // 1龙蛋 2龙 3龙骨
        }
        // let data = {
        //     no:8888,
        //     price:0.03,
        //     saleType:1,
        // }
        // return getMarketContractHandle(data)

        API.myMainland.productUp(params).then(res => {
            if (res.code == 0) {
                getMarketContractHandle(res.data)

            } else {
                $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })
            }
        })
    }

    const isApprove = async () => {
        let address = await initWallet()
        if (myDragonDetailState.myAddress != address) {
            return $message({
                type: 'warning',
                message: t(`message['addressNotSamemyAddress']`),
                customClass: 'zZindex',
            })
        }
        let params = {
            address: myDragonDetailState.myAddress,
            contractAddress: process.env.NODE_ENV === 'production' ? DragonExchange.address_prod : DragonExchange.address,
            bool: 1,
        }
        let res = await setApprovalForAll(params)
        console.log('setApprovalForAll', res)
        if (res) {
            loadingHandle(true, 'uping...')
            upDragonAPi()
        }

    }


    const getMarketContractHandle = async (data) => {
        const contract = getMarketContract()
        console.log('contract', contract)
        console.log('data', data)
        let params = {
            tokenId: BigNumber.from(myDragonDetailState.dragonDetail.no.toString()),
            price: ethers.utils.parseEther(data.price.toString()),
            exType: data.saleType, // BigNumber.from(data.heroNo.toString()),
            minPrice: data.saleType == 2 ? ethers.utils.parseEther(data.minPrice.toString()) : ethers.utils.parseEther((0).toString()),
            maxPrice: data.saleType == 2 ? ethers.utils.parseEther(data.maxPrice.toString()) : ethers.utils.parseEther((0).toString()),
            timeHours: data.saleType == 2 ? BigNumber.from(data.timeHours.toString()) : BigNumber.from((0).toString()),
        }
        console.log('getSendDragonContract', params)


        try {
            const tx = await contract.addMarket(params.tokenId, params.price, params.exType, params.minPrice, params.maxPrice, params.timeHours);
            console.log('tx', tx)
            if (tx) {
                let data1 = {
                    id: data.id,
                    transHash: tx.hash,
                }
                upDragonCallBack(data1, tx)
            }
        } catch (error) {
            console.log('error', error)
            loadingHandle(false,)
            $message({
                type: 'warning',
                message: t(`message['${error.data ? error.data.message : error.message}']`),
                customClass: 'zZindex',
            })
            // let cancelParams = {
            //     id: data.id,
            // }
            // API.myMainland.sendDragonEggCancel(cancelParams).then(res => {

            // })
        }
    }


    const upDragonCallBack = (data, contract) => {
        let params = {
            id: data.id,
            transNo: data.transHash,
            status: 1,// 1上架 2 下架 
        }
        API.myMainland.upProductCallback(params).then(res => {
            if (res.code == 0) {
                contractUpDragonResp(contract)

            } else {

                $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })
            }
        })
    }


    const contractUpDragonResp = async (contract) => {
        loadingHandle(true, 'Sell...')
        let receipt = await contract.wait()
        console.log('receipt', receipt)
        loadingHandle(false)
        $message.success('success');
        router.back()
    }

    const loadingHandle = (flag, text) => {
        if (myDragonDetailState.loadingForm.loadingShow) {
            myDragonDetailState.loadingForm.loadingShow = false
            myDragonDetailState.selectLocalDragon = null
        }
        nextTick(() => {
            myDragonDetailState.loadingForm.loadingShow = flag ? flag : false
            myDragonDetailState.loadingForm.loadingShowText = text ? text : 'Loading...'
        })

    }

    const selectMethod = (type) => {
        myDragonDetailState.sellForm.type = type
    }

    const cancelSell = () => {
        myDragonDetailState.sellBoxshow = false
        initSellForm()
    }

    const confirmSell = () => {
        if (myDragonDetailState.sellForm.type == 1) {
            if (!myDragonDetailState.sellForm.price) {
                return $message({
                    type: 'warning',
                    message: 'please write price',
                    customClass: 'zZindex',
                })
            }
        }

        if (myDragonDetailState.sellForm.type == 2) {
            if (!myDragonDetailState.sellForm.startPrice) {
                return $message({
                    type: 'warning',
                    message: 'please write startPrice',
                    customClass: 'zZindex',
                })
            }
            if (!myDragonDetailState.sellForm.endPrice) {
                return $message({
                    type: 'warning',
                    message: 'please write endPrice',
                    customClass: 'zZindex',
                })
            }
            if (!myDragonDetailState.sellForm.days) {
                return $message({
                    type: 'warning',
                    message: 'please write days',
                    customClass: 'zZindex',
                })
            }
        }
        loadingHandle(true, 'isApprove...')
        isApprove()
    }

    const goMiningCamp = () => {
        router.push({ path: `/myMainland/miningCamp` })
    }



    return {
        myDragonDetailState,
        init,
        back,
        openDradonEgg,
        handleAnimation,
        sendDragon,
        closeBox,
        confirm,
        dragonAddressIsSameWalletAddress,
        upDragon,
        selectMethod,
        cancelSell,
        confirmSell,
        goMiningCamp,
    }
}