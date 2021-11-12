/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, ref, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getStorage, setCookie, setSession, getSession } from "@/utils/auth.js";
import { initWallet, myWallet, transferAccounts, getContract,getMarketContract, getBalanceHandle } from "@/utils/metaMask/ethers.js";
import { ethers, BigNumber } from "ethers";
import { useI18n } from "vue-i18n"; //要在js中使用国际化
import dragonLocalTypeList from "../../myMainland/use/dragonLocalTypeList";
import { path } from "animejs";
import Confetti from "@/assets/lottie/dragonEgg-claim/DragonEgg.json";
import html2canvas from "html2canvas";
import { useStore } from "vuex";
import { Decimal } from 'decimal.js'
import pageHandle from '@/components/page/use/index.js'


const eggToDragon = ref(null);

// 初始化数据
const marketPlaceState = reactive({
  dragonLocalTypeList:dragonLocalTypeList,
    dragonList: [],
      selectListShow1: false,
      selectItem1: {},
      selectList1: [
        { id: 1, name: "All" },
        { id: 2, name: "For sale" },
        { id: 3, name: "NOt For sale" },
      ],
      selectList2: [
        { id: 1, name: "Lowest Price" },
        { id: 2, name: "Highest Price" },
        { id: 3, name: "Latest" },
      ],
      pageInfo:{
        pageSize: 24,
        currentPage: 1,
        total: 0,
        totalPages: 0,
      },
});





export default function markrtPlaceHandle() {

    const router = useRouter()
    const route = useRoute()
    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const store = useStore()
    const $message = inject("$message");
    const { t } = useI18n();
    const { initPage } = pageHandle()

    const init = ()=> {
        getMarketList()
    }
    const getMarketList = ()=> {
        let params = {
            limit: marketPlaceState.pageInfo.pageSize,
            page: marketPlaceState.pageInfo.currentPage,
        }
        API.marketPlace.marketPlaceList(params).then(res=> {
            if(res.code == 0) {
                marketPlaceState.dragonList = res.data.list
                marketPlaceState.pageInfo = res.data.pageInfo
                initPage(res.data.pageInfo)
            } else {
                $message.warning(t(`message['${res.i18n}']`));
            }
        })
    }

    



    const handleSelect = () => {
        marketPlaceState.selectListShow1 = true;
      };
      const handleSelectLeave = () => {
        marketPlaceState.selectListShow1 = false;
      };
      const selectItem = (item) => {
        marketPlaceState.selectItem1 = item;
      };


      const leftPage = () => {
        if (marketPlaceState.pageInfo.currentPage <= 1) {
            return
        }
        marketPlaceState.pageInfo.currentPage--
        getMarketList()
    }

    const rightPage = () => {
        if (marketPlaceState.pageInfo.currentPage >= marketPlaceState.pageInfo.totalPages) {
            return
        }
        marketPlaceState.pageInfo.currentPage++
        getMarketList()
    }

    const search = (data) => {
      marketPlaceState.pageInfo.currentPage = Number(data)
      getMarketList()
    }

    const goDetail = (item)=> {
      console.log('item', item);
      router.push({ path: `/marketPlace/detail/${item.id}` })
    }


    return {
        marketPlaceState,
        handleSelect,
        handleSelectLeave,
        selectItem,
        init,
        leftPage,
        rightPage,
        search,
        goDetail,
       
    }
}