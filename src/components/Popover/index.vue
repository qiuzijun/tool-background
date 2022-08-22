<template>
  <a-popover placement="bottomRight" trigger="hover">
    <template #content>
      <slot name="content"></slot>
    </template>
    <slot name="docment"></slot>
  </a-popover>
</template>
<script>
import { defineComponent } from "vue";
import { Popover } from "ant-design-vue";
export default defineComponent({
  components: {
    [Popover.name]: Popover,
  },
  setup() {},
});
</script>

<style lang="less" scoped>
</style>