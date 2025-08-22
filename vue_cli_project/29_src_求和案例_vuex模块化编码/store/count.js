/* 
下面举个例子说明命名空间（namespaced）和模块（modules）的隔离性：
    场景说明
        假设你有两个模块：
            countOptions 模块用来求和，其中定义了一个 mutation 名称叫 "ADDITION"。
            personOptions 模块用来管理人员，也定义了一个 mutation 也叫 "ADDITION"（假设用来增加某种数据）。
            如果不启用 namespaced，那么两个模块中相同名字的 mutation、action、getter 会混在一起，调用 commit 的时候就不知道到底调用哪个模块的 "ADDITION"。

*/


// 求和相关的配置
export default {
    namespaced: true,
    actions: {
        oddNumberAddition(context, value) {
            if (context.state.sum % 2) {
                context.commit('ADDITION', value)
            }
        },
        postponeAddition(context, value) {
            setTimeout(() => { context.commit('ADDITION', value) }, 500)
        }
    },
    mutations: {
        ADDITION(state, value) {
            state.sum += value
        },
        SUBTRACTION(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0, // 当前求和
        school: 'XAAU',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
