<template>
  <div class="row">
    <!-- 展示内容 -->
    <div
      class="card"
      v-show="info.users.length > 0"
      v-for="item in info.users"
      :key="item.id"
    >
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
    <!-- 展示是否初次加载 -->
    <h1 v-show="info.isFirst">Welcome</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 展示网络错误 -->
    <h1 v-show="info.errorMsg">{{ info.errorMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "ListCom",
  data() {
    return {
      info: {
        isFirst: true,
        isLoading: false,
        errorMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    // this.$bus.$on("getFilteredUsers", ...) 只是监听事件，而不是触发事件
    this.$bus.$on("getFilteredUsers", (dataObj) => {
      /* 
        使用了 ES6 的展开运算符（spread operator）来合并对象。
          创建一个新对象，先包含 this.info 的所有属性，然后用 dataObj 的属性覆盖同名属性
      */
      this.info = { ...this.info, ...dataObj };
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>