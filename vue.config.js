const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/test-html/dist/" : "/",
  // devServer: {
  //   proxy: {
  //     "/": {
  //       target: "",
  //       // secure: true,
  //       changeOrigin: true,
  //       ws: false,
  //       changeOrigin: true,
  //     }
  //   }
  // },
})
