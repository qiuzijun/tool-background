<template>
  <div class="login">
    <div class="core">
      <!-- logo -->
      <div class="logo"></div>
      <!-- 登录表单 -->
      <div class="login-from">
        <!-- 登录方式tabs切换 -->
        <Tabs class="login-tabs" :tabs="tabs">
          <!-- 账号密码登录 -->
          <template #account>
            <Account />
          </template>
          <!-- 手机号 -->
          <template #code>
            <Code />
          </template>
        </Tabs>
      </div>
    </div>
  </div>
</template>
<script setup>
import Tabs from "@/components/Tabs/index.vue";
import Account from "./component/Account/index.vue";
import Code from "./component/Code/index.vue";
// tabs栏配置
const tabs = [
  {
    key: "1", //tabs key值
    name: "account", //插槽名
    tab: "账号密码", //tabs名
    forceRender: false, //tabs隐藏时是否渲染元素
  },
  {
    key: "2",
    name: "code",
    tab: "手机号",
    forceRender: false,
  },
];
</script>

<style lang="less" scoped>
@import "./index.less";
</style>