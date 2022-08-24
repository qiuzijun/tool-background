<template>
  <a-layout-sider
    v-model:collapsed="modelValue"
    style="background: #fff"
    :trigger="null"
    collapsible
  >
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
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
    const selectedKeys = ref(["home"]); //左侧导航栏选中项
    const router = useRouter();
    const route = useRoute();
    const routerlink = (item) => {
      router.push({
        name: `${item.name}`,
      });
    };
    // 监听路由变化,导航栏选中定位
    watch(
      route,
      (newValue) => {
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
      routerlink,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>