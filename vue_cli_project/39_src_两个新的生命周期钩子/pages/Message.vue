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