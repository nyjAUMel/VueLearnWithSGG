/* 
补充：页面的import语句在执行时会被提升到上面先执行
*/
// 引入框架
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 完整引入
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';

// 应用插件
// Vue.use(ElementUI)

// 注册Element-ui全局组件
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

new Vue({
    el: '#app',
    render: h => h(App),
})