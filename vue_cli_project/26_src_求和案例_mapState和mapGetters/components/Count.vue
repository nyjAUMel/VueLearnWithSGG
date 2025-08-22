<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为为：{{ bigSum }}</h1>
    <h3>我在{{ school }}学习{{ subject }}</h3>
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
import { mapState, mapGetters } from "vuex";
export default {
  name: "CountCom",
  data() {
    return {
      num: 1, // 当前选择的数
    };
  },
  computed: {
    // 不用mapState的话手写也可以，就是太麻烦了
    /* he() {
      return this.$store.state.sum;
    },
    xuexiao() {
      return this.$store.state.school;
    },
    xueke() {
      return this.$store.state.subject;
    }, */

    /* 
    不使用 mapState 时，需要通过 this.$store.state.xxx 来访问状态
    使用 mapState 可以将 store 中的状态映射为组件的计算属性，使代码更简洁

    ...:ES6语法，作用是将函数返回的键值陈列到当前对象
     */
    /* 注意：正常对象key和value相同时可以简写成一个，但这种情况前提value是变量而非字符串，如果是字符串是不能简写的，如：subject: "subject"。
     */
    // 对象写法
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    // 数组写法(这就表示从state里取的值和在计算属性里的值名字一样)
    ...mapState(["sum", "school", "subject"]),

    /* *****************************分割线****************************** */
    // ...mapGetters({ bigSum: "bigSum" }),
    ...mapGetters(["bigSum"]),
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