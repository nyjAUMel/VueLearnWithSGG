<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
      appear=""
      name="animate__animated animate__bounce"
      enter-active-class="animate__wobble"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="isShow" key="1">你好啊</h1>
      <h1 v-show="!isShow" key="2">Sheldon</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css"; // 引入 CSS 库
export default {
  name: "Test3Com",
  data() {
    return { isShow: true };
  },
};
</script>

<style scoped>
h1 {
  background-color: skyblue;
  /* 为 h1 元素上的所有可动画属性启用过渡效果 */
}
</style>