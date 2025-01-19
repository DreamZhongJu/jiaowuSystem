const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  // 开发服务器配置
  devServer: {
    port: 3001, // 设置开发服务器端口为 3001
    proxy: {
      "/user": {
        target: "http://localhost:8080", // 代理目标地址
        changeOrigin: true, // 更改请求头中的来源
      },
    },
  },
  // Webpack 配置
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
})