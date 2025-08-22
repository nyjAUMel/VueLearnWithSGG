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

/* 
全局前置守卫
    router.beforeEach((to, from, next) => {})
    在任何路由跳转前都会执行
    常用于权限验证、加载提示等
*/
router.beforeEach((to, from, next) => {
    // 必须调用 next() 函数才能让路由跳转继续进行。
    console.log('前置路由守卫', to, from)

    // 判断要访问的路由是否需要鉴权
    if (to.meta.isAuth) {
        // 限制跳转News或Message时Vuex里school的值只是XAAU时才能跳转。
        if (store.state.school === 'XAAU') {
            next()
        } else {
            alert('学校不是XAAU，不能跳转到News')
        }
    } else {
        next()
    }
})


/* 
全局后置守卫
    router.beforeEach((to, from) => {})
    在路由跳转完成之后执行
    此时组件已经渲染完毕
*/
router.afterEach((to, from) => {
    // 前置路由和后置路由的 to、from 参数内容基本是一样的，都是路由对象。
    console.log('后置路由守卫', to, from)

    // 设置每次访问以后修改页签的标题
    document.title = to.meta.title || 'AU'

})



export default router