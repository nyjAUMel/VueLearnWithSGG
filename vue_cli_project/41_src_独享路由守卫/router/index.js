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

    routes: [
        {
            path: '/about',
            component: About,
            // meta 配置项在 Vue Router 中用于给路由添加自定义信息，这些信息可以被路由守卫、组件或其他路由相关功能访问和使用。
            meta: {
                title: '关于'
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