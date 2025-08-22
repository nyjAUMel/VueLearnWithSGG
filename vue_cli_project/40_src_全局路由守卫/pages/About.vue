<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "AboutCom",
  mounted() {
    console.log("@@@", this.$route);
    console.log("@@@", this.$router);
  },
};
</script>

<style>
</style>