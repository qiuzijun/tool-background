<template>
  <a-layout-header style="background: #fff; padding: 0">
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
  </a-layout-header>
</template>
<script>
import { defineComponent, ref } from "vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { Layout } from "ant-design-vue";
import { watch } from "vue-demi";
export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    [Layout.Header.name]: Layout.Header,
  },
  setup(props, { emit }) {
    const collapsed = ref(false);
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
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>