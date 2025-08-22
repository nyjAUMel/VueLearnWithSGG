<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <!-- @click="sendStudentName" 是 Vue 的事件绑定语法糖，本质上是 Vue 帮你在模板中的 DOM 元素上绑定了一个原生 DOM 事件监听器。 -->
    <button @click="sendStudentName">发送学生姓名</button>
    <button @click="unbindAU">解绑AU事件</button>
    <h1>i的值是：{{ i }}</h1>
    <button @click="add">点击i++</button>
    <button @click="death">销毁当前Student组件的实例对象</button>
  </div>
</template>

<script>
export default {
  name: "StudentComponent",
  data() {
    return {
      name: "张三",
      sex: "男",
      i: 1,
    };
  },
  methods: {
    add() {
      console.log("add函数执行了");
      this.i++;
    },
    sendStudentName() {
      /* 
      $emit 是 Vue 组件实例对象的一个重要方法，用于触发自定义事件，实现子组件向父组件传递数据。
      主要功能：
          1. 触发自定义事件：子组件通过 $emit 触发在父组件中注册的自定义事件
          2. 传递数据给父组件：可以携带参数，将子组件的数据传递给父组件

      $emit 是干什么的？
        目的：让子组件主动触发（调用）父组件注册的自定义事件，并可以传递数据。
      */
      this.$emit("AU", this.name);
      // this.$emit("demo");
    },
    unbindAU() {
      // 这样能解绑一个自定义事件
      this.$off("AU");

      // 解绑多个自定义事件
      // this.$off(["AU", "demo"]);

      // 解绑所有自定义事件(就是空参)
      // this.$off();
    },
    death() {
      /*
       销毁当前Student组件的实例

       销毁后所有Student实例的自定义事件全部都不奏效了
      */
      this.$destroy();
    },
  },
};
</script>

<style scoped>
.student {
  background-color: lavender;
  padding: 5px;
}
</style>
