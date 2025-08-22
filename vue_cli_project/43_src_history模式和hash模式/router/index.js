// 该文件用于创建整个应用的路由器

import VueRouter from 'vue-router'

// 引入组件

/* 
import 的执行机制：
    import xxx from 'xxx' 只是引入了组件模块
    此时组件的代码会被解析和注册，但不会执行组件的生命周期钩子
    组件只有在被实际使用（路由匹配并渲染）时才会创建实例
*/
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
// 导入Vuex是为了用state里的数据
import store from '../store/index.js'

// 创建一个路由器
const router = new VueRouter({
    /* 
    Vue Router 提供了两种路由模式来控制 URL 的表现形式和浏览器历史记录的管理方式。
        1. Hash 模式（默认模式）
            特点：
            URL 中带有 # 符号，例如：http://example.com/#/about
            利用 URL 的 hash 部分来模拟完整的 URL
            hash 变化不会向服务器发送请求，不会重新加载页面
            兼容性好，支持所有浏览器
        2. History 模式
            特点：
            URL 更加美观，例如：http://example.com/about
            利用 HTML5 History API 的 pushState() 和 replaceState() 方法
            需要服务器配置支持，避免刷新页面时出现 404 错误
            现代浏览器支持
    */
    mode: history,
    routes: [
        {
            path: '/about',
            component: About,
            meta: {
                title: '关于',
                isAuth: true
            },
        },
        {
            path: '/home',
            component: Home,
            meta: {
                title: '主页',
                isAuth: true
            },
            children: [
                {
                    path: 'home-news',
                    component: News,
                    meta: {
                        title: '新闻'
                    },
                    /* 
                    独享路由守卫（Per-Route Guard）是针对单个路由配置的守卫，它只对当前路由生效。
                    */
                    beforeEnter: (to, from, next) => {
                        if (store.state.school === 'XAAU') {
                            next()
                        } else {
                            alert('学校不是XAAU')
                        }
                    }
                },
                {
                    name: 'xinxi',
                    path: 'home-message',
                    component: Message,
                    meta: {
                        title: '信息'
                    },
                    children: [
                        {
                            /* 
                            :id 和 :title 是路由参数占位符
                            */
                            name: 'xijie',
                            path: 'detail/:id/:title',
                            component: Detail,
                            // props: true
                        }
                    ]
                }
            ]
        },
    ]
})



export default router