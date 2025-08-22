<template>
  <div>
    <Banner />
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 若要跳转name配置项就得写成对象形式 -->
          <router-link
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