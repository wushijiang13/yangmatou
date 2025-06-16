import { Get, Post } from './request'
//1.获取首页模块列表 
export const getHomePartList = (params) => {
    return Get('https://m.yangmatou.com/api/prod/sqshop', params)
}
// 2.获取活动基础信息
export const getHomeListDataApi = (params) => {
    return Get('https://m.yangmatou.com/api/prod/shoppanicbuy', params)
}
// // 2.获取活动基础信息
// export const getHomeListDataApi = (params) => {
//     return Get('https://m.yangmatou.com/api/prod/shoppanicbuylist', params)
// }

// 获取商品详情信息
export const getDetailApi = (params) => {
    return Get('https://m.yangmatou.com/api/prod/sqdetail', params)
}
// 商品图文描述
export const getDetailImageListApi = (params) => {
    return Get('https://m.yangmatou.com/api/prod/sqproductdescextra', params)
}

//获取商品小程序码
export const getDetailQrCodeApi = (params) => {
    return Post('https://m.yangmatou.com/api/social/sqwxqrcodestring', params)
}
