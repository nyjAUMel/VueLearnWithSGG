<template>
  <div>
    <!-- 脚手架里自闭合标签就没问题了 -->
    <School />
    <School ref="sch1" />
    <School id="sch2" />

    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点击输出上方DOM元素</button>
  </div>
</template>

<script>
// 引入School组件
import School from "./components/School.vue";
export default {
  name: "AppComponent",
  components: {
    School,
  },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title); // 输出真实DOM元素
      // 这样就获取到了该组件(School)的实例对象
      console.log(this.$refs.sch1);

      /* 
      为什么不用html的id属性然后在这里用原生的方式获取元素呢？
        1. 这是在vue里，最好用vue的方式，即用ref属性。
        2. 如果给组件实例对象加id获取到的就是普通的html标签，而不是实例
      */
      console.log(document.querySelector("#sch2"));
    },
  },
};
</script>

<style>
</style>