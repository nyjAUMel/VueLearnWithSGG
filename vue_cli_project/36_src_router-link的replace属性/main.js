/* 
补充：页面的import语句在执行时会被提升到上面先执行
*/
// 引入框架
import Vue from 'vue'
import App from './App.vue'

// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 应用插件
Vue.use(VueRouter)

new Vue({
    el: '#app',
    render: h => h(App),
    // 引用了VueRouter就可以写配置项router
    router
})