<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot name="center">当不传值时，显示该默认值</slot>
    <slot name="footer">当不传值时，显示该默认值</slot>
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
  height: 500px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
</style>