<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 
    使用 transition 标签的主要原因包括：
      1. 简化动画实现
          自动管理 CSS 类名的添加和移除
          无需手动监听 DOM 变化或使用 JavaScript 控制动画状态
          封装了复杂的动画时序逻辑
      3. 完整的过渡生命周期
          进入过渡：enter → enter-active → enter-to
          离开过渡：leave → leave-active → leave-to
          自动在适当时机添加/移除相应的类名

    Vue 的 transition 组件通过以下方式控制元素动画：
        工作原理
            自动添加 CSS 类名
                当元素插入或移除时，transition 会自动添加/移除特定的 CSS 类名
                根据这些类名应用不同的样式和动画效果
        判断依据
            元素进入（显示）时
                当元素从不可见状态变为可见状态时
                Vue 自动添加 v-enter-active 类名
                对应你的代码中的 v-show="isShow" 从 false 变为 true
            元素离开（隐藏）时
                当元素从可见状态变为不可见状态时
                Vue 自动添加 v-leave-active 类名
                对应你的代码中的 v-show="isShow" 从 true 变为 false
    -->
    <!-- 
    transition 元素的 name 属性用于自定义过渡类名的前缀。
        作用说明
            默认行为
                不设置 name 属性时，默认使用 v- 作为类名前缀
                例如：v-enter-active、v-leave-active 等
        自定义前缀
            设置 name 属性后，会使用该名称作为类名前缀
            例如：name="fade" 会产生 fade-enter-active、fade-leave-active 等
     -->
    <!-- appear：初次渲染时主动执行进入动画 -->
    <transition name="DIY" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TestCom",
  data() {
    return { isShow: true };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

.DIY-enter-active {
  animation: cooper 1s;
}
.DIY-leave-active {
  animation: cooper 1s reverse;
}

@keyframes cooper {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>