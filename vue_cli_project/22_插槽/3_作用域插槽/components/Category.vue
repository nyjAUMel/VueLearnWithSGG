<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 
    将games传给这个插槽的使用者
    谁往slot里塞结构，这个games就传给了谁
     -->
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "CategoryCom",
  props: ["title"],
  data() {
    return {
      games: ["巫师3：狂猎", "塞尔达传说", "最终幻想"],
    };
  },
};
</script>

<style scoped>
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