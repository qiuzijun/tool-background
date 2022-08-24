<template>
  <div class="stack">
    <TransitionGroup name="list" tag="ul">
      <li v-for="item in store.stack" :key="item.name">
        <RouterLink
          :to="{ name: item.name }"
          :class="item.icon ? '' : 'active'"
        >
          {{ item.meta.title }}
          <i
            class="iconfont icon-closel"
            v-show="item.icon"
            @click.stop.prevent="removeRoute(item.name)"
          ></i>
        </RouterLink>
      </li>
    </TransitionGroup>
  </div>
</template>
<script setup>
import { useStack } from "@/store/modules/stack";
import { useRouter } from "vue-router";
const store = useStack();
const router = useRouter();
const removeRoute = (name) => {
  const Index = store.stack.findIndex((data) => {
    return data.name == name;
  });
  store.removeStack(name);
  router.push({
    name: `${store.stack[Index - 1].name}`,
  });
  // state.route = state.route.filter((data) => {
  //   return data.name !== name;
  // });
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
