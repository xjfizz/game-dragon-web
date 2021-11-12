import { request } from '@/utils/axios'


// 我的背包
let myMainland = {
    // 获取背包龙蛋列表
    myDragonEgg: (data) => {
        return request({
            // url: '/auth/game/hero/my',
            url: '/auth/game/hero/getMyHeroByPage',
            method: 'post',
            data,
            // noToken: true,

        })
    },
    // 龙蛋孵化
    dragonEggHatch: (data) => {
        return request({
            url: '/auth/market/order/hatch',
            method: 'post',
            data,
            // noToken: true,
            noLoading: true
        })
    },
    // 龙蛋孵化支付
    hatchPayment: (data) => {
        return request({
            url: '/auth/market/order/hatchPayment',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 龙详情
    dragonDetail: (data) => {
        return request({
            url: '/api/game/hero/detail',
            method: 'post',
            data,
        })
    },

    // 获取龙蛋信息
    getDragonEggDetailByHeroId: (data) => {
        return request({
            // url: '/api/game/hero/getHeroDetailByNoOrHeroId',
            url: '/api/game/hero/getHeroDetailByNo',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 根据龙蛋ID 查询 绑定的钱包地址
    GetWalletAddressByID: (data) => {
        return request({
            url: '/auth/game/hero/getHeroOwnerAddress',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 孵化上传图片
    hatchDragon: (formData, params) => {
        return request({
            url: '/auth/game/hero-extra/data',
            method: 'post',
            data: formData,
            params: params,
            noLoading: true
        })
    },
    // 赠送龙蛋
    sendDragonEgg: (data) => {
        return request({
            url: '/auth/market/order/heroSend',
            method: 'post',
            data,
            noLoading: true
        })
    },
    // 赠送龙蛋-取消
    sendDragonEggCancel: (data) => {
        return request({
            url: '/auth/market/order/heroSendCancel',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 获取龙蛋信息
    sendDragonEggCallBack: (data) => {
        return request({
            url: '/auth/market/order/heroSendCallback',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 龙上架
    productUp: (data) => {
        return request({
            url: '/auth/market/product/productUp',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 龙下架
    productDown: (data) => {
        return request({
            url: '/auth/market/product/productDown',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 龙上架回调
    upProductCallback: (data) => {
        return request({
            url: '/auth/market/product/productCallback',
            method: 'post',
            data,
            noLoading: true
        })
    },

    // 兑换龙蛋预购
    presaleExchange: (data) => {
        return request({
            url: '/auth/market/presale/exchange',
            method: 'post',
            data,
            noLoading: true
        })
    },




}
export default myMainland

