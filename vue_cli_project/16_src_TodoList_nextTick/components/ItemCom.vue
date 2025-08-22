<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @click="checkTodo(todo.id)" />
      <!-- 刚开始没有isEdit属性，所以是undefined -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="saveEditTodo(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    <button class="btn btn-edit" v-show="!todo.isEdit" @click="editTodo(todo)">
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "ItemCom",
  /* 
  子组件通过 props: ["todo"] 接收父组件传来的 todo，本质上是引用，不是复制一份新的。

  Vue 官方建议：props 不要直接修改，但技术上不是“完全不能改”。
    直接赋值 props（如 this.todo = ...）——不允许，会警告。
    修改 props 的属性（如 this.todo.done = ...）——技术上能改，但不推荐，最好通过事件让父组件改。
  */
  // 所以这里想修改todo.done的最好方式是在App组件里定义一个方法然后传给子组件List，再传给Item组件，然后这个组件调用修改的方法。
  props: ["todo"],
  methods: {
    checkTodo(id) {
      this.$bus.$emit("checkTodo", id);
    },
    deleteTodo(id) {
      this.$bus.$emit("deleteTodo", id);
    },
    editTodo(todo) {
      // 这是警告：Do not access Object.prototype method 'hasOwnProperty' from target object
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      /*
       让输入框获取焦点
        但是不会生效，原因是：
          执行完上面的代码vue并不会理解重新渲染页面，而是走完整个方法以后才会重新渲染页面，这样做是为了效率。而当页面还没重新渲染时是没有input元素的，当页面没有这个元素时获取焦点方法是不生效的。
            解决这个问题可以用个定时器，也可以用vue给的$nextTick
       */
      // this.$refs.inputTitle.focus();

      /*
        使用$nextTick
          $nextTick的回调参数会在DOM节点更新完毕之后再执行

          官方的解释：在下一次DOM更新结束后执行其回调函数
        
        使用场景：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。
      */
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    saveEditTodo(todo, e) {
      if (e.target.value === "") {
        alert("不能为空");
        return;
      }
      // 切换编辑状态
      todo.isEdit = false;
      // 保存信息
      this.$bus.$emit("saveEditTodo", todo.id, e.target.value);
    },
  },
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