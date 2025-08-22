<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName">传递学校名称</button>
  </div>
</template>

<script>
export default {
  name: "SchoolComponent",
  props: ["receiveSchoolName"],
  data() {
    return {
      name: "XAAU",
      address: "西安",
    };
  },
  methods: {
    sendSchoolName() {
      this.receiveSchoolName(this.name);
    },
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>