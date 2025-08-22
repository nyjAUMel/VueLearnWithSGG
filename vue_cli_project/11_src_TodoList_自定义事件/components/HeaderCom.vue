<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
// 引入nanoid
import { nanoid } from "nanoid";
export default {
  name: "HeaderCom",
  methods: {
    /* 
    e 是事件对象（event），它能获取到本次键盘事件的所有信息。常用的有：
      e.target：触发事件的元素（这里就是 input 输入框）
      e.target.value：输入框当前的内容
      e.key：按下的键名（比如 "Enter"）
      e.type：事件类型（比如 "keyup"）
      e.ctrlKey、e.shiftKey 等：是否按下了 Ctrl、Shift 等辅助键
    */
    add(e) {
      if (!e.target.value) {
        return;
      }
      // 将用户的输入包装成一个todo对象
      const todoObj = {
        id: nanoid(),
        title: e.target.value.trim(),
        done: false,
      };
      // console.dir(this.$emit);
      this.$emit("addTodo", todoObj);
      // 添加完后清空输入框(这里直接操作了DOM，也可以整一个双向数据绑定)
      e.target.value = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>