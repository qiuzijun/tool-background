<template>
  <div class="stack">
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in route" :key="item.path">
        <a href="javascript:;">
          {{ item.mate.title }}
          <i class="iconfont icon-closel" @click="removeRoute(item.name)"></i>
        </a>
      </li>
    </TransitionGroup>
  </div>
</template>
<script setup>
import { reactive, toRefs } from "vue";

const state = reactive({
  route: [
    {
      path: "/a",
      name: "a",
      mate: {
        title: "电影",
      },
    },
    {
      path: "/b",
      name: "b",
      mate: {
        title: "漫画",
      },
    },
    {
      path: "/c",
      name: "c",
      mate: {
        title: "程序员",
      },
    },
    {
      path: "/d",
      name: "d",
      mate: {
        title: "UI",
      },
    },
  ],
});
const removeRoute = (name) => {
  state.route = state.route.filter((data) => {
    return data.name !== name;
  });
};
const { route } = toRefs(state);
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
