import cinema from './modules/cinema'
import user from './modules/user'
const Home = () => import("@/views/Home/index.vue");
// 导航菜单
const menu = [{
    path: 'home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      icon: 'icon-shouye'
    }
  },
  ...cinema, //频道
  ...user //个人
]

export default menu;