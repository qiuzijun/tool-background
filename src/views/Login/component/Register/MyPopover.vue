<template>
  <div class="content">
    <p
      :style="{
        color: active == 1 ? '#ff0000' : active == 2 ? '#ff7e05' : '#52c41a',
      }"
    >
      强度：{{ active == 1 ? "太短" : active == 2 ? "中等" : "强" }}
    </p>
    <a-progress
      :percent="active == 1 ? 30 : active == 2 ? 60 : 100"
      :show-info="false"
      :stroke-color="
        active == 1 ? '#ff0000' : active == 2 ? '#ff7e05' : '#52c41a'
      "
    />
    <p>请输入密码长度为8到12位字符。请不要使用容易被猜到的密码</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { Progress } from "ant-design-vue";
export default defineComponent({
  components: {
    [Progress.name]: Progress,
  },
  props: {
    active: {
      type: Number,
      default: 1,
    },
  },
  setup() {},
});
</script>

<style lang="less" scoped>
.content {
  width: 300px;
  color: #999;
  p {
    margin-bottom: 0px !important;
  }
}
</style>