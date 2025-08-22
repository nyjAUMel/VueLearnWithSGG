<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.done" />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "ItemCom",
  /* 
  子组件通过 props: ["todo"] 接收父组件传来的 todo，本质上是引用，不是复制一份新的。

  Vue 官方建议：props 不要直接修改，但技术上不是“完全不能改”。
    直接赋值 props（如 this.todo = ...）——不允许，会警告。
    修改 props 的属性（如 this.todo.done = ...）——技术上能改，但不推荐，最好通过事件让父组件改。
  */
  // 所以这里想修改todo.done的最好方式是在App组件里定义一个方法然后传给子组件List，再传给Item组件，然后这个组件调用修改的方法。
  props: ["todo", "deleteTodo"],
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

/* 悬浮效果 */
li:hover {
  background-color: lavender;
}

li:hover button {
  display: block;
}
</style>