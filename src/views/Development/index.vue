<template>
  <a-layout-content
    :style="{
      margin: '24px 16px',
      padding: '24px',
      background: '#fff',
      minHeight: '280px',
    }"
  >
    <header>
      <!-- 发布时间 -->
      <DatePicker placeholder="发布时间" text="发布时间:" class="margin" />
      <!-- 更新时间 -->
      <DatePicker placeholder="更新时间" text="更新时间:" class="margin" />
      <!-- 类型 -->
      <Select placeholder="请输入类型" text="类型:" class="margin" />
      <!-- 查询 -->
      <a-button type="primary" class="margin">查询</a-button>
      <!-- 添加 - 抽屉按钮 -->
      <DrawerButton
        btnText="添加"
        v-model:isShow="isShow"
        modalTitle="添加开发列表"
        :footerBtn="true"
      >
        <template #content>
          <DeveList :modifyDate="modifyDate" />
        </template>
      </DrawerButton>
    </header>
    <!-- 开发表格 -->
    <DeveTable :columns="columns" :data="data" @modify="modify" />
    <!-- 表格分页 -->
    <div class="page">
      <a-pagination v-model:current="current" :total="500" />
    </div>
  </a-layout-content>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import { Layout, Button, Pagination } from "ant-design-vue";
import DeveList from "./component/DeveList.vue";
import DeveTable from "./component/DeveTable.vue";
export default defineComponent({
  components: {
    [Layout.Content.name]: Layout.Content,
    [Button.name]: Button,
    [Pagination.name]: Pagination,
    DeveList,
    DeveTable,
  },
  setup() {
    // const fromItem = reactive({
    //   releaseTime: "",
    //   updateTime: "",
    //   type: "",
    //   tags: [],
    // });
    // 点击修改的单行数据
    const modifyDate = ref({});
    // 外部手动控制抽屉显示、隐藏
    const isShow = ref(false);
    const columns = [
      {
        title: "主图",
        dataIndex: "img",
        key: "img",
        width: 120,
      },
      {
        title: "名字",
        dataIndex: "name",
        key: "name",
        width: 120,
      },
      {
        title: "描述",
        dataIndex: "describe",
        key: "describe",
      },
      {
        title: "发布时间",
        dataIndex: "releaseTime",
        key: "releaseTime",
        width: 120,
      },
      {
        title: "更新时间",
        dataIndex: "updateTime",
        key: "updateTime",
        width: 120,
      },
      {
        title: "地址",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "类型",
        key: "type",
        dataIndex: "type",
        width: 120,
      },
      {
        title: "Action",
        key: "action",
      },
    ];
    const data = reactive([
      {
        key: "1",
        img: "https://cxy521.com/static/img/index/tech/juejin.png",
        name: "掘金",
        describe: "一个帮助开发者成长的社区",
        releaseTime: "2022-08-01",
        updateTime: "2022-08-01",
        address: "https://juejin.cn/",
        type: "技术社区",
      },
      {
        key: "2",
        img: "https://cxy521.com/static/img/index/tech/juejin.png",
        name: "掘金",
        describe: "一个帮助开发者成长的社区",
        releaseTime: "2022-08-01",
        updateTime: "2022-08-01",
        address: "https://juejin.cn/",
        type: "技术社区",
      },
      {
        key: "3",
        img: "https://cxy521.com/static/img/index/tech/juejin.png",
        name: "掘金",
        describe: "一个帮助开发者成长的社区",
        releaseTime: "2022-08-01",
        updateTime: "2022-08-01",
        address: "https://juejin.cn/",
        type: "技术社区",
      },
      {
        key: "4",
        img: "https://cxy521.com/static/img/index/tech/juejin.png",
        name: "掘金",
        describe: "一个帮助开发者成长的社区",
        releaseTime: "2022-08-01",
        updateTime: "2022-08-01",
        address: "https://juejin.cn/",
        type: "技术社区",
      },
      {
        key: "5",
        img: "https://cxy521.com/static/img/index/tech/juejin.png",
        name: "掘金",
        describe: "一个帮助开发者成长的社区",
        releaseTime: "2022-08-01",
        updateTime: "2022-08-01",
        address: "https://juejin.cn/",
        type: "技术社区",
      },
    ]);
    // 修改
    const modify = (value) => {
      isShow.value = true;
      modifyDate.value = value;
    };
    return {
      data,
      columns,
      current: ref(1),
      isShow,
      modify,
      modifyDate,
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>