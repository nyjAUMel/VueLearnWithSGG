// 引入框架
import Vue from 'vue'
import App from './App.vue'

// 引入插件
import VueResource from 'vue-resource'

// 关闭生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(VueResource)
new Vue({
    el: '#app',
    render: h => h(App),
    /* 
    为什么必须使用beforeMount
        因为：子组件的mounted钩子可能在根实例的mounted之前执行。子组件尝试访问this.$bus时可能还未定义
    */
    beforeMount() {
        Vue.prototype.$bus = this
    }
})