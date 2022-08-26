<template>
  <a-layout-content
    :style="{
      margin: '24px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
    }"
  >
    <header>
      <!-- 发布时间 -->
      <DatePicker placeholder="发布时间" text="发布时间:" class="margin" />
      <!-- 更新时间 -->
      <DatePicker placeholder="更新时间" text="更新时间:" class="margin" />
      <!-- 类型 -->
      <Select placeholder="请输入类型" text="类型:" class="margin" />
      <!-- 查询 -->
      <a-button type="primary" class="margin">查询</a-button>
      <!-- 添加 - 抽屉按钮 -->
      <DrawerButton btnText="添加" modalTitle="添加开发列表" :footerBtn="true">
        <template #content>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </template>
      </DrawerButton>
    </header>
  </a-layout-content>
</template>
<script>
import { defineComponent } from "vue";
import { Layout, Button } from "ant-design-vue";
export default defineComponent({
  components: {
    [Layout.Content.name]: Layout.Content,
    [Button.name]: Button,
  },
  setup() {},
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>