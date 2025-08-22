<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- 
        当路由参数变化但组件相同时，Vue Router 默认会复用同一个组件实例，而不是销毁重建。

        :to 是 v-bind:to 的简写
        它告诉 Vue 这是一个动态属性，需要解析其中的 JavaScript 表达式
         -->
        <!-- 跳转路由并携带query参数，to的写法 -->
        <!-- <router-link
          :to="`/home/home-message/detail?id=${item.id}&title=${item.title}`"
          >{{ item.title }}</router-link
        >&nbsp;&nbsp; -->

        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link
          :to="{
            path: '/home/home-message/detail',
            query: {
              id: item.id,
              title: item.title,
            },
          }"
          >{{ item.title }}</router-link
        >&nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MessageCom",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style>
</style>