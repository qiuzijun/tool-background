<template>
  <a-layout-content
    :style="{
      margin: '24px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
    }"
  >
    个人设置
  </a-layout-content>
</template>
<script>
import { defineComponent } from "vue";
import { Layout } from "ant-design-vue";
export default defineComponent({
  components: {
    [Layout.Content.name]: Layout.Content,
  },
  setup() {},
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>