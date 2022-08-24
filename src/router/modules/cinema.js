// 电影频道路由信息
const Movie = () => import("@/views/Movie/index.vue");
const Comic = () => import("@/views/Comic/index.vue");
const Development = () => import("@/views/Development/index.vue");
const cinema = [{
  path: "cinema",
  name: 'cinema',
  redirect: 'cinema/movie',
  meta: {
    title: "频道",
    icon: 'icon-pindao'
  },
  children: [{
      path: 'movie',
      name: 'movie',
      component: Movie,
      meta: {
        title: "电影频道",
        icon: 'icon-dianying'
      },
    },
    {
      path: 'comic',
      name: 'comic',
      component: Comic,
      meta: {
        title: "动漫频道",
        icon: 'icon-dongman'
      },
    },
    {
      path: 'development',
      name: 'development',
      component: Development,
      meta: {
        title: "开发频道",
        icon: 'icon-kaifa'
      },
    },
  ]
}]
export default cinema;