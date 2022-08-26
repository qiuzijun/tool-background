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
    <div class="footer" v-if="footerBtn">
      <a-button class="marginl-right">取消</a-button>
      <a-button type="primary" class="marginl-right">确认</a-button>
    </div>
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
    // 底部 取消、确认按钮
    footerBtn: {
      type: Boolean,
      deafault: false,
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
<style lang="less" scoped>
.footer {
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .marginl-left {
    margin-left: 20px;
  }
  .marginl-right {
    margin-right: 20px;
  }
}
</style>