<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校位置：{{ address }}</h2>
    <button @click="showName">点击提示校名</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "XAAU",
      address: "陕西西安",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>