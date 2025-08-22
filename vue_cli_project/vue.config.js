const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器（方式1）
  /* devServer: {
    proxy: "http://localhost:5000"
  } */

  // 开启代理服务器（方式2）
  devServer: {
    proxy: {
      // 这个配置项是前缀的意思，在请求路径加上前缀（在三源后加上），然后在写正式的路径
      // 表示匹配所有以/atguigu开头的路径
      '/atguigu': {
        target: "http://localhost:5000", //代理目标的基础路径
        /* 
        pathRewrite 配置项的作用是重写请求路径，具体解释如下：
          1. 路径重写功能：
            当前端发送以 /atguigu 开头的请求时（如 /atguigu/students）
            pathRewrite: { '^/atguigu': '' } 会将路径中的 /atguigu 前缀移除
            实际转发到后端服务器的路径变为 /students
          2. 解决路径不匹配问题：
            前端为了触发代理，需要在请求中包含 /atguigu 前缀
            但后端服务器可能并不需要或识别这个前缀
            通过路径重写，可以保持前端代码的统一性，同时确保发送给后端的请求路径正确
        */
        pathRewrite: { '^/atguigu': '' },
        ws: true, // 用于支持websocket
        changeOrigin: true // 用于控制请求头中的host值
      },
      '/demo': {
        target: "http://localhost:5001",
        pathRewrite: { '^/demo': '' },
        ws: true, // 用于支持websocket
        changeOrigin: true // 用于控制请求头中的host值
      },
    }
  }
})
