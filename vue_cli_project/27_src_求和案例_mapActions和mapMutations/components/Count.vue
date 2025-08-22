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
    ...mapState(["sum", "school", "subject"]),

    /* *****************************分割线****************************** */

    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 手写也可以，但是很麻烦
    /* addition() {
      this.$store.commit("JIA", this.num);
    },
    subtraction() {
      this.$store.commit("JIAN", this.num);
    }, */

    /* 
    mapMutations 和 mapActions 的出现目的和 mapState、mapGetters 一样，都是为了简化代码，让我们写代码更省事。
    mapMutations 和 mapActions它们两个会生成函数，mapState、mapGetters会生成计算属性。

    mapMutations 和 mapActions 的作用
      它们主要是为了简化方法调用，避免重复写 this.$store.commit() 和 this.$store.dispatch()。

    这里记得得传值(在模板语法里)，模板语法里直接写addition没有小括号写参数，vue会自动传一个鼠标事件。
    详细解释：
        自己写的是：addition() {
                      this.$store.commit("JIA", this.num);
                   }
        这里值生成的是：addition(value) {
                      this.$store.commit("JIA", value);
                   }
    它不知道穿的参数是谁，所以这里得手动传参。
    */

    // 借助mapMutations生成对应的方法，生成的方法中会调用commit去联系Mutations（对象写法）
    ...mapMutations({ addition: "JIA", subtraction: "JIAN" }),
    // 数组写法(名字一样才行，这里没改)
    // ...mapMutations(["JIA", "JIAN"]),
    /* *****************************分割线****************************** */

    /* oddNumberAddition() {
      this.$store.dispatch("jiaOdd", this.num);
    },
    postponeAddition() {
      this.$store.dispatch("jiaPostpone", this.num);
    }, */

    // 借助mapActions生成对应的方法，生成的方法中会调用dispatch去联系actions（对象写法）
    ...mapActions({
      oddNumberAddition: "jiaOdd",
      postponeAddition: "jiaPostpone",
    }),
    // 数组写法(同理这里也得改名字)
    // ...mapActions(["jiaOdd", "jiaPostpone"]),
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