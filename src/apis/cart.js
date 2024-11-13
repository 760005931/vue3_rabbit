import request from '@/utils/http'
// 封装购物车相关接口
// 加入购物车接口
export const insertCartAPI = ({ skuId, count }) => {
    return request({
        url: '/member/cart',
        method: 'post',
        data: {
            skuId,
            count
        }
    })
}
//获取最新购物车列表
export const findNewCartListAPI = () => {
    return request({
        url:'/member/cart'
    })
}
//删除购物车列表
export const deleteCartAPI =(ids) => {
    return request({
        url:'/member/cart',
        method:'delete',
        data:{
            ids
        }
    })
}
