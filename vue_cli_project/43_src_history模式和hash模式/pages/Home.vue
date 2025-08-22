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
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/home-message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 
      包裹在 <keep-alive> 标签内的动态组件会被缓存
      当组件在 <router-view> 中切换时，被切换出去的组件不会被销毁

      include该属性用来指定要缓存的组件，值是组件名(name属性)，如果不写则表示router-view标签里的组件全部缓存

      下面表示：当用户从 News组件 切换到 Message组件后，News组件不会被销毁
       -->
      <keep-alive :include="['NewsCom']">
        <router-view></router-view>
      </keep-alive>
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