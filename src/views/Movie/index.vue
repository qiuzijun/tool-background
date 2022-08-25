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
      <DatePicker
        placeholder="发布时间"
        text="发布时间:"
        @onTime="release"
        class="margin"
      />
      <!-- 更新时间 -->
      <DatePicker
        placeholder="更新时间"
        text="更新时间:"
        @onTime="update"
        class="margin"
      />
      <!-- 类型 -->
      <Select
        placeholder="请输入类型"
        text="类型:"
        @onChange="onChange"
        class="margin"
      />
      <!-- 标签 -->
      <Select
        placeholder="请输入标签"
        text="标签:"
        mode="tags"
        @onChange="onChange"
        class="margin"
      />
      <!-- 查询 -->
      <a-button type="primary" class="margin" @click="query">查询</a-button>
      <!-- 添加 - 抽屉按钮 -->
      <DrawerButton btnText="添加" modalTitle="添加影院列表">
        <template #content>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </template>
      </DrawerButton>
    </header>
    <!-- 影院表格 -->
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="false"
      :scroll="{ y: 600 }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'img'">
          <img :src="record.img" alt="" style="width: 80px; height: 80px" />
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag v-for="tag in record.tags" :key="tag" :color="tag.color">
              {{ tag.name }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <a-button
            type="primary"
            size="small"
            class="modify"
            @click="modify(record)"
            >修改</a-button
          >
          <a-button type="primary" size="small" danger>删除</a-button>
        </template>
      </template>
    </a-table>
    <!-- 表格分页 -->
    <div class="page">
      <a-pagination v-model:current="current" :total="500" />
    </div>
  </a-layout-content>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import {
  Layout,
  message,
  Button,
  Divider,
  Tag,
  Table,
  Pagination,
} from "ant-design-vue";
export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
    [Layout.Content.name]: Layout.Content,
    [Button.name]: Button,
    [Divider.name]: Divider,
    [Tag.name]: Tag,
    [Table.name]: Table,
    [Pagination.name]: Pagination,
  },
  setup() {
    const fromItem = reactive({
      releaseTime: "",
      updateTime: "",
      type: "",
      tags: [],
    });
    //  发布时间
    const release = (value) => {
      fromItem.releaseTime = value;
    };
    //  更新时间
    const update = (value) => {
      fromItem.updateTime = value;
    };
    //  下拉选择
    const onChange = (value) => {
      if (Array.isArray(value)) fromItem.tags = value;
      else fromItem.type = value;
    };
    //  查询
    const query = () => {
      let releaseTime = new Date(fromItem.releaseTime).getTime();
      let updateTime = new Date(fromItem.updateTime).getTime();
      if (updateTime >= releaseTime) console.log(fromItem);
      else message.warning("更新时间不得小于发布时间!");
    };
    const modify = (value) => {
      console.log(value);
    };
    const columns = [
      {
        title: "主图",
        dataIndex: "img",
        key: "img",
      },
      {
        title: "名字",
        dataIndex: "name",
        key: "name",
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
      },
      {
        title: "更新时间",
        dataIndex: "updateTime",
        key: "updateTime",
      },
      {
        title: "类型",
        key: "type",
        dataIndex: "type",
      },
      {
        title: "标签",
        key: "tags",
        dataIndex: "tags",
      },
      {
        title: "Action",
        key: "action",
      },
    ];
    const data = [
      {
        key: "1",
        img: "https://www.24kdh.com/wp-content/uploads/2021/10/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211015141645.jpg",
        name: "天空影视",
        describe: "最新最全的超高清电视剧，电影，综艺，动漫免费在线观看！",
        releaseTime: "2022-08-01",
        updateTime: "2022-08-01",
        type: "高清",
        tags: [
          {
            name: "在线",
            color: "red",
          },
          {
            name: "电影",
            color: "green",
          },
        ],
      },
      {
        key: "2",
        img: "https://www.24kdh.com/wp-content/uploads/2021/10/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211015141645.jpg",
        name: "天空影视",
        describe: "最新最全的超高清电视剧，电影，综艺，动漫免费在线观看！",
        releaseTime: "2022-08-01",
        updateTime: "2022-08-01",
        type: "高清",
        tags: [
          {
            name: "在线",
            color: "red",
          },
        ],
      },
      {
        key: "3",
        img: "https://www.24kdh.com/wp-content/uploads/2021/10/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211015141645.jpg",
        name: "天空影视",
        describe: "最新最全的超高清电视剧，电影，综艺，动漫免费在线观看！",
        releaseTime: "2022-08-01",
        updateTime: "2022-08-01",
        type: "高清",
        tags: [
          {
            name: "电影",
            color: "green",
          },
        ],
      },
      {
        key: "4",
        img: "https://www.24kdh.com/wp-content/uploads/2021/10/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211015141645.jpg",
        name: "天空影视",
        describe: "最新最全的超高清电视剧，电影，综艺，动漫免费在线观看！",
        releaseTime: "2022-08-01",
        updateTime: "2022-08-01",
        type: "高清",
        tags: [
          {
            name: "电影",
            color: "green",
          },
        ],
      },
      {
        key: "5",
        img: "https://www.24kdh.com/wp-content/uploads/2021/10/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211015141645.jpg",
        name: "天空影视",
        describe: "最新最全的超高清电视剧，电影，综艺，动漫免费在线观看！",
        releaseTime: "2022-08-01",
        updateTime: "2022-08-01",
        type: "高清",
        tags: [
          {
            name: "电影",
            color: "green",
          },
        ],
      },
    ];
    return {
      data,
      columns,
      release,
      update,
      onChange,
      query,
      modify,
      current: ref(1),
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>