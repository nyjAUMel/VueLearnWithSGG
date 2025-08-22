<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        v-model="user"
        placeholder="enter the name you search"
        @keyup.enter="searchUsers"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchCom",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    searchUsers() {
      console.log(this);
      this.$bus.$emit("getFilteredUsers", {
        isFirst: false,
        isLoading: true,
        errorMsg: "",
        users: [],
      });
      this.$http.get(`https://api.github.com/search/users?q=${this.user}`).then(
        (response) => {
          console.log("请求成功了", response.data);
          this.$bus.$emit("getFilteredUsers", {
            isFirst: false,
            isLoading: false,
            errorMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          console.log("请求失败了", error);
          this.$bus.$emit("getFilteredUsers", {
            isFirst: false,
            isLoading: false,
            errorMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
  beforeDestroy() {
    this.$bus.$off("sendFilteredUsers");
  },
};
</script>

<style>
</style>