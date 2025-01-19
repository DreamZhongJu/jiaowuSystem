<template>
  <el-menu
      class="el-menu-demo"
      background-color="#ffffff"
      text-color="#000000"
      active-text-color="#000000"
      active-background-color="#d3d3d3"
  >
    <!-- 用户名和头像显示 -->
    <el-menu-item index="1-1" class="user-info">
      <el-avatar
          size="middle"
          class="user-avatar"
          icon="el-icon-user"
      ></el-avatar>
      <span class="username">{{ username }}</span>
    </el-menu-item>

    <!-- 退出登录按钮 -->
    <el-menu-item index="1-2" @click="logout">退出登录</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "UserInfo", // 定义组件名称
  data() {
    return {
      username: "用户", // 默认用户名
    };
  },
  methods: {
    logout() {
      // 清除登录状态并跳转到登录页面
      sessionStorage.clear();
      this.$router.push("/");
    },
    fetchUsername() {
      // 从 sessionStorage 获取用户名，并设置到组件的 data 中
      const savedUsername = sessionStorage.getItem("userName");
      if (savedUsername) {
        this.username = savedUsername;
      }
    },
  },
  created() {
    // 页面加载时获取用户名
    this.fetchUsername();
  },
};
</script>

<style scoped>
/* 菜单样式 */
.el-menu-demo {
  line-height: 60px;
  background-color: #ffffff; /* 白色背景 */
  border-bottom: 1px solid #e0e0e0; /* 底部边框 */
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
}

/* 用户信息样式 */
.user-info {
  display: flex;
  align-items: center;
  gap: 12px; /* 图标和用户名之间的间距 */
  cursor: default;
}

.username {
  font-size: 18px;
  font-weight: bold;
  color: #333333; /* 深灰色文本 */
}

.user-avatar {
  background-color: #409EFF; /* 默认头像背景颜色 */
  color: #ffffff; /* 图标颜色为白色 */
  cursor: default;
}

/* 菜单项样式 */
.el-menu-item {
  text-align: center;
  color: #000000; /* 黑色文本 */
  cursor: pointer; /* 鼠标变为手型 */
}

.el-menu-item:hover {
  background-color: #f0f0f0; /* 悬停时灰色背景 */
}

.el-menu-item.is-active {
  background-color: #d3d3d3; /* 选中时灰色背景 */
  color: #000000; /* 选中时文本颜色为黑色 */
}
</style>