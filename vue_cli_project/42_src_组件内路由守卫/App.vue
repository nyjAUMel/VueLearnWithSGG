<template>
  <div>
    <Banner />
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 
          replace 属性是 Vue Router 提供给 <router-link> 的一个选项，用来控制导航时浏览器历史记录的行为。
            默认：点击 <router-link> 会使用 push 方法，将新路由加入历史记录堆栈，这样用户可以通过浏览器的返回按钮回到原先的页面。
            使用 replace：当你添加 replace 属性后，点击链接会覆盖掉当前栈顶的记录。
           -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            :to="{
              path: '/about',
            }"
            >About</router-link
          >

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