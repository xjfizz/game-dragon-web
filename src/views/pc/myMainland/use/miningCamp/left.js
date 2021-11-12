/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, ref, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getStorage, setCookie, setSession, getSession } from "@/utils/auth.js";
import { initWallet, myWallet, transferAccounts, getDragonStakingContract, getBalanceHandle, setApprovalForAll, isApprovedForAll, startApprovalForAll } from "@/utils/metaMask/ethers.js";

import { ethers, BigNumber } from "ethers";
import DragonStaking from '@/utils/metaMask/dragonJson/DragonStaking.json' // 质押
import { useI18n } from "vue-i18n"; //要在js中使用国际化

import { path } from "animejs";
import Confetti from "@/assets/lottie/dragonEgg-claim/DragonEgg.json";
import html2canvas from "html2canvas";
import { useStore } from "vuex";
import { Decimal } from 'decimal.js'
import common from "@/utils/common";
import pageHandle from '@/components/page/use/index.js'
// import { rightInit } from "./right.js";
// import miningCampRightHandle from "./right";
// import miningCampTopHandle from "./top";
import miningCampTopHandle from "./top";




// 初始化数据
const miningCampLeftState = reactive({
    loadingForm: {
        loadingShowText: 'Loading...',
        loadingShow: false,
    },
    selectDragonShow: false,
    confirmDetailsShow: false,
    miningWaitCampList: [],
    miningWaitCampListSelected: [],
    loading: false,
    dragonEggListPageInfo: {
        pageSize: 4,
        currentPage: 1,
        total: 0,
        totalPages: 0,

    },
    selectListShow1: false,
    selectItem1: {},
    selectList1: [
        { id: 1, name: "3h", value: 3 },
        { id: 2, name: "6h", value: 6 },
        { id: 3, name: "9h", value: 9 },
        { id: 4, name: "12h", value: 12 },
        { id: 5, name: "15h", value: 15 },
        { id: 6, name: "18h", value: 18 },
        { id: 7, name: "21h", value: 21 },
        { id: 8, name: "24h", value: 24 },
    ],
    selectItem: null,
    powerRecoverShow: false,
    staminaForm: {}, // m stamina
    myPledge: {},
    confirmDetailsForm: {}, // 质押预期数据
    serverceTime: null,
    isCheckAuthorization: false,// 是否授权

});







export default function miningCampLeftHandle(context) {

    // const router = useRouter()
    // const route = useRoute()
    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const store = useStore()
    const $message = inject("$message");
    const { t } = useI18n();
    // const { rightInit } = miningCampRightHandle()
    // const { initTop } = miningCampTopHandle()
    const { initPage } = pageHandle()

    onBeforeUnmount(() => {
        // miningCampRightState.miningCampList = []
        if (miningCampLeftState.staminaForm.timeList && miningCampLeftState.staminaForm.timeList.length > 0) {
            miningCampLeftState.staminaForm.timeList.map(item => {
                if (item.countDownFn) {
                    clearInterval(item.countDownFn)
                }

            })
        }
    })
    const init = (item) => {
        // initData()
        getList(item)
        getMyPower()
    }

    const initLeftData = () => {
        initData()
        getMyPledge()
    }
    const initData = () => {
        miningCampLeftState.miningWaitCampList = []
        miningCampLeftState.miningWaitCampListSelected = []
        miningCampLeftState.selectDragonShow = false
        miningCampLeftState.confirmDetailsShow = false
        miningCampLeftState.dragonEggListPageInfo = {
            pageSize: 4,
            currentPage: 1,
            total: 0,
            totalPages: 0,

        }
    }
    const checkAuthorization = async () => {
        let address = await initWallet()
        let params = {
            address: address,
            contractAddress: process.env.NODE_ENV === 'production' ? DragonStaking.address_prod : DragonStaking.address,
            bool: 1,
        }
        miningCampLeftState.isCheckAuthorization = await isApprovedForAll(params)
        console.log('miningCampLeftState.isCheckAuthorization', miningCampLeftState.isCheckAuthorization)
    }
    const startAuthorization = async () => {
        loadingHandle(true, 'Approving')
        await setAuthorization()
    }
    const setAuthorization = async () => {
        let address = await initWallet()
        let params = {
            address: address,
            contractAddress: process.env.NODE_ENV === 'production' ? DragonStaking.address_prod : DragonStaking.address,
            bool: 1,
        }
        let res = await startApprovalForAll(params)
        if (res) {
            loadingHandle(false)
            miningCampLeftState.isCheckAuthorization = res
            // pawnBeginAPi()
        } else {
            loadingHandle(false)
        }
    }

    // 初始化质押详情
    const confirmDetailsInit = (item) => {
        let pawnDtoList = miningCampLeftState.miningWaitCampListSelected.map(res => {
            return { no: res.no }
        })
        let params = {
            pawnDtoList: pawnDtoList,
            pawnTime: item ? item.value : miningCampLeftState.selectList1[0].value,
        }
        API.miningCamp.getPawnExpectData(params).then(res => {
            if (res.code == 0) {
                miningCampLeftState.confirmDetailsForm = res.data
                miningCampLeftState.selectItem = params.pawnTime
            } else {
                return $message({
                    type: 'warning',
                    message: res.msg,
                    customClass: 'zZindex',
                })
            }
        })
    }
    const startSelectDragon = () => {
        stakeDragons()
    }
    const stakeDragons = (item) => {
        console.log('stakeDragons')
        miningCampLeftState.selectDragonShow = true
        init(item)
    }

    const getMyPower = () => {
        console.log(JSON.parse(getSession('user')))
        let params = {
            id: JSON.parse(getSession('user')).uid
        }
        API.miningCamp.getUserPower(params).then(async res => {
            if (res.code == 0) {
                miningCampLeftState.staminaForm = res.data
                miningCampLeftState.staminaForm.timeList = [{ endTime: miningCampLeftState.staminaForm.maxTime }, { endTime: miningCampLeftState.staminaForm.userPower.nextAddPowerTime }]
                miningCampLeftState.serverceTime = await getNowTime()
                if (miningCampLeftState.staminaForm.timeList[0].endTime <= miningCampLeftState.serverceTime) {
                    miningCampLeftState.staminaForm.timeList[0].countDownTime = '00:00:00'
                    miningCampLeftState.staminaForm.timeList[1].countDownTime = '00:00:00'
                    return
                }
                for (let i in miningCampLeftState.staminaForm.timeList) {
                    miningCampLeftState.staminaForm.timeList[i].countDownTime = '00:00:00' //['00', '00', '00', '00']
                    countDown(i)
                }
            } else {
                return $message({
                    type: 'warning',
                    message: res.msg,
                    customClass: 'zZindex',
                })
            }
        })
    }

    const getMyPledge = () => {
        let params = {
            // id:JSON.parse(getSession('user')).uid
        }
        API.miningCamp.getMyStaked(params).then(async res => {
            if (res.code == 0) {
                miningCampLeftState.myPledge = res.data

            } else {
                return $message({
                    type: 'warning',
                    message: res.msg,
                    customClass: 'zZindex',
                })
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
            miningCampLeftState.staminaForm.timeList.map(item => {
                if (item.countDownFn) {
                    clearInterval(item.countDownFn)
                    resolve(true)
                }
            })
        })
    }

    const countDown = async (i) => {
        let item = miningCampLeftState.staminaForm.timeList[i]
        let startTime = miningCampLeftState.serverceTime;//当前时间
        let end = new Date(item.endTime); //结束时间
        let result = parseInt((end - startTime) / 1000); //计算出豪秒
        miningCampLeftState.staminaForm.timeList[i].countDownFn = setInterval(async () => {
            console.log('result', result)
            result -= 1
            if (result <= 0) {
                // clearInterval(miningCampLeftState.staminaForm.timeList[i].countDownFn)
                await clearTime()
                getMyPower()
            }

            item.countDownTime = countDownFun(result);

            console.log(' item.countDownTime', item.countDownTime)
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
            return '00:00:00'
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

    const getList = (item) => {
        let params = {
            id: item && item.pawnDragon ? item.pawnDragon.id : '',
            limit: miningCampLeftState.dragonEggListPageInfo.pageSize,
            page: miningCampLeftState.dragonEggListPageInfo.currentPage,
        }
        API.miningCamp.miningWaitCampList(params).then(res => {
            if (res.code == 0) {
                miningCampLeftState.miningWaitCampList = res.data.list
                miningCampLeftState.miningWaitCampList.map(item => {
                    miningCampLeftState.miningWaitCampListSelected.map(item2 => {
                        if (item.id == item2.id) {
                            item.isSelected = true
                        }
                    })
                })
                miningCampLeftState.dragonEggListPageInfo = res.data.pageInfo
                initPage(res.data.pageInfo)
                console.log(' miningCampLeftState.miningWaitCampList', miningCampLeftState.miningWaitCampList)
            }
        })
    }

    const selectDradon = (item, status) => {
        console.log('selectDradon', item)
        if (status == 1) { // add
            miningCampLeftState.miningWaitCampListSelected.push(item)
            item.isSelected = true
        } else { // remove
            item.isSelected = false
            miningCampLeftState.miningWaitCampListSelected = miningCampLeftState.miningWaitCampListSelected.filter(res => {
                return res.id != item.id
            })
        }
        console.log('miningCampLeftState.miningWaitCampListSelected', miningCampLeftState.miningWaitCampListSelected)

    }

    const closeSelectBox = () => {
        miningCampLeftState.selectDragonShow = false
        initData()
    }

    const continueSelect = () => {
        // miningCampLeftState.selectDragonShow = false
        miningCampLeftState.confirmDetailsShow = true
    }


    const leftPage = () => {
        if (miningCampLeftState.dragonEggListPageInfo.currentPage <= 1) {
            return
        }
        miningCampLeftState.dragonEggListPageInfo.currentPage--
        getList()
    }

    const rightPage = () => {
        if (miningCampLeftState.dragonEggListPageInfo.currentPage >= miningCampLeftState.dragonEggListPageInfo.totalPages) {
            return
        }
        miningCampLeftState.dragonEggListPageInfo.currentPage++
        getList()
    }

    const search = (data) => {
        miningCampLeftState.dragonEggListPageInfo.currentPage = Number(data)
        getList()
    }

    const selectTime = (item) => {
        console.log('selectTime', item, miningCampLeftState.selectItem1)
        // miningCampLeftState.selectListShow1 = false
        confirmDetailsInit(item)
    }

    const confirmDetail = () => {
        // miningCampLeftState.confirmDetailsShow = false
        loadingHandle(true, 'Authorisation for testing in progress...')
        isApprove()
    }

    const isApprove = async () => {
        let address = await initWallet()

        let params = {
            address: address,
            contractAddress: process.env.NODE_ENV === 'production' ? DragonStaking.address_prod : DragonStaking.address,
            bool: 1,
        }
        let res = await setApprovalForAll(params)
        console.log('setApprovalForAll', res)
        if (res) {
            loadingHandle(true, 'Confirmation of pledge in progress...')
            pawnBeginAPi()
        } else {
            loadingHandle(false)
        }

    }
    const pawnBeginAPi = async () => {

        let pawnDtoList = miningCampLeftState.miningWaitCampListSelected.map(res => {
            return { no: res.no }
        })
        let params = {
            pawnDtoList: pawnDtoList,
            pawnTime: miningCampLeftState.selectItem,
        }
        API.miningCamp.pawnBegin(params).then(async res => {
            if (res.code == 0) {
                // miningCampLeftState.confirmDetailsForm = res.data
                await getStakingContractHandle(res.data)

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
    const getStakingContractHandle = async (data) => {
        let tokenIds = data.nos.map(item => {
            return BigNumber.from(item.toString())
        })
        let hashRates = data.powers.map(item => {
            return BigNumber.from(item.toString())
        })

        let params = {
            tokenIds: tokenIds,
            hashRates: hashRates,
            powers: BigNumber.from(data.totalBodyPower.toString()),
            timestamp: data.timestamp,
            sign: data.sign,
        }
        /*  Todo */
        const contract = getDragonStakingContract()
        console.log('contract', contract)
        console.log('params', params)
        try {
            let contractBuyRes = await contract.stake(params.tokenIds, params.hashRates, params.powers, params.timestamp, params.sign)
            if (contractBuyRes && contractBuyRes.hash) {
                let params = {
                    batchNumber: data.batchNumber,
                    transNo: contractBuyRes.hash,
                }
                pawnBeginAPiCallBack(params, contractBuyRes)
            }
        } catch (error) {
            loadingHandle(false)
            pawnBeginAPiCancel(data)
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

    const pawnBeginAPiCancel = (data) => {
        let params = {
            batchNumber: data.batchNumber,
        }
        API.miningCamp.pawnBeginRefuse(params).then(res => {
            if (res.code == 0) {
                loadingHandle(false)
            } else {
                loadingHandle(false)
            }
        })
    }


    const pawnBeginAPiCallBack = async (data, contract) => {
        let params = {
            batchNumber: data.batchNumber,
            transNo: data.transNo,
        }
        API.miningCamp.pawnDragonCallBack(params).then(res => {
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
        console.log('contractRespBuy', contract)
        try {
            loadingHandle(true, 'wait result...')
            let receipt = await contract.wait()
            $message({
                type: 'success',
                message: 'stake success',
                customClass: 'zZindex',
            })
            loadingHandle(false)
            context.emit('initMiningCamp')
            // initData()
            // initLeftData()
            // rightInit()
            // initTop()

        } catch (error) {
            console.log('error', error)
            loadingHandle(false)
            return $message({
                type: 'warning',
                message: 'fail',
                customClass: 'zZindex',
            })
        }

    }


    const testWait = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 2000)
        })
    }
    const test = async () => {
        miningCampLeftState.selectDragonShow = false
        try {
            loadingHandle(true, 'wait result...')
            let receipt = await testWait()
            $message({
                type: 'success',
                message: 'stake success',
                customClass: 'zZindex',
            })
            console.log('context', context)
            loadingHandle(false)
            context.emit('initMiningCamp')
        } catch (error) {
            console.log('error', error)
            loadingHandle(false)
            return $message({
                type: 'warning',
                message: 'fail',
                customClass: 'zZindex',
            })
        }
    }



    const cancelDetail = () => {
        miningCampLeftState.confirmDetailsShow = false
    }

    const mouseleavePower = () => {
        miningCampLeftState.powerRecoverShow = false
    }

    const mouseenterPower = () => {
        miningCampLeftState.powerRecoverShow = true
    }

    const loadingHandle = (flag, text) => {
        if (miningCampLeftState.loadingForm.loadingShow) {
            miningCampLeftState.loadingForm.loadingShow = false
            miningCampLeftState.selectLocalDragon = null
        }
        nextTick(() => {
            miningCampLeftState.loadingForm.loadingShow = flag ? flag : false
            miningCampLeftState.loadingForm.loadingShowText = text ? text : 'Loading...'
        })

    }



    return {
        miningCampLeftState,
        stakeDragons,
        startSelectDragon,
        init,
        selectDradon,
        closeSelectBox,
        continueSelect,
        leftPage,
        rightPage,
        search,
        selectTime,
        confirmDetail,
        cancelDetail,
        mouseleavePower,
        mouseenterPower,
        initLeftData,
        confirmDetailsInit,
        test,
        checkAuthorization,
        startAuthorization,
    }
}