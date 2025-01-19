<template>
  <el-menu
    mode="horizontal"
    class="el-menu-demo"
    background-color="#ffffff"
    text-color="#000000"
    active-text-color="#000000"
    active-background-color="#d3d3d3"
  >
    <el-menu-item index="1-2" @click="logout">退出登录</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "UserInfo",
  methods: {
    logout() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.el-menu-demo {
  line-height: 60px;
  background-color: #ffffff; /* 白色背景 */
}

.el-menu-item {
  text-align: center;
  color: #000000; /* 黑色文本 */
}

.el-menu-item:hover {
  background-color: #f0f0f0; /* 悬停时灰色背景 */
}

.el-menu-item.is-active {
  background-color: #d3d3d3; /* 选中时灰色背景 */
  color: #000000; /* 选中时文本颜色为黑色 */
}
</style>
