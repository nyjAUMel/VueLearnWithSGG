<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 这里就不在需要遍历数据了 -->
    <!-- <ul>
      <li v-for="(ld, index) in listData" :key="index">{{ ld }}</li>
    </ul> -->

    <!-- 定义一个插槽 -->
    <slot>当不传值时，显示该默认值</slot>
  </div>
</template>

<script>
export default {
  name: "CategoryCom",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
</style>