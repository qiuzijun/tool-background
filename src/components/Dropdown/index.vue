<template>
  <a-dropdown>
    <slot name="docment"></slot>
    <template #overlay>
      <a-menu>
        <!-- 暂时这样，后面上配置文件 -->
        <a-menu-item>
          <UserOutlined />
          <a href="javascript:;">个人信息</a>
        </a-menu-item>
        <a-menu-item @click="outLogin">
          <PoweroffOutlined />
          <a href="javascript:;">退出登录</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script>
import { defineComponent } from "vue";
import { PoweroffOutlined, UserOutlined } from "@ant-design/icons-vue";
import { Dropdown, Menu, message } from "ant-design-vue";
import { removeToken } from "@/utils/tool";
import { useUser } from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  components: {
    UserOutlined,
    PoweroffOutlined,
    [Dropdown.name]: Dropdown,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
  },
  setup() {
    const store = useUser();
    const router = useRouter();
    const route = useRoute();
    // 退出登录
    const outLogin = () => {
      removeToken();
      store.$patch({
        userInfo: {},
        token: "",
      });
      message.success("退出成功");
      router.replace({
        name: "Login",
        query: {
          redirect: route.fullPath,
        },
      });
    };
    return {
      outLogin,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>