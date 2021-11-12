/* 龙部分逻辑处理 */

// 导入配置功能

import { reactive, onMounted, toRefs, onBeforeUnmount, inject, getCurrentInstance, toRaw, computed, watch } from "vue";
import { useStore } from 'vuex'
import { useRouter, useRoute } from "vue-router";
import { getSession, setSession, getToken, setCookie } from "@/utils/auth.js";
import { initWallet, getSiner } from "@/utils/metaMask/ethers.js";
import clip from "@/utils/clipboard";






// 初始化数据
const activityStartState = reactive({
    invitUserRankList: [],// 邀请排行榜用户列表
    invitEggBuyRankList: [],// 邀请人邀请链接龙蛋购买排行榜
    page: {
        pageSize: 8,
        currentPage: 1,
        total: 0,
        pageBtns: 0,
        pageBtnsWrap: 1,
    },
    isLinkWallet: true,
    wallet: {
        address: ''
    },
    invitLink: '', // 邀请链接
    recommendId: '', // 邀请人ID
    recommendNumber: 0,
});





export default function activityStartHandle() {

    const router = useRouter()
    const route = useRoute()

    const { ctx } = getCurrentInstance()
    const API = inject("API");
    const $message = inject("$message");
    const store = useStore();
    console.log('store', store)
    let isLinkMetaMask = computed(() => store.state.metaMask.isLinkMetaMask); // 钱包连接标识
    watch(isLinkMetaMask, (newValue, oldValue) => {
        activityStartState.wallet.address = newValue
    })


    const initPage = () => {
        activityStartState.invitUserRankList = [],// 邀请排行榜用户列表
            activityStartState.invitEggBuyRankList = [],// 邀请人邀请链接龙蛋购买排行榜
            activityStartState.page = {
                pageSize: 8,
                currentPage: 1,
                total: 0,
                pageBtns: 0,
                pageBtnsWrap: 1,
            }
    }
    const getPage = (item) => {
        console.log('item', item)
        activityStartState.invitUserRankList = []
        activityStartState.page.currentPage = item
        getinvitUserRankList()
    }

    const nextPage = (item) => {
        console.log('item', item)

        if (activityStartState.page.total <= 40) {
            return
        }
        if (item == -1) {
            if (activityStartState.page.pageBtnsWrap <= 1) {
                return
            }
            activityStartState.page.pageBtnsWrap += item
        } else {
            if (activityStartState.page.pageBtnsWrap >= 3) {
                return
            }
            activityStartState.page.pageBtnsWrap += item
        }
        getPage(1 + (activityStartState.page.pageBtnsWrap - 1) * 5)


    }

    const setRecommendId = (id) => {
        setCookie('recommendId', id)
    }

    const getMyRecommend = () => {
        let params = {}
        API.activity.getMyRecommend(params).then(res => {
            if (res.code == 0) {
                activityStartState.recommendNumber = res.data.cnt
            }
        })
    }

    const getRouteParams = () => {
        if (route.query.recommendId) {
            setRecommendId(route.query.recommendId)
        }
    }

    const init = () => {
        getRouteParams()
    }

    const initActivity = () => {
        if (!getToken()) {
            return router.push({ path: "/login" });
        }

        getinvitUserRankList()
        getinvitEggBuyRankList()
    }

    // 获取邀请人链接被注册排行榜
    const getinvitUserRankList = () => {
        // if(!getToken()) {
        //     return router.push({ path: "/login" });
        //   }
        let params = {
            pageSize: activityStartState.page.pageSize,
            currentPage: activityStartState.page.currentPage,

        }
        API.activity.invitUserRankList(params).then(res => {
            console.log('getinvitUserRankList', res)
            if (res.code == 0) {
                activityStartState.invitUserRankList = res.data.list
                activityStartState.page.pageSize = res.data.pageInfo.pageSize
                activityStartState.page.pageSize = res.data.pageInfo.pageSize
                activityStartState.page.total = res.data.pageInfo.total
                activityStartState.page.pageBtns = Math.ceil((activityStartState.page.total / activityStartState.page.pageSize))
                console.log('activityStartState', activityStartState)
            } else {
                $message({
                    type: 'warning',
                    message: res.msg
                })
            }
        })
    }

    // 获取邀请人链接被购买龙蛋排行榜
    const getinvitEggBuyRankList = () => {
        if (!getToken()) {
            return router.push({ path: "/login" });
        }
        let params = {
            id: getSession('user').uid,
        }
        API.activity.invitEggbuyRankList(params).then(res => {
            if (res.code == 0) {
                activityStartState.invitEggBuyRankList = res.data
            } else {
                $message({
                    type: 'warning',
                    message: res.msg
                })
            }
        })
    }

    const linkWallet = async (state) => {
        if (!getToken()) {
            return router.push({ path: "/login" });
        }

        // let res = await initWallet()
        let res = await getActivityDetail()
        activityStartState.wallet.address = res
        activityStartState.isLinkWallet = !activityStartState.isLinkWallet;
        if (state && state == 1) {
            if (!res) {
                return router.push({ path: "/activityReceiveMesage" });
            }
        }
        getInvitLink()
        getMyRecommend()
    };

    const getActivityDetail = () => {
        return new Promise((resolve, reject) => {
            let params = {}
            API.activity.activityMessageDetail(params).then((res) => {
                if (res.code == 0) {
                    if (res.data) {
                        // activityReceiveState.form.bscAddress = res.data.walletAddress
                        setSession('activityAddress', res.data.walletAddress)
                        resolve(res.data.walletAddress)
                    } else {
                        resolve(null)
                    }

                }
            });
        })

    }
    const getInvitLink = () => {
        let params = {}
        API.activity.getRecommendUrl(params).then(res => {
            if (res.code == 0) {
                activityStartState.invitLink = res.data
                store.commit('metaMask/SET_ISLINKMETAMASK',)
            }
        })
    }

    const copyLink = (url, event) => {
        console.log('===========', url)
        clip(url, event);
    }
    const goSubmit = () => {
        console.log('====')
        router.push({ path: "/activityReceiveMesage" });
    }



    return {
        activityStartState,
        isLinkMetaMask,
        getinvitUserRankList,
        getinvitEggBuyRankList,
        linkWallet,
        getInvitLink,
        copyLink,
        initActivity,
        init,
        getPage,
        nextPage,
        initPage,
        getMyRecommend,
        goSubmit
    }
}