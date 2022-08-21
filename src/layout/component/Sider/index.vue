<template>
  <a-layout-sider
    v-model:collapsed="modelValue"
    style="background: #fff"
    :trigger="null"
    collapsible
  >
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import { Layout, Menu } from "ant-design-vue";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    [Layout.Sider.name]: Layout.Sider,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
  },
  props: {
    // 控制Sider栏伸缩
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      selectedKeys: ref(["1"]),
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>