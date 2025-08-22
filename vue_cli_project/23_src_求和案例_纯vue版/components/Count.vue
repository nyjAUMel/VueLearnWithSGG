<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
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
      sum: 0, // 当前求和
      num: 1, // 当前选择的数
    };
  },
  methods: {
    addition() {
      this.sum += this.num;
    },
    subtraction() {
      this.sum -= this.num;
    },
    oddNumberAddition() {
      if (this.sum % 2) {
        this.sum += this.num;
      }
    },
    postponeAddition() {
      setTimeout(() => {
        this.sum += this.num;
      }, 500);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>