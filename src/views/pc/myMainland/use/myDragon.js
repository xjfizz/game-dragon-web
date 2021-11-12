/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, ref, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getStorage, setCookie, setSession, getSession } from "@/utils/auth.js";
import { initWallet, myWallet, transferAccounts, getContract, getSendDragonContract, getExchangeContract, getBalanceHandle } from "@/utils/metaMask/ethers.js";
import { ethers, BigNumber } from "ethers";
import { useI18n } from "vue-i18n"; //要在js中使用国际化
import dragonLocalTypeList from "./dragonLocalTypeList";
import { path } from "animejs";
import Confetti from "@/assets/lottie/dragonEgg-claim/DragonEgg.json";
import html2canvas from "html2canvas";
import { useStore } from "vuex";
import { Decimal } from 'decimal.js'
import pageHandle from '@/components/page/use/index.js'
import common from "@/utils/common";


const eggToDragon = ref(null);
console.log('eggToDragon', eggToDragon)
// 初始化数据
const myDragonState = reactive({
    isShowExchange: false,
    loadingForm: {
        loadingShow: false,
        loadingShowText: 'Loading...',
    },
    isOpening: false,
    exchangeDragonShow: false,
    buyLoading: false,
    dragonExchangeForm: {
        code: '',
    },
    dragonLocalTypeList: dragonLocalTypeList,
    dragonList: [],
    dragonEggListPageInfo: {
        pageSize: 24,
        currentPage: 1,
        total: 0,
        totalPages: 0,

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
    serverceTime: null,


});





export default function myDragon() {

    const router = useRouter()
    const route = useRoute()
    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const store = useStore()
    const $message = inject("$message");
    const { t } = useI18n();
    const { initPage } = pageHandle()

    const init = () => {
        loadingHandle(false)
        myDragonState.isOpening = false
        myDragonState.dragonLocalTypeList = dragonLocalTypeList
        myDragonState.dragonList = []
        myDragonState.dragonEggListPageInfo = {
            pageSize: 24,
            currentPage: 1,
            total: 0,
            totalPages: 0,

        }
        myDragonState.isStartDragon = false
        myDragonState.selectLocalDragon = null
        myDragonState.serverceTime = null
    }
    // 时间校对
    const timeCheck = () => {
        console.log('timeCheck==============')
        // window.location.reload();
        init()
        dragonEggList()
    }

    const dragonEggList = () => {
        let params = {
            limit: myDragonState.dragonEggListPageInfo.pageSize,
            page: myDragonState.dragonEggListPageInfo.currentPage,
        }
        API.myMainland.myDragonEgg(params).then(async res => {
            if (res.code == 0) {
                // myDragonState.dragonList = myDragonState.dragonList.concat(res.data.list)
                myDragonState.dragonList = res.data.list
                myDragonState.dragonEggListPageInfo = res.data.pageInfo
                // myDragonState.dragonList = myDragonState.dragonList.concat(res.data.list)
                console.log('myDragonState.dragonList', myDragonState.dragonList)
                myDragonState.serverceTime = await getNowTime()
                for (let i in myDragonState.dragonList) {
                    if (myDragonState.dragonList[i].no > 10000) {

                        myDragonState.dragonList[i].hatchTime = new Date(myDragonState.dragonList[i].createTime).getTime() + 3 * 24 * 60 * 60 * 1000 // ID  大于10000 3天
                    } else {
                        myDragonState.dragonList[i].hatchTime = new Date(myDragonState.dragonList[i].createTime).getTime() + 7 * 24 * 60 * 60 * 1000 // ID  小于等于10000 7天
                    }
                    console.log('myDragonState.dragonList', myDragonState.dragonList)

                    myDragonState.dragonList[i].countDownTime = ['00', '00', '00', '00']
                    myDragonState.dragonList[i].isStartDragon = false
                    console.log(' myDragonState.dragonList[i].hatchTime', myDragonState.dragonList[i].hatchTime)
                    countDown(i)
                    initPage(res.data.pageInfo)


                }
            } else {
                $message.warning(t(`message['${res.i18n}']`));
            }
        })
    }

    const hatchDragonImg = () => {
        return new Promise(async (resolve, reject) => {
            let params = {
                heroId: myDragonState.selectLocalDragon.id,
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
                allowTaint: true
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
        // myDragonState.isOpening = true
        loadingHandle(true, 'Dragon being generated, please do not refresh...')
        myDragonState.selectLocalDragon = item
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
                    growUpDragonEgg(res.data, item)



                } else {
                    $message.warning(t(res.i18n));
                }
            })
        })




    }
    const growUpDragonEgg = (data, item) => {
        loadingHandle(true, 'Payment is in progress, please do not refresh...')
        console.log('  myDragonState.loadingForm', myDragonState.loadingForm)
        const contract = getSendDragonContract()
        console.log('contract', contract)

        let params = {
            id: BigNumber.from(data.no.toString()),
            geneDomi: BigNumber.from(data.geneDomi.toString()),
            geneRece: BigNumber.from((data.recessive + data.recessiveSec).toString()),
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
        // growupDragonEgg
        contract.hatchDragonEggs(params.id, params.geneDomi, params.geneRece, params.matronId, params.sireId, params.stage, params.attr, params.skill, params.uri, params.timestamp, params.sign).then(async res => {
            console.log('res', res)
            if (res) {
                // myDragonState.isOpening = false
                loadingHandle(false)
                startClaim(item)
                let data1 = {
                    id: data.id,
                    orderId: data.orderId,
                    transHash: res.hash,
                    no: data.no
                }
                hatchPaymentHandle(data1, res)
            }
        }).catch((error) => {
            // myDragonState.isOpening = false
            loadingHandle(false)
            console.log('error', error)
            if (error.code == 4001) {
                $message.warning(error.message);
            } else {
                $message.warning(error.data);
            }

            // eggPayCancel(data)
        })
    }

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


    const dragonEggImgHandle = (state) => {
        return require(`@/assets/imgs/myMainland/myDragon/eggs/egg${myDragonState.dragonLocalTypeList[state]}.png`)
    }

    const dragonClazzImgHandle = (state) => {
        return require(`@/assets/imgs/myMainland/myDragon/dragon-clazz/clazz${myDragonState.dragonLocalTypeList[state]}.png`)
    }

    // 孵化时间倒计时

    const countDown = async (i) => {
        let item = myDragonState.dragonList[i]
        let startTime = myDragonState.serverceTime;//当前时间
        let end = new Date(item.hatchTime); //结束时间
        let result = parseInt((end - startTime) / 1000); //计算出豪秒
        myDragonState.dragonList[i].countDownFn = setInterval(() => {
            console.log('result', result)
            result -= 1
            if (result <= 0) {
                clearInterval(myDragonState.dragonList[i].countDownFn)
            }
            item.countDownTime = countDownFun(result);
            console.log(' item.countDownTime', item.countDownTime)
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
        console.log('countDownFun', d, h, m, s)
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



    const goDetail = (item) => {
        console.log(item)
        router.push({ path: `/myMainland/myDragonDetail/${item.id}` })
    }

    const createDragon = (item) => {
        let commonUrl = '@/assets/dragon/dragon-part'
        let url = null
        if (item.partId == 1) { // eye
            url = `/eye/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 2) { // totems
            url = `/totems/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 3) { // horn
            url = `/horn/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 4) { // ear
            url = `/ear/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 5) { // wing
            url = `/wing/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 6) { // tail
            url = `/tail/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 7) { // body
            url = `/body/${dragonType(item)}/${item.dnaPic}.png`
        }
        return require(`@/assets/dragon/dragon-part${url}`)

        //  return `https://dragonmainland.s3.ap-southeast-1.amazonaws.com/parts/${item.dnaPic}.png`
    }

    const createDragonPart = (item) => {
        // let commonUrl = '@/assets/dragon/dragon-part'
        let url = null
        if (item.partId == 1) { // eye
            url = `/eye/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 2) { // totems
            url = `/totems/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 3) { // horn
            url = `/horn/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 4) { // ear
            url = `/ear/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 5) { // wing
            url = `/wing/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 6) { // tail
            url = `/tail/${dragonType(item)}/${item.dnaPic}.png`
        } else if (item.partId == 7) { // body
            url = `/body/${dragonType(item)}/${item.dnaPic}.png`
        }
        // return require(`${url}`)
        return require(`@/assets/dragon/dragon-part-detail${url}`)
    }

    const dragonType = (item) => {
        let str = (item.dnaPic.split('_')[0]).toLowerCase()
        return str
    }



    const handleAnimation = (anim) => {
        myDragonState.anim = anim;
        console.log('handleAnimation===========', anim);
    };
    const startClaim = (item) => {
        item.isStartDragon = true;
        console.log('myDragonState', myDragonState)
        // myDragonState.anim.goToAndPlay(0, true);
        setTimeout(() => {
            // myDragonState.isStartDragon = true;
            myDragonState.anim.goToAndPlay(0, true);
        }, 1000);
    };


    const contractResp = async (contract) => {
        // loadingHandle(true, 'wait for  the hatch result...')
        loadingHandle(false)
        let receipt = await contract.wait()
        console.log('receipt', receipt)
        await getBalanceHandle()
        dragonEggList()
        loadingHandle(false,)
        $message.success('success');
    }

    const setIntelDragonDetail = (id) => {
        let setIntervalTime = setInterval(async () => {
            let status = await myDragonDetail(id)
            console.log('setIntervalTime', status)
            if (status == 2) {
                clearInterval(setIntervalTime)
                dragonEggList()
                $message.success('success');
            } else {
                startClaim()
            }
        }, 1000)
    }

    const myDragonDetail = (id) => {
        return new Promise((resolve, reject) => {
            let params = {
                no: id
            }
            API.myMainland.getDragonEggDetailByHeroId(params).then(res => {
                if (res.code == 0) {
                    resolve(res.data.status)
                }
            })
        })

    }
    const startClaimTest = (item) => {
        item.status = 1
        item.countDownTime = false
        startClaim(item)
        setTimeout(() => {
            dragonEggList()
            $message.success('success');
        }, 5000)
    }

    const leftPage = () => {
        console.log('leftPage')
        if (myDragonState.dragonEggListPageInfo.currentPage <= 1) {
            return
        }
        myDragonState.dragonEggListPageInfo.currentPage--
        dragonEggList()
    }

    const rightPage = () => {
        console.log('rightPage', myDragonState.dragonEggListPageInfo)
        // if(myDragonState.dragonEggListPageInfo.page <= 1) {
        //     return
        // }
        if (myDragonState.dragonEggListPageInfo.currentPage >= myDragonState.dragonEggListPageInfo.totalPages) {
            return
        }
        myDragonState.dragonEggListPageInfo.currentPage++
        dragonEggList()
    }

    const search = (data) => {
        console.log('search', data)
        myDragonState.dragonEggListPageInfo.currentPage = Number(data)
        dragonEggList()
    }

    const exchangeDragonClick = () => {
        console.log('exchangeDragon')
        myDragonState.exchangeDragonShow = true
    }

    const closeBox = () => {
        myDragonState.exchangeDragonShow = false
        myDragonState.dragonExchangeForm.code = ''
    }

    const confirm = () => {
        console.log('confirm', Number(myDragonState.dragonExchangeForm.code))
        if (!myDragonState.dragonExchangeForm.code || isNaN(myDragonState.dragonExchangeForm.code) || parseFloat(myDragonState.dragonExchangeForm.code) < 0) {
            return myDragonState.dragonExchangeForm.code = ''
        }
        myDragonState.buyLoading = true
        buyEggHandle()
    }

    const buyEggHandle = async () => {
        let address = await initWallet()
        let md5Form = {
            timestamp: new Date().getTime(),
            contractAddress: address, // getSession('address'),
        }
        let sign = await common.md5Exange(md5Form)
        let params = {
            clazz: 2,
            contractAddress: address , // getSession('address'),
            timestamp: md5Form.timestamp,
            sign: sign,
            no: myDragonState.dragonExchangeForm.code, //  8601-9500

        }
        API.myMainland.presaleExchange(params).then(async res => {
            if (res.code == 0) {
                getContractHandle(res.data)

            } else if (res.code == 10007) {
                myDragonState.buyLoading = false
                return $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })

            } else {
                myDragonState.buyLoading = false
                return $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })
            }

        })
    }


    // 合约相关
    const getContractHandle = async (data) => {
        let params = {
            tokenId: BigNumber.from(data.heroId.toString()),
            sign: data.sign,
            timestamp: BigNumber.from(data.timestamp.toString()),
        }
        /*  Todo */
        const contract = getExchangeContract()
        console.log('contract', contract)
        try {
            let contractBuyRes = await contract.exchange(params.tokenId, params.timestamp, params.sign)
            if (contractBuyRes && contractBuyRes.hash) {
                let params = {
                    id: data.id,
                    transHash: contractBuyRes.hash,
                    // checkCode: data.checkCode,
                    heroId: data.heroId,
                    status: 1
                }
                eggPay(params, contractBuyRes)
            }
        } catch (error) {
            myDragonState.buyLoading = false
            //  eggPayCancel(data)
            if (error.code == 4001) {
                return $message({
                    type: 'warning',
                    message: error.message,
                    customClass: 'zZindex',
                })
            } else {
                return $message({
                    type: 'warning',
                    message: error.data.message,
                    customClass: 'zZindex',
                })
            }
        }

    }


    const eggPay = async (data, contract) => {
        let address = await initWallet()
        let params = {
            id: data.id,
            transHash: data.transHash,
            //  checkCode: '123456', // data.checkCode,
            address: address,
            status: data.status,
        }
        API.activity.buyEggPay(params).then(res => {
            if (res.code == 0) {
                contractRespBuy(contract)
            } else {
                myDragonState.buyLoading = false
                return $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })
            }
        })
    }


    const contractRespBuy = async (contract) => {
        try {
            let receipt = await contract.wait()
            myDragonState.exchangeDragonShow = false
            myDragonState.buyLoading = false
            dragonEggList()
        } catch (error) {
            myDragonState.buyLoading = false
            return $message({
                type: 'warning',
                message: t(`message['purchase.failed.err']`),
                customClass: 'zZindex',
            })
        }

    }

    const eggPayCancel = (data) => {
        let params = {
            id: data.id
        }
        API.activity.buyEggCancel(params).then(res => {
            if (res.code == 0) {

            }
        })
    }

    const loadingHandle = (flag, text) => {
        if (myDragonState.loadingForm.loadingShow) {
            myDragonState.loadingForm.loadingShow = false
            myDragonState.selectLocalDragon = null
        }
        nextTick(() => {
            myDragonState.loadingForm.loadingShow = flag ? flag : false
            myDragonState.loadingForm.loadingShowText = text ? text : 'Loading...'
        })

    }

    const showExchange = async () => {
        let localTime = await getNowTime();
        let beginTime1 = new Date('2021-11-05 20:00:00').getTime(); //  
        //  let beginTime1 = new Date('2021-11-05 19:20:00').getTime(); //  

        if (localTime < beginTime1) {
            myDragonState.isShowExchange = false
        } else if (localTime >= beginTime1) {
            myDragonState.isShowExchange = true
        }
    }


    return {
        myDragonState,
        dragonEggList,
        openDradonEgg,
        dragonEggImgHandle,
        goDetail,
        dragonClazzImgHandle,
        createDragon,
        createDragonPart,
        handleAnimation,
        startClaimTest,
        leftPage,
        rightPage,
        search,
        timeCheck,
        exchangeDragonClick,
        confirm,
        closeBox,
        showExchange,
    }
}