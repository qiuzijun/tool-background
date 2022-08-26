<template>
  <a-button type="primary" @click="visible = true">{{ btnText }}</a-button>
  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    style="color: red"
    :title="modalTitle"
    placement="right"
    @close="close"
  >
    <slot name="content"></slot>
    <div class="footer" v-if="footerBtn">
      <a-button class="marginl-right">取消</a-button>
      <a-button type="primary" class="marginl-right">确认</a-button>
    </div>
  </a-drawer>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
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
    // 外部控制弹框显示、隐藏
    isShow: {
      type: Boolean,
      deafault: false,
    },
  },
  components: {
    [Button.name]: Button,
    [Drawer.name]: Drawer,
  },
  setup(props, { emit }) {
    const visible = ref(false);
    watch(
      () => props.isShow,
      (value) => {
        if (value) visible.value = value;
      }
    );
    // 弹窗关闭事件
    const close = () => {
      emit("update:isShow", false);
    };
    return {
      visible,
      close,
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