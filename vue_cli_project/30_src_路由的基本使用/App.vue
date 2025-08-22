<template>
  <div>
    <Banner />
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原式html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- 
          vue中靠router-link标签实现路由的切换
          
          <router-link> 实现的是客户端路由跳转，不会向服务器发送请求，而是在浏览器内部切换组件
          普通的 <a> 标签会触发页面刷新，向服务器请求新的页面

          router-link最终也会转成a标签
           -->
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <!-- 
          active-class属性：
              当用户访问的URL路径与 <router-link> 的 to 属性路径匹配时，Vue Router会自动给该元素添加 active 类来标识激活状态。 
          -->
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "AppComponent",
  components: {
    Banner,
  },
};
</script>

<style scoped>
</style>