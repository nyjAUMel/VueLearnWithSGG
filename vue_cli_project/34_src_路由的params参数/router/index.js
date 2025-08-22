// 改文件用于创建整个应用的路由器

import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


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
            // 这是二级路由(二级路由不加斜杠)
            children: [
                {
                    path: 'home-news',
                    component: News,
                },
                {
                    path: 'home-message',
                    component: Message,
                    children: [
                        {
                            /* 
                            :id 和 :title 是路由参数占位符
                            */
                            name: 'xijie',
                            path: 'detail/:id/:title',
                            component: Detail
                        }
                    ]
                }
            ]
        },
    ]
})