// 个人中心路由信息
const Setup = () => import("@/views/Setup/index.vue");
const user = [{
  path: "personal",
  name: 'personal',
  redirect: 'personal/setup',
  meta: {
    title: "个人",
    icon: 'icon-geren'
  },
  children: [{
    path: 'setup',
    name: 'setup',
    component: Setup,
    meta: {
      title: "个人设置",
      icon: 'icon-gerenshezhi'
    },
  }, ]
}]
export default user;