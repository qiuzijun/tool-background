<template>
  <a-layout class="layout">
    <!-- 侧边栏 -->
    <Sider v-model="collapsed" />
    <a-layout>
      <!-- 头部 -->
      <Header @setColl="setColl" />
      <!-- 主体内容区 -->
      <Main />
    </a-layout>
  </a-layout>
</template>
<script>
import { Layout } from "ant-design-vue";
import { defineComponent, ref } from "vue";
import Sider from "./component/Sider/index.vue";
import Header from "./component/Header/index.vue";
import Main from "./component/Main/index.vue";
export default defineComponent({
  components: {
    Sider,
    Header,
    Main,
    [Layout.name]: Layout,
  },

  setup() {
    const collapsed = ref(false);
    // 设置collapsed值 折叠Sider栏
    const setColl = (e) => {
      collapsed.value = e;
    };
    return {
      collapsed,
      setColl,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>