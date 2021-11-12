import { setStorage, setToken, getCookie, getSession } from "@/utils/auth.js";
const state = {
    isLinkMetaMask:null, // 钱包连接标识
}

const mutations = {
    // 设置-钱包连接标识
    SET_ISLINKMETAMASK:(state,data) => {
        // state.isLinkMetaMask = getSession('address')
        state.isLinkMetaMask = JSON.parse(getSession('activityAddress')) 
    },
}

const actions = {}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}