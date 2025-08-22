<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为为：{{ bigSum }}</h1>
    <h3>我在{{ school }}学习{{ subject }}</h3>
    <h3 style="color: red">Person组件的总人数是：{{ personList.length }}</h3>
    <select name="" id="" v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="addition(num)">+</button>
    <button @click="subtraction(num)">-</button>
    <button @click="oddNumberAddition(num)">当前求和为奇数再加</button>
    <button @click="postponeAddition(num)">延迟加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "CountCom",
  data() {
    return {
      num: 1, // 当前选择的数
    };
  },
  computed: {
    /* 
    在 mapState 中使用 "countOptions" 是因为在 Vuex store 中为 countOptions 模块启用了命名空间 (namespaced: true)。

    如果 Vuex 模块启用了 namespaced: true，在使用 mapMutations 时就必须指定命名空间名称。
    */
    ...mapState("countOptions", ["sum", "school", "subject"]),
    ...mapState("personOptions", ["personList"]),

    ...mapGetters("countOptions", ["bigSum"]),
  },
  methods: {
    ...mapMutations("countOptions", {
      addition: "ADDITION",
      subtraction: "SUBTRACTION",
    }),
    ...mapActions("countOptions", {
      oddNumberAddition: "oddNumberAddition",
      postponeAddition: "postponeAddition",
    }),
  },
  beforeMount() {
    console.log(this);
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>