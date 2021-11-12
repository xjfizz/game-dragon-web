/* 龙部分逻辑处理 */

// 导入配置功能
import { setInterval } from "core-js";
import { reactive, onMounted, toRefs, onBeforeUnmount, inject, ref } from "vue";
import { useRouter } from "vue-router";
import { setSession, getSession, getStorage, getToken } from "@/utils/auth.js";







// 初始化数据
const pageState = reactive({
    pageInfo: {
        limit: 24,
        currentPage: 1,
        total: 0,
        totalPages: 0,
    },
});





export default function pageHandle(context) {
    const API = inject("API");
    const Moment = inject("$Moment");



    const router = useRouter()

    const initPage = (data) => {
        console.log('page--data', data)
        pageState.pageInfo.limit = data.pageSize
        pageState.pageInfo.currentPage = data.currentPage
        pageState.pageInfo.total = data.total
        pageState.pageInfo.totalPages = data.totalPages
    }
    const leftPage = () => {
        console.log('rightPage')
        if (pageState.pageInfo.currentPage <= 0) {
            pageState.pageInfo.currentPage = 1
        } else if (pageState.pageInfo.currentPage >= pageState.pageInfo.totalPages) {
            pageState.pageInfo.currentPage = pageState.pageInfo.totalPages
        }
        context.emit("leftPage");
    }
    const rightPage = () => {
        console.log('rightPage')
        if (pageState.pageInfo.currentPage <= 0) {
            pageState.pageInfo.currentPage = 1

        } else if (pageState.pageInfo.currentPage >= pageState.pageInfo.totalPages) {
            pageState.pageInfo.currentPage = pageState.pageInfo.totalPages
        }
        context.emit("rightPage");
    }
    const search = () => {
        if (pageState.pageInfo.currentPage <= 0) {
            pageState.pageInfo.currentPage = 1
        } else if (pageState.pageInfo.currentPage >= pageState.pageInfo.totalPages) {
            pageState.pageInfo.currentPage = pageState.pageInfo.totalPages
        }
        context.emit("search", pageState.pageInfo.currentPage);
    }



    return {
        pageState,
        initPage,
        leftPage,
        rightPage,
        search,

    }
}