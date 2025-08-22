<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
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
        <button @click="pushShow(item)">push查看</button
        ><button @click="replaceShow(item)">replace查看</button>
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
  methods: {
    pushShow(item) {
      console.log(this.$router);
      /* 
      push 方法的作用是：
        导航到指定路由：将新路由添加到浏览器历史记录栈中
        可以前进后退：用户可以通过浏览器的后退按钮返回到前一个页面
        与replace对比：不同于 replace 方法会替换当前历史记录，push 会在历史记录中新增一条记录
      */
      this.$router.push({
        // 如果写的是params参数那么不允许写path
        name: "xijie",
        params: {
          id: item.id,
          title: item.title,
        },
      });
    },
    replaceShow(item) {
      console.log(this.$router);
      this.$router.replace({
        // 如果写的是params参数那么不允许写path
        name: "xijie",
        params: {
          id: item.id,
          title: item.title,
        },
      });
    },
  },
};
</script>

<style>
</style>