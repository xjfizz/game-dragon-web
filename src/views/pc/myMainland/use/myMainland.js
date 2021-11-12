/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getStorage, setCookie, setSession } from "@/utils/auth.js";
import { initWallet, myWallet, transferAccounts, getContract } from "@/utils/metaMask/ethers.js";
import { ethers, BigNumber } from "ethers";
import { useI18n } from "vue-i18n"; //要在js中使用国际化





// 初始化数据
const myMainlandState = reactive({
    dragonList: [],
    leftItemList: [
        { id: 1, img: require('@/assets/imgs/myMainland/menu1.png'), title: 'My Dragon',path:'/myMainland/myDragon' },
        { id: 2, img: require('@/assets/imgs/myMainland/menu2.png'), title: 'Blind Box',path:'/myMainland/blindBox' },
        { id: 3, img: require('@/assets/imgs/myMainland/menu3.png'), title: 'Mining Camp',path:'/myMainland/miningCamp' },
    ],
    leftItemSelected:1,
    dragonEggListPageInfo: {
        limit: 10,
        page: 1,
        total: 0,
    }

});





export default function myMainland() {

    const router = useRouter()
    const route = useRoute()
    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const $message = inject("$message");
    const { t } = useI18n();

 

  

  

    const selectLeftItemMenu = (item)=> {
        // myMainlandState.leftItemSelected = item.id
        router.push({path:item.path})
    }



    return {
        myMainlandState,
        
        selectLeftItemMenu,


    }
}