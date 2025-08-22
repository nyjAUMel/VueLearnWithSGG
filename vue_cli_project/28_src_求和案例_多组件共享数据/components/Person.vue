<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: skyblue">Count组件的和是：{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">
        {{ person.id }} -- {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "PersonCom",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["personList", "sum"]),
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      console.log(personObj);
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>