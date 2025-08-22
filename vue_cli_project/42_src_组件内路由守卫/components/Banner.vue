<template>
  <div class="row">
    <div class="col-xs-offset-2 col-xs-8">
      <div class="page-header">
        <h2>Vue Router Demo</h2>
        <button @click="backwardPage">向后</button>
        <button @click="forwardPage">向前</button>
        <button @click="goPage">go方法</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerCom",
  methods: {
    backwardPage() {
      /* 
      back() 方法
        作用：后退到上一个页面
        实现：this.$router.back()
        等价于 this.$router.go(-1)
      */
      this.$router.back();
    },
    forwardPage() {
      /* 
      forward() 方法
        作用：前进到下一个页面（如果有）
        实现：this.$router.forward()
        等价于 this.$router.go(1)
      */
      this.$router.forward();
    },
    goPage() {
      /* 
      go(n) 方法
        作用：在历史记录中前进或后退指定步数
        参数：整数n，正数前进，负数后退
      */
      this.$router.go(3);
    },
  },
};
</script>

<style>
</style>