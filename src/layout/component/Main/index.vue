<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <transition name="router" mode="out-in">
        <component :is="Component" />
      </transition>
    </keep-alive>
  </router-view>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>