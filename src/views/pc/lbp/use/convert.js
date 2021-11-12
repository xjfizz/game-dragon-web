/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, ref, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getStorage, setCookie, setSession, getSession } from "@/utils/auth.js";
import { initWallet, myWallet, transferAccounts, getContract, getSendDragonContract, getExchangeContract, getBalanceHandle } from "@/utils/metaMask/ethers.js";
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
const convertState = reactive({
    convertStateForm: {
        dms: {
            inputValue: '',
            balance: 1000,
        },
        usdt: {
            inputValue: '',
            balance: 200,
        }
    },
    list: [
        { id: 1, value: '0.05%', text: '0.05%' },
        { id: 2, value: '0.1%', text: '0.1%' },
        { id: 3, value: '0.3%', text: '0.3%' },

    ],
    loacalGetItem: 2,// 1dmp,2usdt
    definePrice: { id: 4, value: '0.01', text: '0.01' },
    localSelectedPrice: {
        id: 1, value: '0.05%', text: '0.05%'
    },

});





export default function convertStateHandle() {

    const router = useRouter()
    const route = useRoute()
    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const store = useStore()
    const $message = inject("$message");
    const { t } = useI18n();
    const { initPage } = pageHandle()


    const init = () => {
        convertState.localSelectedPrice = convertState.list[0]
    }

    const swapItem = () => {
        // TODO
        convertState.loacalGetItem = convertState.loacalGetItem == 2 ? 1 : 2

    }

    const selectPrice = (item) => {
        console.log('selectPrice', item)
        convertState.localSelectedPrice = item
    }

    const confirm = () => {
        console.log('confirm', confirm)
    }

    const blurDefineIput = () => {
        console.log('blurDefineIput')
        convertState.definePrice.value = ismoney(convertState.definePrice.value)
        convertState.localSelectedPrice = JSON.parse(JSON.stringify(convertState.definePrice)) 
        convertState.localSelectedPrice.value = convertState.definePrice.value/100
    }

    const ismoney = (money) => {
        // var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
        if (money > 0 ) {
            return money;
        } else {
            return '0.01';
        };
    }

    const convert = ()=> {
        console.log('convert', convertState.localSelectedPrice)
    }

    const blurDefineEnter = (e)=> {
        console.log('blurDefineEnter', e)
        e.target.blur()
    }

    return {
        convertState,
        swapItem,
        selectPrice,
        confirm,
        init,
        blurDefineIput,
        convert,
        blurDefineEnter,
    }
}