import { request } from '@/utils/axios'


// 我的背包
let dragonSignUp = {
    // 获取报名列表
    getDragonSignUpList: (data) => {
        return request({
            url: '/auth/market/Ido/page',
            method: 'post',
            data,
            noLoading: true
        })

    },

    // 提交报名
    dragonSignUpCreate: (data) => {
        return request({
            url: '/auth/market/Ido/create',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 报名详情
    dragonSignUpDetail: (data) => {
        return request({
            url: '/auth/market/Ido/detail',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 报名收款地址
    getIdoWalletAddress: (data) => {
        return request({
            url: '/auth/market/Ido/getIdoWalletAddress',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 报名-生成记录
    idoPay: (data) => {
        return request({
            url: '/auth/market/Ido/idoPay',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 报名-支付回调
    idoCallback: (data) => {
        return request({
            url: '/auth/market/Ido/idoCallback',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 获取-验证码
    getImgCode: (data) => {
        return request({
            url: '/auth/market/Ido/addressCaptcha',
            method: 'post',
            data,
            noLoading: true,
            responseType: "arraybuffer"
        })
    },

    // 获取-IDP 报名人数
    getIdoTotal: (data) => {
        return request({
            url: '/api/market/Ido/getIdoTotal',
            method: 'post',
            data,
            noToken: true,
            noLoading: true,
        })
    },

    // 获取-IDP 报名列表
    getIdoList: (data) => {
        return request({
            url: '/api/market/Ido/page',
            method: 'post',
            data,
            noToken: true,
            noLoading: true,
        })
    },





}
export default dragonSignUp

