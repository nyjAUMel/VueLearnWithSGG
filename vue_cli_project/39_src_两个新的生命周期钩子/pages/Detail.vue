<template>
  <ul>
    <li>消息编号：{{ $route.params.id }}</li>
    <li>消息标题：{{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "DetailCom",
  props: ["id", "title"],
  mounted() {
    console.log(this);
  },
  beforeDestroy() {
    console.log("Detail将要销毁了");
  },
};
</script>

<style>
</style>