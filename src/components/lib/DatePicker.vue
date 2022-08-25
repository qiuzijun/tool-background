<template>
  <div>
    <span v-if="text" class="t-text">{{ text }}</span>
    <slot name="text" v-else></slot>
    <a-date-picker
      v-model:value="value"
      :placeholder="placeholder"
      @change="handleChange"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import dayjs from "dayjs";
import { DatePicker } from "ant-design-vue";
export default defineComponent({
  props: {
    // 输入文字描述
    placeholder: {
      type: String,
      default: "",
    },
    // 左侧内容
    text: {
      type: String,
      default: "",
    },
  },
  name: "DatePicker",
  components: {
    [DatePicker.name]: DatePicker,
  },
  setup(props, { emit }) {
    const value = ref(""); //日期数据
    // 日期面板变化时的回调
    const handleChange = (e) => {
      emit("onTime", dayjs(e).format("YYYY-MM-DD"));
    };
    return {
      value,
      handleChange,
    };
  },
});
</script>
<style lang="less" scoped>
.t-text {
  font-size: 15px;
  font-weight: 500;
  margin-right: 10px;
}
</style>
