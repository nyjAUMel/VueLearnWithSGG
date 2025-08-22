<template>
  <div>
    <!-- 加了v-bind后面就是JS表达式，所以传过去的就是数字型 -->
    <Student name="李四" sex="男" :age="18" />
    <hr />

    <!-- 不加了v-bind后面就是普通值，所以传过去的就是字符型 -->
    <Student name="李四" sex="女" age="18" />
    <hr />

    <!-- 用来测试 props详细配置 -->
    <Student name="李四" sex="女" />
  </div>
</template>

<script>
// 引入School组件
import Student from "./components/Student.vue";
export default {
  name: "AppComponent",
  components: {
    Student,
  },
};
</script>
