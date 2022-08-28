const { defineConfig } = require("@vue/cli-service");
const path = require("path");
let baseURL; //环境地址
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:4000"; //本地环境
} else {
  baseURL = "http://localhost:9090"; //生产环境
}
module.exports = defineConfig({
  transpileDependencies: true,
  // 跨域配置
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      //配置跨域
      "/api": {
        target: baseURL,
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  // 引入全局less样式
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.join(__dirname, "./src/assets/styles/variables.less"),
        path.join(__dirname, "./src/assets/styles/antd.less"),
      ],
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#ff1b1b",
            "link-color": "#ff1b1b",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
});
