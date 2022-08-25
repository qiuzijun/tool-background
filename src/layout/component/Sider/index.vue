<template>
  <a-layout-sider
    v-model:collapsed="modelValue"
    style="background: #fff"
    :trigger="null"
    collapsible
  >
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      :openKeys="openKeys"
      @openChange="openChange"
      theme="light"
      mode="inline"
    >
      <template v-for="item in menu" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.name" @click="routerlink(item)">
            <template #icon>
              <i :class="`iconfont ${item.meta.icon}`"></i>
            </template>
            {{ item.meta.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <!-- 递归组件 -->
          <SubMenu :key="item.name" :menu-info="item" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PieChartOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref, watch } from "vue";
import { Layout, Menu } from "ant-design-vue";
import { useRouter, useRoute } from "vue-router";
import { useStack } from "@/store/modules/stack";
import menu from "@/router/menu";
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    PieChartOutlined,
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
    const selectedKeys = ref(["home"]); //左侧导航栏默认选中项
    const openKeys = ref([""]); //左侧导航栏当前选中项
    const router = useRouter();
    const route = useRoute();
    const store = useStack();
    const routerlink = (item) => {
      router.push({
        name: `${item.name}`,
      });
    };
    const openChange = (keys) => {
      if (keys.length !== 0) {
        openKeys.value = [keys[1]];
      } else {
        openKeys.value = [""];
      }
    };
    // 监听路由变化,导航栏选中定位
    watch(
      route,
      (newValue) => {
        store.addStack(newValue);
        selectedKeys.value[0] = newValue.name;
      },
      {
        deep: true,
        immediate: true,
      }
    );
    return {
      menu,
      selectedKeys,
      openKeys,
      routerlink,
      openChange,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>