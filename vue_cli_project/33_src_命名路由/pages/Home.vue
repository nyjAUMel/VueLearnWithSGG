<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- router-link 中：始终使用完整路径，以 / 开头 -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/home-news"
            >News</router-link
          >
        </li>
        <li>
          <!-- 记得得带上父级的路径 -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/home-message"
            >Message</router-link
          >
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCom",
};
</script>

<style>
</style>