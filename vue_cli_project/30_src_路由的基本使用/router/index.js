// 改文件用于创建整个应用的路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'


// 创建并暴露一个路由器
export default new VueRouter({
    // 路由配置中：根路由用 /，子路由不用 /
    // router-link 中：始终使用完整路径，以 / 开头
    routes: [
        {
            path: '/about',
            component: About
        },
        // 这是一级路由
        {
            path: '/home',
            component: Home,
        },
    ]
})