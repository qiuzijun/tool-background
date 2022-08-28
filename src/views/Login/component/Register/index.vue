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
      name="account"
      :rules="[{ required: true, message: '请输入账户名!' }]"
    >
      <a-input
        size="large"
        placeholder="账户"
        v-model:value="formState.account"
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
      name="confirm"
      :rules="[{ required: true, message: '请输入再次密码' }]"
    >
      <a-input-password
        size="large"
        placeholder="确认密码"
        v-model:value="formState.confirm"
      />
    </a-form-item>
    <a-form-item
      name="mobile"
      :rules="[{ required: true, message: '请输入手机号!' }]"
    >
      <a-input
        size="large"
        placeholder="手机号"
        v-model:value="formState.mobile"
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
import {
  Form,
  Button,
  Input,
  Checkbox,
  Popover,
  message,
} from "ant-design-vue";
import MyPopover from "./MyPopover.vue";
import { userPassStrong } from "@/hooks/passstrength";
import { Register } from "@/api/user";
import AES from "@/utils/crypto";
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
      account: "",
      password: "",
      confirm: "",
      mobile: "",
    });
    const active = ref(1);
    // 密码输入事件
    const passChange = (e) => {
      active.value = userPassStrong(e.target.value);
    };
    const onFinish = (values) => {
      if (formState.password !== formState.confirm)
        message.warning("密码不一致");
      else
        Register({ ...values, uid: AES.generatekey(16) })
          .then((data) => {
            message.success(data.message);
          })
          .catch((err) => {
            console.log(err);
          });
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const disabled = computed(() => {
      return !(
        formState.account &&
        formState.password &&
        formState.confirm &&
        formState.mobile
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