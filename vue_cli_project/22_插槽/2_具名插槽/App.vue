<template>
  <div class="container">
    <!-- 
    为什么要用插槽？
      插槽(slot)能让父组件自定义传入子组件的内容和布局，使子组件更灵活和复用。也就是说，你不必在子组件中固定写死内容，而是让父组件决定具体展示什么，从而实现组件解耦。
     -->
    <Category title="电影">
      <img
        slot="center"
        src="https://ts2.tc.mm.bing.net/th/id/OSK.4f5aee949d17609d7ba455f9d30160ca?w=328&h=440&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1"
        alt=""
      />
      <!-- 相同名字的slot不会覆盖而是追加 -->
      <a slot="footer" href="http://www.baidu.com">更多川菜</a>
      <a slot="footer" href="http://www.baidu.com">更多湘菜</a>
    </Category>

    <Category title="游戏">
      <!-- 
      优点：父组件可以自定义传入的内容和布局，子组件只负责提供框架或通用样式，从而提高组件的复用性。
       -->
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div class="game-foot" slot="footer">
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="音乐家"
      ><video
        slot="center"
        controls
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      ></video>
      <!-- 只有template标签可以这么写slot -->
      <template v-slot:footer>
        <div class="music-foot">
          <a href="http://www.baidu.com">经典</a>
          <a href="http://www.baidu.com">热门</a>
          <a href="http://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
.container,
.game-foot,
.music-foot {
  display: flex;
  justify-content: space-around;
}
/* 虽然 DOM 最终在 Category 中，但内容本身还是由 App 编译的，因此其样式规则也来自 App。 */
video {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>