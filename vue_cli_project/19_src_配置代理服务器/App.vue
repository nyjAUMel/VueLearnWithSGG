<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AppComponent",
  methods: {
    getStudents() {
      /*
       public文件夹（该文件夹相当于8080的根路径）里有的文件不会走代理
       测试的方法，在public文件夹里新建个students文件
        注意这里得把代理atguigu删掉。删掉并不意味着不走代理，而是不选择代理。如果配置文件里只写了devServer: {
          proxy: "http://localhost:5000"
        }
        那么就会默认走这个代理。
       */
      axios.get("http://localhost:8080/atguigu/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error);
        }
      );
    },
  },
};
</script>