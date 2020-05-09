import Vue from 'vue'
import App from './App'
import store from './store'
// import './static/iconfont/iconfont.css'
// import './static/iconfontk/iconfont.css' // 自己的图标

Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.prototype.$url = 'http://fxg.huiyuanapp.com';
Vue.prototype.$http = 'http://cjh.yilaohuijt.com'; // 本地请求地址
Vue.prototype.$slurl = 'http://apitest.99263.com' // 365商旅请求接口
Vue.prototype.$ApiKey = 'b421b9a21075a359c09a36db79325d5b' // 356 配置 ApiKey

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
