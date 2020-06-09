import axios from '../plugin/Ajax.js'

/**
 * 登录接口
 */
export const loginApi = (parmas) => {
	return axios.post('/api/master/pub/login', parmas)
}
// 轮播图
export const bannerList = (parmas) => {
	return axios.get('/api/master/home/topBanner', parmas)
}
// 广告列表
export const noticeList = (parmas) => {
	return axios.get('/api/master/home/topNoticeList', parmas)
}
// 首页直播列表
export const live_list = (parmas) => {
	return axios.post('/api/master/user/getUppers', parmas)
}
// 首页直播列表
export const my_invitited = (parmas) => {
	return axios.post('/api/master/user/getFans', parmas)
}
// 首页直播列表
export const updata_wxnum = (parmas) => {
	return axios.post('/api/master/user/setWeChatNum', parmas)
}
// 首页我的邀请的信息
/*
 * /user/getFans/user/getFans
*/
/*
 * 钱包
*/
export const walletApi = (parmas) => {
	return axios.get('/admin/order/stat', parmas, 'admin')
}
/**
 * 商品列表
 */
export const goodsListApi = (parmas) => {
	return axios.get('/admin/goods/list', parmas, 'admin')
}
/**
 * 订单列表
 */
export const orderListApi = (parmas) => {
	return axios.get('/admin/order/list', parmas, 'admin')
}
// 选择默认地址
export const addressDefault = (parmas) => {
	return axios.get('/admin/address/default', parmas, 'admin')
}
// 创建订单
export const createOrder = (parmas) => {
	return axios.get('/admin/buy/createOrder', parmas, 'admin')
}

// 支付
export const payOrderApi = (parmas) => {
	return axios.post('/admin/unipay/prePayOrder', parmas, 'admin')
}



