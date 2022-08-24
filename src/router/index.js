import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import {
  getToken
} from "@/utils/tool";
import cinema from "./menu";//导航菜单
const Login = () => import("@/views/Login/index.vue");
const Layout = () => import("@/layout/index.vue");


const routes = [{
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
    redirect: '/home',
    component: Layout,
    children: cinema
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