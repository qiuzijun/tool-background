<template>
  <ul id="drawer-dev">
    <li><label>主图:</label> <Upload :exImg="data.img" /></li>
    <li><label>发布时间:</label> <DatePicker placeholder="发布时间" /></li>
    <li><label>更新时间:</label> <DatePicker placeholder="更新时间" /></li>
    <li>
      <label>类型:</label>
      <Select placeholder="请输入类型" />
    </li>
  </ul>
</template>
<script setup>
import { defineProps, watch, ref } from "vue";
const props = defineProps({
  modifyDate: Object,
});
//
const data = ref({
  address: "https://juejin.cn/",
  describe: "一个帮助开发者成长的社区",
  img: "",
  name: "掘金",
  releaseTime: "2022-08-01",
  type: "技术社区",
  updateTime: "2022-08-01",
});
//监听修改时传入的行数据
watch(
  () => props.modifyDate,
  (value) => {
    data.value = value;
  },
  {
    immediate: true,
  }
);
</script>
<style lang="less" scoped>
// 抽屉内样式
#drawer-dev {
  width: 100%;

  li {
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;

    label {
      width: 80px;
    }
  }
}
</style>
