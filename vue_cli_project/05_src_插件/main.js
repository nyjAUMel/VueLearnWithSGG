// 引入框架
import Vue from 'vue'
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

// 引入插件
import plugins from './plugins'
// 应用插件
Vue.use(plugins)

new Vue({
    el: '#app',
    render: h => h(App)
})