<template>
  <div class="container">
    <!-- 
    为什么要用插槽？
      插槽(slot)能让父组件自定义传入子组件的内容和布局，使子组件更灵活和复用。也就是说，你不必在子组件中固定写死内容，而是让父组件决定具体展示什么，从而实现组件解耦。
     -->
    <Category title="电影">
      <img
        src="https://ts2.tc.mm.bing.net/th/id/OSK.4f5aee949d17609d7ba455f9d30160ca?w=328&h=440&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1"
        alt=""
      />
    </Category>
    <Category title="游戏">
      <!-- 
      优点：父组件可以自定义传入的内容和布局，子组件只负责提供框架或通用样式，从而提高组件的复用性。
       -->
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </Category>
    <Category title="音乐家"
      ><video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "AppComponent",
  components: {
    Category,
  },
  data() {
    return {
      movies: ["霸王别姬", "无间道", "大话西游"],
      games: ["巫师3：狂猎", "塞尔达传说", "最终幻想"],
      musicians: ["周杰伦", "林俊杰", "五月天"],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
/* 虽然 DOM 最终在 Category 中，但内容本身还是由 App 编译的，因此其样式规则也来自 App。 */
video {
  width: 100%;
}
</style>