import { request } from '@/utils/axios'


// 质押背包
let miningCamp = {
    // 获取质押列表
    miningCampList: (data) => {
        return request({
            url: '/auth/market/pawnDragon/getOnPawnDragonByPage',
            // url: '/auth/game/hero/getMyHeroByPage',
            method: 'post',
            data,
        })

    },


    // 获取待质押列表
    miningWaitCampList: (data) => {
        return request({
            url: '/auth/market/pawnDragon/getAblePawnDragonByPage',
            method: 'post',
            data,
        })
    },

    // 获取我的体力
    getUserPower: (data) => {
        return request({
            url: '/auth/pve/user-pve-log/getUserPower',
            method: 'post',
            data,
        })
    },

    // 获取我的质押数据
    getMyStaked: (data) => {
        return request({
            url: '/auth/market/pawnDragon/getMyStaked',
            method: 'post',
            data,
        })
    },

    // 获取质押预期详情数据
    getPawnExpectData: (data) => {
        return request({
            url: '/auth/market/pawnDragon/getPawnExpectData',
            method: 'post',
            data,
        })
    },

    // 开始质押
    pawnBegin: (data) => {
        return request({
            url: '/auth/market/pawnDragon/pawnBegin',
            method: 'post',
            data,
        })
    },

    // 开始质押-拒绝质押锁定
    pawnBeginRefuse: (data) => {
        return request({
            url: '/auth/market/pawnDragon/pawnBeginRefuse',
            method: 'post',
            data,
        })
    },

    // 开始质押-回调
    pawnDragonCallBack: (data) => {
        return request({
            url: '/auth/market/pawnDragon/pawnBeginCallBack',
            method: 'post',
            data,
        })
    },

    // 开始质押-收益详情
    pawnDragonDetail: (data) => {
        return request({
            url: '/auth/market/pawnDragon/info',
            method: 'post',
            data,
        })
    },

    // 开始质押-中途结算
    midwaySettlement: (data) => {
        return request({
            url: '/auth/market/pawnDragon/midwaySettlement',
            method: 'post',
            data,
        })
    },

    // 开始质押-中途结算回调
    midwaySettlementCallback: (data) => {
        return request({
            url: '/auth/market/pawnDragon/midwaySettlementCallback',
            method: 'post',
            data,
        })
    },


    // 开始质押-最终结算
    pawnDragonEnd: (data) => {
        return request({
            url: '/auth/market/pawnDragon/end',
            method: 'post',
            data,
        })
    },

    // 开始质押-最终结算回调
    pawnDragonEndCallBack: (data) => {
        return request({
            url: '/auth/market/pawnDragon/endCallback',
            method: 'post',
            data,
        })
    },

    // 最终结算-拒绝
    pawnDragonEndRefuse: (data) => {
        return request({
            url: '/auth/market/pawnDragon/endRefuse',
            method: 'post',
            data,
        })
    },


    // 开始质押-取消
    pawnDragonCancel: (data) => {
        return request({
            url: '/auth/market/pawnDragon/cancel',
            method: 'post',
            data,
        })
    },

    // 开始质押-取消回调
    pawnDragonCancelCallBack: (data) => {
        return request({
            url: '/auth/market/pawnDragon/cancelCallback',
            method: 'post',
            data,
        })
    },







}
export default miningCamp

