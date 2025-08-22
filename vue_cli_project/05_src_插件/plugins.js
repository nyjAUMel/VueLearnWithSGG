export default {
  // 插件需要实现一个 install 方法，或者本身就是一个函数：
  // 接受的参数就是vm实例的缔造者：Vue构造函数
  install(Vue) {

    // 定义自定义指令
    Vue.directive('fbind', {
      bind(element, binding) {
        element.innerText = binding.value
      },
      update(element, binding) {
        element.innerText = binding.value
      }
    })

    // 定义过滤器
    Vue.filter('sliceStr', function (str) {
      return str.slice(0, 4)
    })

    // 定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 100
        }
      }
    })
  }
}

/* 
// 方式一：对象形式
const MyPlugin = {
  install(Vue, options) {
    // 插件代码
  }
}

// 方式二：函数形式
function MyPlugin(Vue, options) {
  // 插件代码
}
*/