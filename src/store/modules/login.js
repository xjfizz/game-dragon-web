import { setStorage, setToken, getCookie, getSession } from "@/utils/auth.js";
import router from '@/router'
import API from '@/api/index'
import { ElLoading, ElMessage } from 'element-plus';
import { useI18n } from "vue-i18n";

const state = {
    loginState: getSession('Token') ? true : false, // 登录标识
    userWalletAddress: getSession('address') ? getSession('address') : null, // 钱包地址
    userWalletBanlance: getSession('banlance') ? getSession('banlance') : null, // 钱包余额
    allowArea: null, // 是否允许访问
}

const mutations = {
    // 设置-钱包连接标识
    SET_LOGIN: (state, data) => {
        state.loginState = getSession('Token') ? true : false
        state.userWalletAddress = getSession('address') ? getSession('address') : null
        state.userWalletBanlance = getSession('banlance') ? getSession('banlance') : null
        if (!state.loginState) {
            return router.push({ path: '/login' })
        }
    },
    // 设置用户钱包信息
    SET_USER_WALLET: (state, data) => {
        state.userWalletAddress = getSession('address') ? getSession('address') : null
        state.userWalletBanlance = getSession('banlance') ? getSession('banlance') : null
        console.log('SET_USER_WALLET=============balanceFormat', state.userWalletBanlance)
    },
    // 账号绑定地址与当前链接地址是否一致
    SET_LINK_ADDRESS_SAME_BIND: (state, data) => {

    },

    SET_AlLOW_AREA: (state, data) => {
        state.allowArea = data
    }
}

const actions = {
    SET_LINK_ADDRESS_SAME_BIND({
        commit
    }, status) {
        console.log('status', status)
        return new Promise(async (resolve, reject) => {
            // commit('SET_LINK_ADDRESS_SAME_BIND', status)
            let res = await API.login.getUserBindWallet({})
            resolve(res.data == status ? true : false)
        })
    },
    SET_AlLOW_AREA({
        commit
    }, status) {
        return new Promise(async (resolve, reject) => {

            let res = await API.login.isAllowArea({})
            let status = res.code == 0 ? 1 : 2 // 1:true 2:false
            commit('SET_AlLOW_AREA', status)
            resolve(status)
            // resolve(res.code == 3 ? true : false)
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}