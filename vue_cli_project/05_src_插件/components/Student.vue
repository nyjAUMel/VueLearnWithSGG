<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h1 v-fbind="val"></h1>
    <h1>{{ school | sliceStr }}</h1>
  </div>
</template>

<script>
export default {
  name: "StudentComponent",
  data() {
    return {
      name: "张三",
      sex: "男",
      val: 22,
      school: "伯克利音乐学院",
    };
  },
};
</script>
