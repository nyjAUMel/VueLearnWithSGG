<template>
  <h2>我是About的内容</h2>
</template>

<script>
import store from "../store";

export default {
  name: "AboutCom",
  mounted() {
    console.log("@@@", this.$route);
    console.log("@@@", this.$router);
  },

  /* 
  beforeRouteEnter
    调用时机：进入路由前调用（注：这里说的是通过路由进入组件才能够触发，通过页面注册使用组件是不会触发这几个方法的）
    特点：此时组件实例还未创建，无法访问 this
  */
  beforeRouteEnter(to, from, next) {
    console.log("进入About组件", to, from);
    // 改页签名
    document.title = to.name || "XAAU";
    // 鉴权
    if (to.meta.isAuth) {
      if (store.state.school === "XAAU") {
        next();
      } else {
        alert("学校不是XAAU，不能进入");
      }
    } else {
      next();
    }
  },
  /* 
  beforeRouteLeave
    调用时机：离开路由前调用
    特点：可以访问 this，常用于表单未保存提示
  
  注：这个和后置路由守卫不一样，这个并会在进入该组件后调用，而是在离开该组件（也就是切换了别的路由）前调用。
  */
  beforeRouteLeave(to, from, next) {
    console.log("离开About组件", to, from);
    next();
  },
};
</script>

<style>
</style>