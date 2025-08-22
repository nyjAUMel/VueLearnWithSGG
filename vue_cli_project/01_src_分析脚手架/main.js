/*
  该文件是整个项目的入口文件
*/
// 引入框架
import Vue from 'vue'
// 引入App组件，该组件是所有组件的父组件
import App from './App.vue'
// 关闭Vue生产提示
Vue.config.productionTip = false

/* 
关于不同版本的Vue:
  1.vue.js与vue.runtime.xxx.js的区别:
      (1).vue.js是完整版的Vue,包含:核心功能+模板解析器。
      (2).vue.runtime.xxx.js是运行版的Vue,只包含:核心功能;没有模板解析器。

  2.因为vue.runtime.xxx.js没有模板解析器,所以不能使用template配置项,需要使用
    render函数按收到的createElement函数去指定具体内容。
*/

// 创建Vue实例对象vm
new Vue({
  // 该代码将App组件放入容器中
  render: h => h(App),
  // render: h => h('h1', 'GoodNoon')
  /* 
  完整写法是这样的：
    这里是因为h1是内置元素，内置元素要穿第二个参数。但App是组件，内容已经在组件里写好了，所以不需要第二个参数。
  render: function (createElement) {
        return createElement('h1', '你好')
    }
  */
}).$mount('#app')
