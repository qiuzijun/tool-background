<template>
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item> 注册 </a-form-item>
    <a-form-item
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input
        size="large"
        placeholder="账户"
        v-model:value="formState.username"
      />
    </a-form-item>

    <a-form-item
      name="password"
      :rules="[{ required: true, message: '请输入密码!' }]"
    >
      <a-popover placement="rightTop" :visible="true">
        <template #content>
          <MyPopover :active="active" />
        </template>
        <a-input-password
          size="large"
          @change="passChange"
          placeholder="请输入密码长度为8到12位字符。请不要使用容易被猜到的密码"
          v-model:value="formState.password"
        />
      </a-popover>
    </a-form-item>
    <a-form-item
      name="confirmPassword"
      :rules="[{ required: true, message: '请输入再次密码' }]"
    >
      <a-input-password
        size="large"
        placeholder="确认密码"
        v-model:value="formState.confirmPassword"
      />
    </a-form-item>

    <a-form-item>
      <a-button
        :disabled="disabled"
        type="primary"
        size="large"
        html-type="submit"
        class="login-form-button"
      >
        注册账户
      </a-button>
      <a class="login-form-forgot registered" @click="$emit('isActive', true)"
        >使用现有账户登录</a
      >
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive, ref, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { Form, Button, Input, Checkbox,Popover } from "ant-design-vue";
import MyPopover from "./MyPopover.vue";
import { userPassStrong } from "@/hooks/passstrength";
export default defineComponent({
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Button.name]: Button,
    [Input.name]: Input,
    [Input.Password.name]: Input.Password,
    [Checkbox.name]: Checkbox,
    [Popover.name]: Popover,
    UserOutlined,
    LockOutlined,
    MyPopover,
  },

  setup() {
    const formState = reactive({
      username: "",
      password: "",
      confirmPassword: "",
    });
    const active = ref(1);
    // 密码输入事件
    const passChange = (e) => {
      active.value = userPassStrong(e.target.value);
    };
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const disabled = computed(() => {
      return !(
        formState.username &&
        formState.password &&
        formState.confirmPassword
      );
    });
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled,
      passChange,
      active,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>