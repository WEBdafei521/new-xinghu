import Vue from 'vue'
import Vuex from 'vuex'
import { loginApi } from '../api/api.js'
import { setToken } from '../utils/utils.js'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		userInfo: {},
	},
	getters: {
		userInfo: state => state.userInfo
	},
	mutations: {
		setUser (state, data) {
			state.userInfo = {
				...state.userInfo,
				...data
			}
		}
	},
	actions: {
		loginAction ({ commit }, data) {
			uni.login({
				provider: 'weixin',
				success: function (loginRes) {
					// 获取用户信息
					loginApi({
						wechat_mini_code: loginRes.code
					}).then(res => {
						if (!res.msg) {
							commit('setUser', res)
							setToken(res.access_token)
						}
					})
				}
			});
		}
	},
	mudules: {},
})