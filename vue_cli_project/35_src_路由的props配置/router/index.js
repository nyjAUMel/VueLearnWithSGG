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
                            path: 'detail',
                            component: Detail,
                            // props的第一种写法，值为对象。该对象中的所有key-value都会以props的形式传个Detail组件。
                            // props: { id: '1', title: 'hello' }

                            // props的第二种写法，当设置 props: true 时，就会把该路由组件收到的所有params参数以props的形式传递给Detail组件。
                            // 要使用 params 传参，必须在路由的 path 中使用冒号（:）语法定义参数占位符。所以这里要测试的话得改上面的path
                            // props: true

                            /* 
                            props的第三种写法，值为函数
                                函数接收一个参数：$route 对象（当前路由信息）
                                函数需要返回一个对象，这个对象将作为 props 传递给组件
                            */
                            props($route) {
                                return {
                                    id: $route.query.id, title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ]
})