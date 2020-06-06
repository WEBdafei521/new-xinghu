import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 引入mixin 用户获取屏幕高度
import './common/plugin/mixin'
import './common/plugin/prototype'
// main.js-
import uView from "uview-ui";
Vue.use(uView);
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
