<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "SchoolComponent",
  props: ["receiveSchoolName"],
  data() {
    return {
      name: "XAAU",
      address: "西安",
    };
  },
  mounted() {
    // 这个回调能收到两个参数，第一个就是消息名。所以第二个才是真正传过来的的参数
    // 这里写成箭头函数才能是组件的实例对象。或者在methods里定义方法
    this.pubId = pubsub.subscribe("hello", (messageName, data) => {
      console.log(this);
      console.log("有人发布了：" + messageName + "。消息，参数是：" + data);
    });
  },
  beforeDestroy() {
    // 消息订阅会返回一个id，用这个id解绑
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
  margin-top: 30px;
}
</style>