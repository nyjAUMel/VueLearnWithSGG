/* 
引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数 
    工厂函数：
        调用它就能返回一个应用实例，不需要 new
    区别：
        构造函数：
            function Car(name) {
                this.name = name
            }
            // 必须用 new
            const myCar = new Car('Tesla')
        工厂函数：
            function createCar(name) {
                return {
                    name: name,
                    start() { console.log('启动！') }
                }
            }
            // 直接调用，不需要 new
            const myCar = createCar('Tesla')
*/
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app（类似于vue2的vm，但app比vm更轻量）
const app = createApp(App)
// 挂载
app.mount('#app')

setTimeout(() => {
    app.unmount('#app')
}, 3000)




// vue2 写法
/* 
const vm = new Vue({
    render: h => h(App)
})
vm.$mount('#app')
*/
