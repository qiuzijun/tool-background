<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane
      :tab="item.tab"
      v-for="item in tabs"
      :key="item.key"
      :forceRender="item.forceRender"
    >
      <slot :name="item.name"></slot>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import { defineComponent, ref } from "vue";
import { Tabs } from "ant-design-vue";
export default defineComponent({
  props: {
    // tabs渲染列表
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    [Tabs.name]: Tabs,
    [Tabs.TabPane.name]: Tabs.TabPane,
  },
  setup() {
    // tabs默认选中的项
    const activeKey = ref("1");
    return {
      activeKey,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>