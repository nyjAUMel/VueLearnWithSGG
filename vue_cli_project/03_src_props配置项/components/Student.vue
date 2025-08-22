<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
  </div>
</template>

<script>
export default {
  name: "SchoolComponent",
  data() {
    return {
      msg: "我是天才",
    };
  },
  /* 
  props 是 Vue 组件间传递数据的重要方式，用于接收来自父组件的数据
  在组件中通过 props 选项声明需要接收的数据属性
  */
  // 数组方式（基础用法）如果父组件传入的年龄是字符型就不太合适
  // props: ["name", "sex", "age"],

  // 对象方式（详细配置）这种更加详细的配置，可以限制传入的数据的类型
  /* props: {
    name: String,
    age: Number,
    sex: String,
  }, */

  // 对象方式（更加详细的配置）这种可以添加默认值、是否必要、类型
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99, // 默认值
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>
