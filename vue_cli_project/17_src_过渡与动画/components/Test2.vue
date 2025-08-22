<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group>
      <h1 v-show="isShow" key="1">你好啊</h1>
      <h1 v-show="!isShow" key="2">Sheldon</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2Com",
  data() {
    return { isShow: true };
  },
};
</script>

<style scoped>
h1 {
  background-color: skyblue;
  /* 为 h1 元素上的所有可动画属性启用过渡效果 */
  /* transition: 1s linear; */
}

/* 进入的起点 */
.v-enter {
  transform: translateX(-100%);
}
/* 进入的终点 */
.v-enter-to {
  transform: translateX(0);
}

/* 
.v-enter-active
  控制进入过渡的动画属性
  定义从 .v-enter 到 .v-enter-to 的过渡效果
.v-leave-active
  控制离开过渡的动画属性
  定义从 .v-leave 到 .v-leave-to 的过渡效果 */
.v-enter-active,
.v-leave-active {
  transition: 1s linear;
}

/* 离开的起点 */
.v-leave {
  transform: translateX(0);
}
/* 离开的终点 */
.v-leave-to {
  transform: translateX(-100%);
}
</style>