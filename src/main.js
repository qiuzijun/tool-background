import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
import "@/router/index";
import { setupStore } from "./store/index";
setupStore(app);
// 清除默认样式
import "@/assets/styles/comment.less";
import './assets/icon/iconfont.css';
app.use(router).mount("#app");
