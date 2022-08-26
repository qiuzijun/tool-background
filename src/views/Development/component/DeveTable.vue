<template>
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
</template>
<script>
import { defineComponent } from "vue";
import { Button, Tag, Table } from "ant-design-vue";
export default defineComponent({
  props: {
    //表头
    columns: {
      type: Array,
      default: () => {
        [];
      },
    },
    // 表数据
    data: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
  components: {
    [Button.name]: Button,
    [Tag.name]: Tag,
    [Table.name]: Table,
  },
  setup(props, { emit }) {
    const modify = (value) => {
      emit("modify", value);
    };
    return {
      modify,
    };
  },
});
</script>
<style lang="less" scoped>
// 修改按钮
.modify {
  margin-right: 5px;
}
</style>
