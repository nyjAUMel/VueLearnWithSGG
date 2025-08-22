<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <select name="" id="" v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="oddNumberAddition">当前求和为奇数再加</button>
    <button @click="postponeAddition">延迟加</button>
  </div>
</template>

<script>
export default {
  name: "CountCom",
  data() {
    return {
      num: 1, // 当前选择的数
    };
  },
  methods: {
    addition() {
      this.$store.commit("JIA", this.num);
    },
    subtraction() {
      this.$store.commit("JIAN", this.num);
    },
    oddNumberAddition() {
      this.$store.dispatch("jiaOdd", this.num);
    },
    postponeAddition() {
      this.$store.dispatch("jiaPostpone", this.num);
    },
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