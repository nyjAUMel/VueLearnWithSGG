<template>
  <div class="student">
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import { mixinVar, mixinData } from "../mixin.js";
export default {
  name: "SchoolComponent",
  data() {
    return {
      name: "XAAU",
      address: "西安",
    };
  },
  mixins: [mixinVar, mixinData],
};
</script>
