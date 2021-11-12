import { request } from '@/utils/axios'


// 查询用户列表
let login = {
    // 获取用户详情
    login: (data) => {
        return request({
            url: '/passport/login',
            method: 'post',
            data,
            noToken: true,
        })
    },

    // 获取登录字符串
    loginNonce: (data) => {
        return request({
            url: '/passport/nonce',
            method: 'post',
            data,
            noToken: true,
        })
    },

    // 签名登录
    loginSign: (data) => {
        return request({
            url: '/passport/metamask/login',
            method: 'post',
            data,
            noToken: true,
        })
    },

    // 邮箱登录
    loginByEmail: (data) => {
        return request({
            url: '/passport/loginEmail',
            method: 'post',
            data,
            noToken: true,
        })
    },

    // 邮箱注册
    registerByEmail: (data) => {
        return request({
            url: '/passport/register',
            method: 'post',
            data,
            noToken: true,
        })
    },

    // 邮箱验证
    validByEmail: (data) => {
        return request({
            url: '/passport/validEmail',
            method: 'get',
            params: data,
            noToken: true,
        })
    },

    // 绑定邮箱
    bindEmail: (data) => {
        return request({
            url: '/auth/email/bind',
            method: 'post',
            data,
        })
    },

    // 绑定metaMask
    bindMetaMask: (data) => {
        return request({
            url: '/auth/metamask/bind',
            method: 'post',
            data,
        })
    },

    // 获取二维码-登录
    loginByQrCode: (data) => {
        return request({
            url: '/auth/getQRCodeUrl',
            method: 'post',
            data,
        })
    },
    // 刷新Token-登录
    refreshToken: (data) => {
        return request({
            url: '/auth/refreshToken',
            method: 'post',
            data,
        })
    },

    // 获取二维码-登录
    validEmailCode: (data) => {
        return request({
            url: '/passport/validEmail',
            method: 'get',
            params: data,
            noToken: true,
        })
    },

    // 获取重置密码验证码-登录
    getFPCheckCode: (data) => {
        return request({
            url: '/passport/getFPCheckCode',
            method: 'post',
            data: data,
            noToken: true,
        })
    },


    // 邮箱重置密码-登录
    findPassword: (data) => {
        return request({
            url: '/passport/findPassword',
            method: 'post',
            data: data,
            noToken: true,
        })
    },

    // 获取用户登录绑定的钱包地址信息
    getUserBindWallet: (data) => {
        return request({
            url: '/auth/wallet/address',
            method: 'post',
            data: data,
            noLoading: true
        })
    },

    // 是否允许访问的地区
    isAllowArea: (data) => {
        return request({
            url: '/api/access',
            method: 'post',
            data: data,
            noLoading: true,
            noToken: true,
        })
        // return new Promise((resolve,reject)=> {
        //     resolve({code:3})
        // })
    },

    // 获取用户详情
    getUserDetail: (data) => {
        return request({
            url: '/auth/user/my',
            method: 'post',
            data: data,
            noLoading: true
        })
    },

    // 获取登录验证码
    getLoginImgCode: (data) => {
        return request({
            url: '/passport/emailCaptcha',
            method: 'post',
            data: data,
            noLoading: true,
            noToken: true,
            responseType:"arraybuffer"
        })
    },

}
export default login

