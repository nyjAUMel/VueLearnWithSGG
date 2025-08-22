
import axios from 'axios'
import { nanoid } from 'nanoid'

// 人员管理相关的配置
export default {
    /* 
    当设置为 true 时，该模块的所有 actions、mutations 和 getters 都会自动根据模块名进行命名空间隔离
    启用命名空间后，不同模块中的同名 actions、mutations 或 getters 不会相互覆盖
    */
    namespaced: true,
    actions: {
        addPersonZhang(context, value) {
            if (value.name.indexOf("张") === 0) {
                context.commit("ADD_PERSON", value)
            } else {
                alert('添加的人必须姓张')
            }
        },
        // 联系服务器要数据
        addPersonServer(context) {
            axios.get('https://v1.hitokoto.cn/?c=f&encode=text').then(
                response => {
                    alert(response.data)
                    context.commit("ADD_PERSON", { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [{ id: '001', name: "张三" },]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}
