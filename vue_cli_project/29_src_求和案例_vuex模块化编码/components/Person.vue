<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: skyblue">Count组件的和是：{{ sum }}</h3>
    <h3>列表中第一个第一个人的名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addPersonNameZhang">添加一个姓张的人</button>
    <button @click="addPersonServer">添加一个人名为随机的人</button>
    <ul>
      <li v-for="person in personList" :key="person.id">
        {{ person.id }} -- {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "PersonCom",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    sum() {
      return this.$store.state.countOptions.sum;
    },
    personList() {
      return this.$store.state.personOptions.personList;
    },
    firstPersonName() {
      /* 
      getters里取东西和state不一样，state可以.state.countOptions.sum;
        但是getters直接是$store.getters.personOptions/firstPersonName。但是取对象值用了点就不能用斜杠了，所以改成["personOptions/firstPersonName"]
      */
      return this.$store.getters["personOptions/firstPersonName"];
    },
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personOptions/ADD_PERSON", personObj);
      this.name = "";
    },
    addPersonNameZhang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personOptions/addPersonZhang", personObj);
      this.name = "";
    },
    addPersonServer() {
      this.$store.dispatch("personOptions/addPersonServer");
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>