<template>
  <!-- 添加 -->
  <a-button type="primary" @click="visible = true">{{ btnText }}</a-button>
  <!-- 添加弹框 -->
  <a-modal v-model:visible="visible" :title="modalTitle" @ok="handleOk">
    <slot name="content"></slot>
  </a-modal>
</template>
<script>
import { defineComponent, ref } from "vue";
import { Button, Modal } from "ant-design-vue";
export default defineComponent({
  name: "ModalButton",
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
    [Modal.name]: Modal,
  },
  setup() {
    const handleOk = () => {};
    return {
      visible: ref(false),
      handleOk,
    };
  },
});
</script>
