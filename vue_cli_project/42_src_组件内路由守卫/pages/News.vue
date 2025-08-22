<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "NewsCom",
  data() {
    return {
      opacity: 1,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0.1) this.opacity = 1;
    }, 20);
  },

  // activated 和 deactivated 这两个钩子函数：只有在组件被 <keep-alive> 包裹时才会生效

  /* 
  activated
    作用：当组件被激活时调用
    时机：组件从缓存中被重新显示时触发
    对应：组件从"睡眠"状态变为"活跃"状态
  */
  activated() {
    console.log("News组件被激活了");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0.1) this.opacity = 1;
    }, 20);
  },
  /* 
  deactivated
    作用：当组件被停用时调用
    时机：组件被切换出去但未销毁时触发（因为用了 <keep-alive>）
    对应：组件从"活跃"状态变为"睡眠"状态
  */
  deactivated() {
    console.log("News组件被失活了");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>