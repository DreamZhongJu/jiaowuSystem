<template>
  <div class="student-manage">
    <data-show :table-list="tableList" :table-key="tableKey">
      <template v-slot:Edit="scope">
        <el-button
            type="primary"
            round
            size="small"
            @click="handleEdit(scope.row)"
        >
          详情
        </el-button>
      </template>
    </data-show>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"; // Vue 3 Composition API
import { getUserInfo } from "@/network/admin";
import DataShow from "./DataShow"; // 数据展示组件

export default {
  name: "UserManage",
  components: {
    DataShow,
  },
  setup() {
    // 定义响应式数据
    const tableKey = ref([
      { title: "编号", value: "id" },
      { title: "学号", value: "num", sortable: 1 },
      { title: "姓名", value: "name" },
      { title: "邮箱", value: "email" },
      { title: "角色", value: "role" },
    ]);

    const tableList = ref([]); // 初始化为空数组

    // 异步获取用户列表
    const makeUserList = async () => {
      try {
        const res = await getUserInfo(); // 获取用户信息
        console.log("获取的用户信息：", res);
        tableList.value = res.data.data; // 将数据赋值给响应式变量
      } catch (error) {
        console.error("获取用户信息失败：", error);
      }
    };

    // 处理编辑按钮点击事件
    const handleEdit = (row) => {
      console.log("详情按钮被点击，当前行数据：", row);
      // 在这里添加逻辑，例如跳转到详情页或弹窗
    };

    // 在组件挂载时调用数据加载方法
    onMounted(() => {
      makeUserList();
    });

    // 返回给模板使用的变量和方法
    return {
      tableKey,
      tableList,
      handleEdit,
    };
  },
};
</script>

<style scoped>
/* 样式可以根据需求自定义 */
</style>