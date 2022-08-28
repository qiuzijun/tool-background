<template>
  <a-layout-header style="background: #fff; padding: 0" class="header">
    <div class="header-top">
      <menu-unfold-outlined
        v-if="collapsed"
        class="trigger"
        @click="() => (collapsed = !collapsed)"
      />
      <menu-fold-outlined
        v-else
        class="trigger"
        @click="() => (collapsed = !collapsed)"
      />
      <Dropdown>
        <template #docment>
          <div class="avater">
            <a-avatar src="https://joeschmoe.io/api/v1/random" />
            <span>{{ store.userInfo.account }}</span>
          </div>
        </template>
      </Dropdown>
    </div>
    <!-- 路由栈 -->
    <RouteStack />
  </a-layout-header>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { Layout, Avatar } from "ant-design-vue";
import Dropdown from "@/components/Dropdown/index.vue";
import RouteStack from "@/components/RouteStack/index.vue";
import { useUser } from "@/store/modules/user";
export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    [Avatar.name]: Avatar,
    [Layout.Header.name]: Layout.Header,
    Dropdown,
    RouteStack,
  },
  setup(props, { emit }) {
    const collapsed = ref(false);
    const store = useUser();
    //监听collapsed变化, 后传递值
    watch(
      collapsed,
      (newValue) => {
        emit("setColl", newValue);
      },
      {
        immediate: true,
      }
    );
    return {
      collapsed,
      store,
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>