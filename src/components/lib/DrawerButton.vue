<template>
  <a-button type="primary" @click="visible = true">{{ btnText }}</a-button>
  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    style="color: red"
    :title="modalTitle"
    placement="right"
  >
    <slot name="content"></slot>
  </a-drawer>
</template>
<script>
import { defineComponent, ref } from "vue";
import { Button, Drawer } from "ant-design-vue";
export default defineComponent({
  name: "DrawerButton",
  props: {
    // 按钮文字
    btnText: {
      type: String,
      deafault: "",
    },
    // 弹框标题
    modalTitle: {
      type: String,
      deafault: "",
    },
  },
  components: {
    [Button.name]: Button,
    [Drawer.name]: Drawer,
  },
  setup() {
    const visible = ref(false);

    return {
      visible,
    };
  },
});
</script>