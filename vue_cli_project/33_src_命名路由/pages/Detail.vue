<template>
  <ul>
    <!-- 
    路由相同组件不会销毁而是直接复用，这就导致了this应该是一个。所以传入的参数在创建这个实例是就已经确定了。但是为什么参数还能变化呢？
        因为：

            $route 对象是响应式的
            当路由变化时，$route.query 会自动更新
            模板中的 {{ $route.query.title }} 会随之重新渲染
     -->
    <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "DetailCom",
  data() {
    return {
      param: this.$route.query,
    };
  },
  mounted() {},
  beforeDestroy() {
    console.log("Detail将要销毁了");
  },
};
</script>

<style>
</style>