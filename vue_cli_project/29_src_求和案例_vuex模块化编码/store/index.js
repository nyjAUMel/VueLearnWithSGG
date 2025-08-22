// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
/* 
应用Vuex插件
    为什么要写在这里？
        因为：在创建store实例以前必须使用Vuex。
                如果要在main.js里，会因为import语句先执行而没有使用Vuex报错
*/
Vue.use(Vuex)


import countOptions from './count'
import personOptions from './person'
// 创建store
export default new Vuex.Store({
    modules: { countOptions, personOptions }
})

