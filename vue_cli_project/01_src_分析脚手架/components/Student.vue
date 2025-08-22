<template>
  <div>
    <h2>学生姓名：{{ studentName }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">点击展示学生姓名</button>
  </div>
</template>

<script>
export default {
  name: "StudentCom",
  data() {
    return {
      studentName: "丁真",
      age: 25,
    };
  },
  methods: {
    showName() {
      alert(this.studentName);
    },
  },
};
</script>