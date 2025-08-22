<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- 
        跳转路由并携带params参数，to的字符串写法

        这么写就得路由配置里配置
         -->
        <!-- <router-link
          :to="`/home/home-message/detail/${item.id}/${item.title}`"
          >{{ item.title }}</router-link
        > -->

        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link
          :to="{
            // 如果写的是params参数那么不允许写path
            name: 'xijie',
            params: {
              id: item.id,
              title: item.title,
            },
          }"
          >{{ item.title }}</router-link
        >
        &nbsp;&nbsp;
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