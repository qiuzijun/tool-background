<template>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div class="login">
      <div class="core">
        <!-- logo -->
        <div class="logo"></div>
        <!-- 登录、注册表单 -->
        <div class="login-from">
          <!-- 登录 -->
          <div v-if="active">
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
            <a class="login-form-forgot registered" @click="active = false"
              >注册账户</a
            >
          </div>
          <!-- 注册 -->
          <Register v-else @isActive="isActive" />
        </div>
      </div>
      <!-- 语言切换 -->
      <Popover>
        <template #content>
          <ul class="language">
            <li @click="locale = zhCN.locale">cn 简体中文</li>
            <li @click="locale = enUS.locale">🇺🇸 English</li>
          </ul>
        </template>
        <template #docment>
          <i class="iconfont icon-wangluo wangluo"></i>
        </template>
      </Popover>
    </div>
  </a-config-provider>
</template>
<script setup>
import { ref, watch } from "vue";
import Tabs from "@/components/Tabs/index.vue";
import Popover from "@/components/Popover/index.vue";
import Account from "./component/Account/index.vue";
import Code from "./component/Code/index.vue";
import Register from "./component/Register/index.vue";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("en");
const locale = ref(enUS.locale);
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
const active = ref(true);
const isActive = (e) => {
  active.value = e;
};
</script>
<script>
import { defineComponent } from "vue";
import { ConfigProvider } from "ant-design-vue";
export default defineComponent({
  components: {
    [ConfigProvider.name]: ConfigProvider,
  },
});
</script>


<style lang="less" scoped>
@import "./index.less";
</style>