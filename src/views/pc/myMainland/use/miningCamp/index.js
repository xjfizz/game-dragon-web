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
import miningCampRightHandle from "./right";
import miningCampTopHandle from "./top";
import miningCampLeftHandle from "./left";



// 初始化数据
const miningCampIndexState = reactive({

});





export default function miningCampIndexHandle() {

    const router = useRouter()
    const route = useRoute()
    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const store = useStore()
    const $message = inject("$message");
    const { t } = useI18n();
    const { initPage } = pageHandle()

    const { rightInit } = miningCampRightHandle()
    const { initLeftData } = miningCampLeftHandle()
    const { initTop } = miningCampTopHandle()

    const initMiningCamp = ()=> {
        rightInit()
        initLeftData()
        initTop()
    }


    return {
        miningCampIndexState,
        initMiningCamp,
    }
}