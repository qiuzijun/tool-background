import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "@/utils/tool";
const Login = () => import("@/views/Login/index.vue");
const Layout = () => import("@/layout/index.vue");
const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "登录",
    },
  },
  {
    path: "/",
    name: "layout",
    component: Layout,
    meta: {
      title: "首页",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !getToken())
    next({
      name: "Login",
      query: {
        redirect: to.fullPath,
      },
    });
  else next();
});
export default router;
