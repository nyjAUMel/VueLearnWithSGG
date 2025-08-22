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
// 准备actions——用于响应组件中的动作
const actions = {
    /* 
    在 Vuex 的 actions 中：
        context：是 store 的上下文对象，包含 commit、dispatch、state 等方法和属性
        value：是传递给 action 的载荷（payload），即要处理的数据值
    简单来说：
        context 用来调用 store 的方法
        value 是传入的具体数据
    */

    // 这两个没有意义，因为在这里直接调用commit方法了，没有业务逻辑。所以可以直接在组件里调用commit
    /* jia(context, value) {
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    }, */

    jiaOdd(context, value) {
        console.log(context)
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    }
}

// 准备mutations——用于操作数据（state）
const mutations = {
    /* 
    在 Vuex 的 mutations 中：
        state：是 Vuex store 中的状态对象，即你要修改的数据源
        value：是传递给 mutation 的载荷（payload），即要用来修改状态的具体数据值
    简单来说：
        state 是要被修改的数据
        value 是用来修改数据的参数
    */
    JIA(state, value) {

        state.sum += value
    }, JIAN(state, value) {
        state.sum -= value
    }
}

// 准备state——用于存储数据
const state = {
    sum: 0, // 当前求和
}

/* 
getters 就类似 Vue 组件中的计算属性，它用来对 state 中的数据进行处理或转换，返回一个经过计算后的值。这样组件就可以通过 getters 获取经过处理后的数据，而不必重复在组件内写同样的计算逻辑。
*/
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}


// 创建store
export default new Vuex.Store({
    actions, mutations, state, getters
})

