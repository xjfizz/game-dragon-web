/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, computed, watch, nextTick } from "vue";
import { useStore } from 'vuex'
import { useRouter, useRoute } from "vue-router";
import { getSession, setSession, getToken, setCookie } from "@/utils/auth.js";

import { initWallet, myWallet, getDragonMainlandShardIDOContract, getBalanceHandle, setApprovalForAll, isApprovedForAll } from "@/utils/metaMask/ethers.js";
import { ethers, BigNumber } from "ethers";
import clip from "@/utils/clipboard";
import pageHandle from '@/components/page/use/index.js'
import { useI18n } from "vue-i18n"; //要在js中使用国际化






// 初始化数据
const dragonSignUpState = reactive({
    form: {
        email: "",
        walletAddress: "",

    },
    searchForm: {
        walletAddress: '',
    },
    loadingForm: {
        loadingShow: false,
        loadingShowText: 'Loading...',
    },
    submitSuccessShow: false,
    rankList: [],
    rankListPageInfo: {
        pageSize: 20,
        currentPage: 1,
        total: 0,
        totalPages: 2,

    },
    submitBoxForm: {
        content: 'You have successfully applied, please wait for the announcement',
        closeBtnText: 'Back',
    },
    receiveWallet: {},
    codeShow: false,
    verificationCodeShow: false,
    verificationImgForm: {
        img: '',
        code: ""
    },
    codeHandle: {
        data: null,
        func: null
    },
    verificationImgCodeLoading: false,
    isPay: false,

});





export default function dragonSignUpHandle() {

    const router = useRouter()
    const route = useRoute()

    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const $message = inject("$message");
    const { t } = useI18n();
    const store = useStore();
    const { initPage } = pageHandle()
    onMounted(() => {
        getUserMessage()


    });
    const init = () => {
        // dragonSignUpState.form.walletAddress = getSession('address')
        getActivityDetail()
        initList()

    }

    const initList = () => {
        initPageInfo()
        getRankList()
    }

    const initPageInfo = () => {
        dragonSignUpState.searchForm.walletAddress = ''
        dragonSignUpState.rankListPageInfo.pageSize = 20
        dragonSignUpState.rankListPageInfo.currentPage = 1
        dragonSignUpState.rankListPageInfo.total = 1
        dragonSignUpState.rankListPageInfo.totalPages = 1

    }
    const getRankList = () => {
        let params = {
            limit: dragonSignUpState.rankListPageInfo.pageSize,
            page: dragonSignUpState.rankListPageInfo.currentPage,
            walletAddress: dragonSignUpState.searchForm.walletAddress,
        }
        API.dragonSignUp.getDragonSignUpList(params).then(res => {
            console.log('getRankList', res)
            if (res.code == 0) {
                dragonSignUpState.rankList = res.data.list
                dragonSignUpState.rankListPageInfo = res.data.pageInfo
                initPage(res.data.pageInfo)
            }
        })

    }



    const getUserMessage = () => {
        let params = {
            // id: JSON.parse(getSession('user')).uid
        }
        API.activity.getUser(params).then((res) => {
            if (res.code == 0) {
                dragonSignUpState.form.email = res.data.email
                dragonSignUpState.form.walletAddress = res.data.walletAddress
                init()
            }
        });

    }
    const getActivityDetail = () => {
        let params = {

        }
        API.dragonSignUp.dragonSignUpDetail(params).then((res) => {
            if (res.code == 0) {
                if (res.data) {
                    dragonSignUpState.form = res.data
                    dragonSignUpState.submitSuccessShow = true
                } else {
                    dragonSignUpState.submitSuccessShow = false
                }

            }
        });
    }

    const submit = async () => {
        let data = {
            walletAddress: dragonSignUpState.form.walletAddress,
        }
        dragonSignUpState.codeHandle = {
            data: data,
            func: submitHandle,
        }
        let img = await getCode(data.walletAddress)
        console.log('img------------', img)
        openImgCodeBox()
    }

    const submitHandle = () => {
        let params = {
            "email": dragonSignUpState.form.email,
            "uid": JSON.parse(getSession('user')).uid,
            "walletAddress": dragonSignUpState.form.walletAddress,
            code: dragonSignUpState.verificationImgForm.code
        }
        API.dragonSignUp.dragonSignUpCreate(params).then(async (res) => {
            if (res.code == 0) {
                closeImgCodeBox()
                dragonSignUpState.submitSuccessShow = true
            } else {
                dragonSignUpState.verificationImgCodeLoading = false
                await getCode(dragonSignUpState.form.walletAddress)
                return $message({
                    type: 'warning',
                    message: res.msg,
                    customClass: 'zZindex',
                })
            }
        });
    }
    const closeBox = () => {
        dragonSignUpState.submitSuccessShow = false
        router.back()
        // return router.push({ path: "/activityStart" });

    }


    const openTips = () => {
        $message({
            type: 'warning',
            message: 'Please fill in the wallet address accurately, which will be bound to the account'
        })
    }


    const leftPage = () => {
        console.log('leftPage')
        if (dragonSignUpState.rankListPageInfo.currentPage <= 1) {
            return
        }
        dragonSignUpState.rankListPageInfo.currentPage--
        getRankList()
    }

    const rightPage = () => {

        if (dragonSignUpState.rankListPageInfo.currentPage >= dragonSignUpState.rankListPageInfo.totalPages) {
            return
        }
        dragonSignUpState.rankListPageInfo.currentPage++
        getRankList()
    }

    const search = (data) => {
        console.log('search', data)
        dragonSignUpState.rankListPageInfo.currentPage = Number(data)
        getRankList()
    }
    const pay = () => {
        // payContract({ price: 0.01 })
        payApi()
    }

    const loadingHandle = (flag, text) => {
        if (dragonSignUpState.loadingForm.loadingShow) {
            dragonSignUpState.loadingForm.loadingShow = false
        }

        nextTick(() => {
            dragonSignUpState.loadingForm.loadingShow = flag ? flag : false
            dragonSignUpState.loadingForm.loadingShowText = text ? text : 'Loading...'
        })
    }
    const payApi = async () => {
        let address = await initWallet()
        if (address != dragonSignUpState.form.walletAddress) {
            return $message.warning(t(`message['addressNotSamePayAddress']`));
        }
        loadingHandle(true, t(`message['paying']`))
        let params = {
            walletAddress: address
        }
        API.dragonSignUp.idoPay(params).then((res) => {
            if (res.code == 0) {
                payContract(res.data)
            } else {
                loadingHandle(false)
                return $message({
                    type: 'warning',
                    message: t(`message['${res.msg}']`),
                    customClass: 'zZindex',
                })
            }
        });
    }

    const payContract = async (data) => {
        const contract = getDragonMainlandShardIDOContract()
        console.log('contract', contract)
        console.log('data', data)
        let params = {
            price: ethers.utils.parseEther(data.bnbPrice.toString()),

        }
        console.log('getSendDragonContract', params)


        try {
            const tx = await contract.functions.deposit({ value: params.price });
            console.log('tx', tx)
            if (tx) {
                let data1 = {
                    id: data.productId,
                    transHash: tx.hash,
                }
                payBackAPi(data1, tx)
            }
        } catch (error) {
            console.log('error', error)
            loadingHandle(false,)
            $message({
                type: 'warning',
                message: t(`${error.data ? error.data.message : error.message}`),
                customClass: 'zZindex',
            })

        }
    }


    const payBackAPi = (data, contract) => {
        let params = {
            id: data.id,
            transNo: data.transHash
        }
        API.dragonSignUp.idoCallback(params).then(res => {
            if (res.code == 0) {
                contractPayResp(contract)

            } else {
                $message.warning(t(`message['${res.msg}']`));
            }
        })
    }


    const contractPayResp = async (contract) => {
        loadingHandle(true, t(`message['wait.pay.result']`))
        let receipt = await contract.wait()
        console.log('receipt', receipt)
        loadingHandle(false)
        $message.success(t(`message['pay.success']`));
        initList()
        getActivityDetail()
        // router.back()
    }

    const getReceiveWalletAddress = () => {
        let params = {}
        API.dragonSignUp.getIdoWalletAddress(params).then(res => {
            if (res.code == 0) {
                dragonSignUpState.receiveWallet = res.data

            } else {
                $message.warning(t(`message['${res.msg}']`));
            }
        })
    }


    const getCode = async (data) => {
        return new Promise((resolve, reject) => {
            let params = {
                walletAddress: data
            }
            API.dragonSignUp.getImgCode(params).then(res => {
                console.log('res-------------', res)
                dragonSignUpState.verificationImgForm.img =
                    "data:image/png;base64," + btoa(new Uint8Array(res).reduce((res, byte) => res + String.fromCharCode(byte), ""));
                console.log(' dragonSignUpState.verificationImgForm.img', dragonSignUpState.verificationImgForm.img)
                resolve(dragonSignUpState.verificationImgForm.img)
            })
        })



    }

    const confirm = () => {
        dragonSignUpState.verificationImgCodeLoading = true
        dragonSignUpState.codeHandle.func(dragonSignUpState.codeHandle.data)
    }

    const closeImgCodeBox = () => {
        dragonSignUpState.verificationCodeShow = false
        dragonSignUpState.verificationImgCodeLoading = false
        dragonSignUpState.verificationImgForm.img = ''
        dragonSignUpState.verificationImgForm.code = ''
    }

    const openImgCodeBox = () => {
        dragonSignUpState.verificationCodeShow = true
    }

    const isShowActivity = async () => {
        let localTime = await getNowTime();
        let beginTime1 = new Date('2021/11/03 20:00:00').getTime(); // close 
        let beginTime2 = new Date('2021/11/03 20:30:00').getTime(); // show rank no pay
        let beginTime3 = new Date('2021/11/05 20:00:00').getTime(); // show rank  pay
        let beginTime4 = new Date('2021/11/07 20:00:00').getTime(); // close no pay

        // let beginTime1 = new Date('2021-11-03 20:00:00').getTime(); // close 
        // let beginTime2 = new Date('2021-11-03 20:30:00').getTime(); // show rank no pay
        // let beginTime3 = new Date('2021-11-05 19:15:00').getTime(); // show rank  pay
        // let beginTime4 = new Date('2021-11-06 20:00:00').getTime(); // close no pay

        if (localTime < beginTime1) {
            dragonSignUpState.isPay = false
        } else if (localTime >= beginTime1 && localTime < beginTime2) {
            dragonSignUpState.isPay = false
        } else if (localTime > beginTime2 && localTime < beginTime3) {
            dragonSignUpState.isPay = false
        } else if (localTime >= beginTime3 && localTime < beginTime4) {
            dragonSignUpState.isPay = true
        } else if (localTime >= beginTime4) {
            dragonSignUpState.isPay = false
        }
    }

    const getNowTime = () => {
        return new Promise((resolve, reject) => {
            API.activity.getServericeTime({}).then((res) => {
                resolve(res.data.timestamp);
            });
        });
    }



    const confirmSearch = () => {
        dragonSignUpState.searchForm.walletAddress = dragonSignUpState.searchForm.walletAddress.replace(/\s+/g, "");
        search(1)
    }

    return {
        dragonSignUpState,
        submit,
        closeBox,
        openTips,
        leftPage,
        rightPage,
        search,
        initList,
        pay,
        getReceiveWalletAddress,
        getCode,
        confirm,
        closeImgCodeBox,
        openImgCodeBox,
        isShowActivity,
        confirmSearch,
    }
}