<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <HeaderCom :addTodo="addTodo" />
        <ListCom :todos="todos" :deleteTodo="deleteTodo" />
        <FooterCom
          :todos="todos"
          :checkAllTodos="checkAllTodos"
          :clickCompletedTodos="clickCompletedTodos"
        />
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import HeaderCom from "./components/HeaderCom";
import ListCom from "./components/ListCom";
import FooterCom from "./components/FooterCom";
export default {
  name: "AppComponent",
  components: {
    HeaderCom,
    ListCom,
    FooterCom,
  },
  data() {
    return {
      todos: [
        { id: "001", title: "抽烟", done: true },
        { id: "002", title: "喝酒", done: false },
        { id: "003", title: "烫头", done: true },
      ],
    };
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 全选或全不选
    checkAllTodos(flag) {
      this.todos.forEach((todo) => {
        todo.done = flag;
      });
    },
    // 清除已完成的todo
    clickCompletedTodos() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
};
</script>
<style>
/* 
父组件（App.vue）里的 scoped 样式不会影响子组件（如 HeaderCom、ListCom、FooterCom）里的元素。
当你在<style>标签上加上scoped属性后，样式只会作用于当前组件的模板，不会影响到子组件的内容。原理是 Vue 会自动给当前组件的 DOM 元素和样式选择器加上特定的属性选择器（如data-v-xxxx），从而实现样式隔离。
*/
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>