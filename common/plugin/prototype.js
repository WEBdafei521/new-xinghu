import Vue from 'vue'

/* toast */
Vue.prototype.$toast = (msg, type = 'none', ms = 1000) => {
	uni.showToast({
	    title: msg,
			icon: type,
	    duration: 1000
	})
}
/* 复制粘贴功能 */
Vue.prototype.$copy = {
	get (callback) {
		uni.getClipboardData({
		    success: function (res) {
				callback(res.data)
		    }
		})
	},
	set (data) {
		uni.setClipboardData({
			data,
			success: function () {
				// console.log('success');
			}
		})
	}
}