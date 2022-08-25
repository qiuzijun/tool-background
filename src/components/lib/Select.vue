<template>
  <div>
    <span class="t-text" v-if="text">{{ text }}</span>
    <slot name="text" v-else></slot>
    <a-select
      v-model:value="value"
      :options="options"
      :mode="mode"
      size="middle"
      :placeholder="placeholder"
      @change="handleChange"
      style="width: 200px"
      v-if="mode"
    ></a-select>
    <a-select
      v-model:value="value"
      :options="options"
      size="middle"
      :placeholder="placeholder"
      @change="handleChange"
      style="width: 200px"
      v-else
    ></a-select>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { Select } from "ant-design-vue";
export default defineComponent({
  name: "Select",
  props: {
    // 左侧内容
    text: {
      type: String,
      default: "",
    },
    // 描述文字
    placeholder: {
      type: String,
      default: "",
    },
    // 模式
    mode: {
      type: String,
      default: "",
    },
  },
  components: {
    [Select.name]: Select,
  },
  setup(props, { emit }) {
    const value = ref([]); //选中数据
    const options = ref([
      //选择数据
      {
        value: "a1",
      },
      {
        value: "a2",
      },
    ]);
    // 选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数
    const handleChange = (e) => {
      emit("onChange", e);
    };
    return {
      value,
      options,
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