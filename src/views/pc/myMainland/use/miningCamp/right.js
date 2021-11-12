/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, ref, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getStorage, setCookie, setSession, getSession } from "@/utils/auth.js";
import { initWallet, myWallet, transferAccounts, getDragonStakingContract, getBalanceHandle, setApprovalForAll } from "@/utils/metaMask/ethers.js";
import { ethers, BigNumber } from "ethers";
import DragonStaking from '@/utils/metaMask/dragonJson/DragonStaking.json' // 质押
import { useI18n } from "vue-i18n"; //要在js中使用国际化

import { path } from "animejs";
import Confetti from "@/assets/lottie/dragonEgg-claim/DragonEgg.json";
import html2canvas from "html2canvas";
import { useStore } from "vuex";
import { Decimal } from 'decimal.js'
import common from "@/utils/common";
import miningCampLeftHandle from "./left";
import pageHandle from '@/components/page/use/index.js'


// 初始化数据
const miningCampRightState = reactive({
    loadingForm: {
        loadingShowText: 'Loading...',
        loadingShow: false,
    },
    miningCampList: [],
    earnedDetailShow: false,
    earnPartShow: false,
    cancelEarnShow: false,
    localSelected: null,
    dragonEggListPageInfo: {
        pageSize: 6,
        currentPage: 1,
        total: 0,
        totalPages: 0,

    },
    serverceTime: null,
    localEarnDetail: {},
    localEarnItem: {}

});





export default function miningCampRightHandle(context) {

    const router = useRouter()
    const route = useRoute()
    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const store = useStore()
    const $message = inject("$message");
    const { t } = useI18n();
    const { stakeDragons } = miningCampLeftHandle();
    const { initPage } = pageHandle()
    const rightInit = async () => {
        await clearTime()
        initData()
        getList()
    }
    // onMounted(()=> {
    //     rightInit()
    // })





    const initData = () => {
        miningCampRightState.miningCampList = []
        miningCampRightState.dragonEggListPageInfo = {
            pageSize: 6,
            currentPage: 1,
            total: 0,
            totalPages: 0,

        }
    }

    const earnDetail = (id) => {
        return new Promise((resolve, reject) => {
            let params = {
                id: id
            }
            API.miningCamp.pawnDragonDetail(params).then(res => {
                if (res.code == 0) {
                    res.data.earnedReward = String(res.data.earnedReward).replace(/^(.*\..{4}).*$/, "$1")
                    resolve(res.data)
                } else {
                    return $message({
                        type: 'warning',
                        message: res.msg,
                        customClass: 'zZindex',
                    })
                }
            })
        })

    }

    const getList = () => {
        let params = {
            limit: miningCampRightState.dragonEggListPageInfo.pageSize,
            page: miningCampRightState.dragonEggListPageInfo.currentPage,
        }
        API.miningCamp.miningCampList(params).then(async res => {
            if (res.code == 0) {
                miningCampRightState.miningCampList = res.data.list
                miningCampRightState.dragonEggListPageInfo = res.data.pageInfo
                initPage(res.data.pageInfo)
                console.log(' miningCampRightState.miningCampList', miningCampRightState.miningCampList)

                miningCampRightState.serverceTime = await getNowTime()
                for (let i in miningCampRightState.miningCampList) {
                    miningCampRightState.miningCampList[i].countDownTime = '00:00:00' //['00', '00', '00', '00']
                    miningCampRightState.miningCampList[i].isOverThreeHour = false
                    miningCampRightState.miningCampList[i].isFinshTime = false
                    miningCampRightState.miningCampList[i].isFinshTime = miningCampRightState.serverceTime >= miningCampRightState.miningCampList[i].pawnDragon.expEndTime ? true : false
                    if (!miningCampRightState.miningCampList[i].isFinshTime) {
                        countDown(i)
                    }
                }
            }
        })
    }


    const getNowTime = () => {
        return new Promise((resolve, reject) => {
            API.activity.getServericeTime({}).then(res => {
                resolve(res.data.timestamp)
            })

        })

    }

    const clearTime = () => {
       
        return new Promise((resolve, reject) => {
            if(miningCampRightState.miningCampList.length == 0) {
                resolve (true)
            }
            miningCampRightState.miningCampList.map(item => {
                if (item.countDownFn) {
                    clearInterval(item.countDownFn)
                    resolve(true)
                }
            })
        })
    }

    const countDown = async (i) => {
        let item = miningCampRightState.miningCampList[i]
        let startTime = miningCampRightState.serverceTime;//当前时间
        let end = new Date(item.pawnDragon.expEndTime); //结束时间
        // let start = new Date(item.pawnDragon.beginPawnTime); //开始时间
        let start = new Date(item.pawnDragon.lastExtractTime); //开始时间
        let result = parseInt((end - startTime) / 1000); //计算出豪秒
        let result2 = parseInt((end - start) / 1000); //计算出豪秒

        miningCampRightState.miningCampList[i].countDownFn = setInterval(async () => {
            console.log('result', result)
            result -= 1
            let setTime = process.env.NODE_ENV === 'production' ? (60 * 60 * 3) : (60 * 5)
            item.isOverThreeHour = result2 - result >= setTime ? true : false


            //if (result <= 0) {
            if (result <= 0) {
                item.countDownTime = '00:00:00';
                item.isFinshTime = true
                clearInterval(miningCampRightState.miningCampList[i].countDownFn)
                return
            }

            item.countDownTime = countDownFun(result);


            // if( item.isOverThreeHour) {
            //     await clearTime()
            //     getList()
            // }

            console.log(' item.countDownTime', item.countDownTime, item.isOverThreeHour)
        }, 1000)
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
            // item.isFinshTime = true
            return '00:00:00';
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
            // return ['00', '00', '00', s];
            return `00:00:${s}`
        } else if (d == 0 && h == 0) {
            //  return ['00', '00', m, s];
            return `00:${m}:${s}`
        } else if (d == 0) {
            //  return ['00', h, m, s];
            return `${h}:${m}:${s}`
        } else {
            //  return [d, h, m, s];
            return `${h}:${m}:${s}`
        }
    }

    const claim = async (item) => {
        // stakeDragons(item)
        miningCampRightState.localSelected = item
        miningCampRightState.localEarnDetail = await earnDetail(item.pawnDragon.id)
        miningCampRightState.earnedDetailShow = true
    }

    const stakeAgain = () => {
        miningCampRightState.earnedDetailShow = false
        stakeDragons(miningCampRightState.localSelected)
    }

    const claimNow = async () => {
        loadingHandle(true, 'Authorisation for testing in progress...')
        await isApprove(pawnBeginEndAPi, 'Completing pledge in progress...')
    }

    const cancelClaim = async () => {
        // miningCampRightState.localEarnDetail = await earnDetail(item.pawnDragon.id)
        miningCampRightState.earnedDetailShow = false
        // rightInit()
    }

    const rewards = async (item) => {
        console.log('item', item)
        miningCampRightState.localSelected = item
        miningCampRightState.localEarnDetail = await earnDetail(item.pawnDragon.id)
        miningCampRightState.earnPartShow = true
    }

    const cancelStaking = async (item) => {
        console.log('cancelStaking')
        miningCampRightState.localSelected = item
        miningCampRightState.localEarnDetail = await earnDetail(item.pawnDragon.id)
        miningCampRightState.cancelEarnShow = true
    }

    const rewardPartEarn = async () => {
        // miningCampRightState.earnPartShow = false


        loadingHandle(true, 'Authorisation for testing in progress...')
        await isApprove(pawnBeginAPi, 'Collecting revenue in progress...')
    }

    const cancelPartEarn = () => {
        miningCampRightState.earnPartShow = false
        // rightInit()
    }

    const sureCancelEarn = async () => {
        //  miningCampRightState.cancelEarnShow = false
        loadingHandle(true, 'Authorisation for testing in progress...')
        await isApprove(pawnBeginCancelAPi, 'Cancelling pledge in progress...')
    }

    const backToList = () => {
        miningCampRightState.cancelEarnShow = false
        // rightInit()
    }

    const leftPage = () => {
        if (miningCampRightState.dragonEggListPageInfo.currentPage <= 1) {
            return
        }
        miningCampRightState.dragonEggListPageInfo.currentPage--
        getList()
    }

    const rightPage = () => {
        if (miningCampRightState.dragonEggListPageInfo.currentPage >= miningCampRightState.dragonEggListPageInfo.totalPages) {
            return
        }
        miningCampRightState.dragonEggListPageInfo.currentPage++
        getList()
    }

    const search = (data) => {
        miningCampRightState.dragonEggListPageInfo.currentPage = Number(data)
        getList()
    }
    const loadingHandle = (flag, text) => {
        if (miningCampRightState.loadingForm.loadingShow) {
            miningCampRightState.loadingForm.loadingShow = false
            miningCampRightState.selectLocalDragon = null
        }
        nextTick(() => {
            miningCampRightState.loadingForm.loadingShow = flag ? flag : false
            miningCampRightState.loadingForm.loadingShowText = text ? text : 'Loading...'
        })

    }


    const isApprove = async (callBack, loadingText) => {
        let address = await initWallet()
        let params = {
            address: address,
            contractAddress: process.env.NODE_ENV === 'production' ? DragonStaking.address_prod : DragonStaking.address,
            bool: 1,
        }
        let res = await setApprovalForAll(params)
        console.log('setApprovalForAll', res)
        if (res) {
            loadingHandle(true, loadingText)
            callBack()
        } else {
            loadingHandle(false)
        }

    }

    // 质押-中途领取
    const pawnBeginAPi = async () => {

        console.log(miningCampRightState.localSelected)
        let params = {
            id: miningCampRightState.localSelected.pawnDragon.id
        }
        API.miningCamp.midwaySettlement(params).then(async res => {
            if (res.code == 0) {
                // miningCampLeftState.confirmDetailsForm = res.data
                await getStakingMidContractHandle(res.data)

            } else {
                loadingHandle(false)
                return $message({
                    type: 'warning',
                    message: res.msg,
                    customClass: 'zZindex',
                })
            }
        })
    }


    // 合约相关
    const getStakingMidContractHandle = async (data) => {
        let tokenIds = [BigNumber.from(data.toString())]
        let params = {
            tokenIds: tokenIds,
        }
        /*  Todo */
        const contract = getDragonStakingContract()
        console.log('contract', contract)
        console.log('params', params)
        try {
            let contractBuyRes = await contract.stakeEarn(params.tokenIds)
            if (contractBuyRes && contractBuyRes.hash) {
                let params = {
                    id: miningCampRightState.localSelected.pawnDragon.id,
                    transNo: contractBuyRes.hash,
                }
                pawnBeginAPiCallBack(params, contractBuyRes)
            }
        } catch (error) {
            loadingHandle(false)
            //  pawnBeginAPiCancel(data)
            console.log('error', error)
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







    const pawnBeginAPiCallBack = async (data, contract) => {
        let params = {
            id: data.id,
            transHash: data.transNo,
        }
        API.miningCamp.midwaySettlementCallback(params).then(res => {
            if (res.code == 0) {
                contractRespBuy(contract)
            } else {
                loadingHandle(false)
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
            loadingHandle(true, 'wait result...')
            let receipt = await contract.wait()
            miningCampRightState.earnPartShow = false
            $message({
                type: 'success',
                message: 'claim success',
                customClass: 'zZindex',
            })
            loadingHandle(false)
            context.emit('initMiningCamp')

        } catch (error) {
            loadingHandle(false)
            return $message({
                type: 'warning',
                message: 'fail',
                customClass: 'zZindex',
            })
        }

    }



    // 质押-最终领取
    const pawnBeginEndAPi = async () => {

        console.log(miningCampRightState.localSelected)
        let params = {
            id: miningCampRightState.localSelected.pawnDragon.id
        }
        API.miningCamp.pawnDragonEnd(params).then(async res => {
            if (res.code == 0) {
                // miningCampLeftState.confirmDetailsForm = res.data
                await getStakingEndContractHandle(res.data)

            } else {
                loadingHandle(false)
                return $message({
                    type: 'warning',
                    message: res.msg,
                    customClass: 'zZindex',
                })
            }
        })
    }


    // 合约相关
    const getStakingEndContractHandle = async (data) => {
        let tokenIds = [BigNumber.from(data.toString())]
        let params = {
            tokenIds: tokenIds,
        }
        /*  Todo */
        const contract = getDragonStakingContract()
        console.log('contract', contract)
        console.log('params', params)
        try {
            let contractBuyRes = await contract.unStake(params.tokenIds)
            if (contractBuyRes && contractBuyRes.hash) {
                let params = {
                    id: miningCampRightState.localSelected.pawnDragon.id,
                    transNo: contractBuyRes.hash,
                }
                pawnBeginEndAPiCallBack(params, contractBuyRes)
            }
        } catch (error) {
            loadingHandle(false)
            pawnBeginEndAPiRefuse(miningCampRightState.localSelected.pawnDragon.id)
            console.log('error', error)
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

    const pawnBeginEndAPiRefuse = (data) => {
        let params = {
            id: data,
        }
        API.miningCamp.pawnDragonEndRefuse(params).then(res => {
            if (res.code == 0) {
                loadingHandle(false)
            } else {
                loadingHandle(false)
            }
        })
    }




    const pawnBeginEndAPiCallBack = async (data, contract) => {
        let params = {
            id: data.id,
            transHash: data.transNo,
        }
        API.miningCamp.pawnDragonEndCallBack(params).then(res => {
            if (res.code == 0) {
                contractRespEndBuy(contract)
            } else {
                loadingHandle(false)
                return $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })
            }
        })
    }


    const contractRespEndBuy = async (contract) => {

        try {
            loadingHandle(true, 'wait result...')
            let receipt = await contract.wait()
            miningCampRightState.earnedDetailShow = false
            $message({
                type: 'success',
                message: 'claim success',
                customClass: 'zZindex',
            })
            loadingHandle(false)
            context.emit('initMiningCamp')

        } catch (error) {
            loadingHandle(false)
            return $message({
                type: 'warning',
                message: 'fail',
                customClass: 'zZindex',
            })
        }

    }


    // 质押-取消
    const pawnBeginCancelAPi = async () => {

        console.log(miningCampRightState.localSelected)
        let params = {
            id: miningCampRightState.localSelected.pawnDragon.id
        }
        API.miningCamp.pawnDragonCancel(params).then(async res => {
            if (res.code == 0) {
                // miningCampLeftState.confirmDetailsForm = res.data
                await getStakingCancelContractHandle(res.data)

            } else {
                loadingHandle(false)
                return $message({
                    type: 'warning',
                    message: res.msg,
                    customClass: 'zZindex',
                })
            }
        })
    }


    // 合约相关
    const getStakingCancelContractHandle = async (data) => {
        let tokenIds = [BigNumber.from(data.toString())]
        let params = {
            tokenIds: tokenIds,
        }
        /*  Todo */
        const contract = getDragonStakingContract()
        console.log('contract', contract)
        console.log('params', params)
        try {
            let contractBuyRes = await contract.unStake(params.tokenIds)
            if (contractBuyRes && contractBuyRes.hash) {
                let params = {
                    id: miningCampRightState.localSelected.pawnDragon.id,
                    transNo: contractBuyRes.hash,
                }
                pawnBeginCancelAPiCallBack(params, contractBuyRes)
            }
        } catch (error) {
            loadingHandle(false)
            // pawnBeginAPiCancel(data)
            console.log('error', error)
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




    const pawnBeginCancelAPiCallBack = async (data, contract) => {
        let params = {
            id: data.id,
            transHash: data.transNo,
        }
        API.miningCamp.pawnDragonCancelCallBack(params).then(res => {
            if (res.code == 0) {
                contractRespCancelBuy(contract)
            } else {
                loadingHandle(false)
                return $message({
                    type: 'warning',
                    message: t(`message['${res.i18n}']`),
                    customClass: 'zZindex',
                })
            }
        })
    }


    const contractRespCancelBuy = async (contract) => {

        try {
            loadingHandle(true, 'wait result...')
            let receipt = await contract.wait()
            miningCampRightState.cancelEarnShow = false
            $message({
                type: 'success',
                message: 'cancel success',
                customClass: 'zZindex',
            })
            loadingHandle(false)
            context.emit('initMiningCamp')

        } catch (error) {
            loadingHandle(false)
            return $message({
                type: 'warning',
                message: 'fail',
                customClass: 'zZindex',
            })
        }

    }

    return {
        miningCampRightState,
        rightInit,
        claim,
        stakeAgain,
        claimNow,
        cancelClaim,
        rewards,
        cancelStaking,
        rewardPartEarn,
        cancelPartEarn,
        sureCancelEarn,
        backToList,
        leftPage,
        rightPage,
        search,
    }
}