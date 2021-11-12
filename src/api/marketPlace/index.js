import { request } from '@/utils/axios'


// 交易市场
let marketPlace = {
    // 获取交易市场列表
    marketPlaceList: (data) => {
        return request({
            url: '/api/market/product/page',
            method: 'post',
            data,
            // noToken: true,
        })
    },
}
export default marketPlace

