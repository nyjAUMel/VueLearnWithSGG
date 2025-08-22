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
    ...mapState(["sum", "school", "subject", "personList"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    ...mapMutations({ addition: "JIA", subtraction: "JIAN" }),
    ...mapActions({
      oddNumberAddition: "jiaOdd",
      postponeAddition: "jiaPostpone",
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