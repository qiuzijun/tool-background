<template>
  <a-sub-menu :key="menuInfo.name">
    <template #icon><i :class="`iconfont ${menuInfo.meta.icon}`"></i></template>
    <template #title>{{ menuInfo.meta.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name" @click="routerlink(item)">
          <template #icon>
            <i :class="`iconfont ${item.meta.icon}`"></i>
          </template>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <SubMenu :menu-info="item" :key="item.name" />
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
import { PieChartOutlined, MailOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { Menu } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useStack } from "@/store/modules/stack";

export default defineComponent({
  name: "SubMenu",
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    PieChartOutlined,
    MailOutlined,
    [Menu.name]: Menu,
    [Menu.SubMenu.name]: Menu.SubMenu,
    [Menu.Item.name]: Menu.Item,
  },
  setup() {
    const router = useRouter();
    const store = useStack();
    const routerlink = (item) => {
      store.addStack(item);
      router.push({
        name: `${item.name}`,
      });
    };
    return {
      routerlink,
    };
  },
});
</script>
