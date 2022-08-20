<template>
  <a-form
    ref="formRef"
    name="custom-validation"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item has-feedback name="mobile">
      <a-input
        v-model:value="formState.mobile"
        type="text"
        size="large"
        autocomplete="off"
        placeholder="手机号"
      >
        <template #prefix
          ><MailOutlined style="color: rgba(0, 0, 0, 0.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item has-feedback name="code" class="from-code">
      <a-input
        v-model:value="formState.code"
        type="text"
        size="large"
        autocomplete="off"
        placeholder="密码"
      >
        <template #prefix
          ><MobileOutlined style="color: rgba(0, 0, 0, 0.25)" /></template
      ></a-input>
      <a-button class="code-btn" size="large" @click="active = 2"
        >发送验证码</a-button
      >
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit" size="large" class="submit"
        >登录</a-button
      >
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import { Form, Button, Input } from "ant-design-vue";
import { MailOutlined, MobileOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Button.name]: Button,
    [Input.name]: Input,
    MailOutlined,
    MobileOutlined,
  },
  setup() {
    const formRef = ref();
    const formState = reactive({
      mobile: "",
      code: "",
    });
    // 手机号验证
    let validateMobile = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("请输入手机号!");
      } else {
        return Promise.resolve();
      }
    };
    // 验证码验证
    let validateCode = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("请输入密码!");
      } else {
        return Promise.resolve();
      }
    };
    // 输入验证
    const rules = {
      mobile: [
        {
          required: true,
          validator: validateMobile,
          trigger: "change",
        },
      ],
      code: [
        {
          validator: validateCode,
          trigger: "change",
        },
      ],
    };
    //表单布局
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
    };
    // 提交表单且数据验证成功后回调事件
    const handleFinish = (values) => {
      console.log(values, formState);
    };
    // 提交表单且数据验证失败后回调事件
    const handleFinishFailed = (errors) => {
      console.log(errors);
    };
    // 任一表单项被校验后触发
    const handleValidate = (...args) => {
      console.log(args);
    };

    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      handleValidate,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>