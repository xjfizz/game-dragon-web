/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, ref, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getStorage, setCookie, setSession, getSession } from "@/utils/auth.js";
import { initWallet, myWallet, transferAccounts, getDragonStakingContract, getBalanceHandle } from "@/utils/metaMask/ethers.js";
import { ethers, BigNumber } from "ethers";

import { useI18n } from "vue-i18n"; //要在js中使用国际化

import { path } from "animejs";
import Confetti from "@/assets/lottie/dragonEgg-claim/DragonEgg.json";
import html2canvas from "html2canvas";
import { useStore } from "vuex";
import { Decimal } from 'decimal.js'
import common from "@/utils/common";
import pageHandle from '@/components/page/use/index.js'




// 初始化数据
const miningCampTopState = reactive({
    topData: {
        totalDragons:{
            key:'0x647261676f6e546f74616c',
            value:0
        },
        totalDmp:{
            key:'0x646d70546f74616c',
            value:0
        },
        totalUsers:{
            key:'0x6163636f756e74546f74616c',
            value:0
        },
    }
});





export default function miningCampTopHandle() {

    const router = useRouter()
    const route = useRoute()
    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const store = useStore()
    const $message = inject("$message");
    const { t } = useI18n();
    const { initPage } = pageHandle()


    const initTop = ()=> {
        getTopData()
    }

    const getTopData = async ()=> {
        let contract =  getDragonStakingContract()
        console.log('contract', contract)
        try {
           miningCampTopState.topData.totalDragons.value = await contract.stakeTotals(miningCampTopState.topData.totalDragons.key)
           let totalDmp = await contract.stakeTotals(miningCampTopState.topData.totalDmp.key)
           miningCampTopState.topData.totalUsers.value = await contract.stakeTotals(miningCampTopState.topData.totalUsers.key)

           miningCampTopState.topData.totalDragons.value =  miningCampTopState.topData.totalDragons.value.toString()
           miningCampTopState.topData.totalDmp.value =  common.formatValue4(ethers.utils.formatEther(totalDmp))  // String(ethers.utils.formatEther(totalDmp)).replace(/^(.*\..{4}).*$/, "$1")
           miningCampTopState.topData.totalUsers.value =  miningCampTopState.topData.totalUsers.value.toString()
           console.log(' miningCampTopState.topData',  miningCampTopState.topData)
        } catch (error) {
            
        }
    }


    return {
        miningCampTopState,
        initTop,
    }
}