<template>
  <div class="data-show">
    <!-- 搜索框和添加按钮 -->
    <div class="data-show-header flex items-center justify-between mb-4">
      <el-input
          v-model="searchQuery"
          class="search-input"
          placeholder="搜索"
          :suffix-icon="Search"
          clearable
          @input="handleSearch"
      />
      <el-button
          type="primary"
          :icon="Plus"
          class="add-button"
      >
        添加
      </el-button>
    </div>

    <!-- 表格 -->
    <el-table
        :data="paginatedData"
        border
        style="width: 100%; margin-bottom: 20px;"
    >
      <el-table-column
          v-for="key in tableKey"
          :key="key.value"
          :prop="key.value"
          :label="key.title"
          align="center"
      />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
              type="primary"
              round
              size="small"
              @click="editRow(scope.row)"
          >
            编辑
          </el-button>
          <el-button
              type="danger"
              round
              size="small"
              @click="deleteRow(scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
        v-model:current-page="currentPage"
        :page-size="pageSize"
        :total="filteredData.length"
        layout="prev, pager, next, jumper"
        @current-change="handlePageChange"
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { Search, Plus } from "@element-plus/icons-vue";

export default {
  name: "DataShow",
  props: {
    tableList: {
      type: Array,
      default: () => [],
    },
    tableKey: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    // 搜索框输入
    const searchQuery = ref("");

    // 分页控制
    const currentPage = ref(1); // 当前页码
    const pageSize = ref(10); // 每页显示的条数

    // 筛选后的数据
    const filteredData = computed(() => {
      if (!searchQuery.value) return props.tableList; // 如果没有搜索内容，返回原始数据
      return props.tableList.filter((row) => {
        // 检查每列是否包含搜索内容
        return Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
    });

    // 当前页的数据
    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return filteredData.value.slice(start, end);
    });

    // 搜索处理
    const handleSearch = () => {
      currentPage.value = 1; // 搜索时重置为第一页
    };

    // 页面切换时的处理
    const handlePageChange = (page) => {
      currentPage.value = page;
    };

    // 编辑按钮逻辑
    const editRow = (row) => {
      console.log("编辑行:", row);
      // 在这里添加编辑行的逻辑，例如跳转到编辑页面或弹窗
    };

    // 删除按钮逻辑
    const deleteRow = (row) => {
      console.log("删除行:", row);
      // 在这里实现删除行的逻辑，例如调用删除 API
    };

    return {
      searchQuery,
      currentPage,
      pageSize,
      filteredData,
      paginatedData,
      Search,
      Plus,
      handleSearch,
      handlePageChange,
      editRow,
      deleteRow,
    };
  },
};
</script>

<style scoped>
/* 样式调整 */
.data-show {
  margin: 20px;
}

.search-input {
  width: 300px;
  margin-right: 10px;
}

.add-button {
  margin-left: auto;
}

.el-pagination {
  margin-top: 20px;
  text-align: center;
}
</style>