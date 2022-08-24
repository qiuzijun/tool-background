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
    <a-form-item has-feedback name="account">
      <a-input
        v-model:value="formState.account"
        type="text"
        size="large"
        autocomplete="off"
        placeholder="账号"
      >
        <template #prefix
          ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item has-feedback name="password">
      <a-input
        v-model:value="formState.password"
        type="password"
        size="large"
        autocomplete="off"
        placeholder="密码"
      >
        <template #prefix
          ><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template
      ></a-input>
    </a-form-item>
    <a-form-item has-feedback name="checked">
      <a-checkbox v-model:checked="formState.checked">记住密码</a-checkbox>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button
        :disabled="disabled"
        type="primary"
        size="large"
        html-type="submit"
        >登录</a-button
      >
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive, computed, ref } from "vue";
import { Form, Button, Input, Checkbox } from "ant-design-vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { useUser } from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
import { setPass, getPass } from "@/utils/tool";
export default defineComponent({
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Button.name]: Button,
    [Input.name]: Input,
    [Checkbox.name]: Checkbox,
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formRef = ref();
    // 表单数据
    const formState = reactive(getPass());
    const store = useUser();
    const router = useRouter();
    const route = useRoute();
    // 账号验证
    let validateAccount = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("请输入账号!");
      } else {
        return Promise.resolve();
      }
    };
    // 密码验证
    let validatePass = async (_rule, value) => {
      if (value === "") {
        return Promise.reject("请输入密码!");
      } else {
        return Promise.resolve();
      }
    };
    // 输入验证
    const rules = {
      account: [
        {
          required: true,
          validator: validateAccount,
          trigger: "change",
        },
      ],
      password: [
        {
          validator: validatePass,
          trigger: "change",
        },
      ],
      checked: [],
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
      // 调用登录store
      store
        .login(values)
        .then((data) => {
          // 登录重定向
          if (route.query.redirect) {
            router.replace({
              path: `${route.query.redirect}`,
            });
          } else {
            // 登录成功跳转首页
            router.replace({
              name: "layout",
            });
          }
          message.success("登录成功");
          // 记住密码
          values.checked ? setPass(values) : setPass({});
        })
        .catch((err) => {
          message.error("登录失败");
        });
    };
    // 提交表单且数据验证失败后回调事件
    const handleFinishFailed = (errors) => {
      //   console.log(errors);
    };
    // 任一表单项被校验后触发
    const handleValidate = (...args) => {
      //   console.log(args);
    };
    const disabled = computed(() => {
      return !(formState.account && formState.password);
    });
    return {
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      handleValidate,
      disabled,
    };
  },
});
</script>
<style lang="less" scoped>
@import "./index.less";
</style>