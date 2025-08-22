/* 
补充：页面的import语句在执行时会被提升到上面先执行
*/
// 引入框架
import Vue from 'vue'
import App from './App.vue'

// 引入插件
import VueResource from 'vue-resource'

// 引入store
import store from './store/index'

// 关闭生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(VueResource)

new Vue({
    el: '#app',
    render: h => h(App),
    // 只要使用了Vuex那么在创建vm的时候就可以传入store配置项
    store,
    beforeMount() {
        Vue.prototype.$bus = this
    }
})