<template>
  <div class="container">
    <!-- 
    为什么要用作用域插槽？
      作用域插槽允许子组件向父组件传递数据，让父组件在使用插槽时可以访问子组件的数据
     -->
    <Category title="游戏">
      <!-- 
      这里要接受插槽传来的内容了。
      要求外部必须是一个template，然后再写一个scope属性，值名随意。该值是一个对象
      -->
      <template scope="dj">
        <ul>
          <li v-for="(game, index) in dj.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Category>

    <!-- 
      解构赋值的方式
        // 传统写法
          const person = { name: '张三', age: 25 };
          const name = person.name;
          const age = person.age;
          // 解构赋值写法
          const { name, age } = person;

      slot-scope是新的写法，scope已经在2.5版本后弃用
       -->
    <Category title="游戏">
      <template scope="{ games }">
        <ol>
          <li style="color: blue" v-for="(game, index) in games" :key="index">
            {{ game }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 
        slot-scope是新的写法，scope已经在2.5版本后弃用
       -->
      <template slot-scope="{ games }">
        <h3 v-for="(game, index) in games" :key="index">{{ game }}</h3>
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