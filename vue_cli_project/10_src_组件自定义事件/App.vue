<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!--  -->
    <h1>学生姓名是：{{ name }}</h1>
    <hr />
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :receiveSchoolName="receiveSchoolName" />
    <hr />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法：使用v-on） -->
    <Student v-on:AU="receiveStudentName" @demo="m1" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法：使用ref） -->
    <!-- 绑定在组件上的事件都会被视为自定义事件，如:click。解决方法使用.native -->
    <Student ref="student" @click.native="resolveDustomizedEvent" />
  </div>
</template>

<script>
// 引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "AppComponent",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好啊！！！",
      name: "",
    };
  },
  methods: {
    receiveSchoolName(schoolName) {
      console.log(schoolName);
    },
    receiveStudentName(studentName) {
      this.name = studentName;
    },
    m1() {
      console.log("demo事件被触发了");
    },
    resolveDustomizedEvent() {
      alert("使用.native解决原生事件被视为自定义事件的问题");
    },
  },
  mounted() {
    // this.$refs.student拿到的就是组件实例对象
    // 绑定自定义事件
    this.$refs.student.$on("AU", this.receiveStudentName);
    // 绑定自定义事件（只执行一次用$once）
    // this.$refs.student.$once("AU", this.receiveStudentName);

    /* this.$refs.student.$on("AU", function () {
      // 补充，这里的this其实是student组件实例。也就是谁触发了AU事件，这个this就是谁
      console.log(this);
    }); */
  },
};
</script>

<style scoped>
.app {
  background-color: grey;
}
</style>
