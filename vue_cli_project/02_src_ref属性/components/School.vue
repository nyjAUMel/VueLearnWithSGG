<template>
  <div class="school">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "SchoolComponent",
  data() {
    return {
      schoolName: "XAAU",
      address: "西安",
    };
  },
};
</script>

<style scoped>
.school {
  background-color: orange;
}
</style>