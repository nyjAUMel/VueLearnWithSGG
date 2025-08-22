// 引入框架
import Vue from 'vue'
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

// 全局混入
/* import { mixinVar, mixinData } from './mixin'
Vue.mixin(mixinVar)
Vue.mixin(mixinData) */

new Vue({
    el: '#app',
    render: h => h(App)
})