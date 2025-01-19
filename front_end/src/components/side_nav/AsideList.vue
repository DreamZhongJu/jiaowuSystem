<template>
  <el-col :span="24">
    <el-menu
        default-active="2"
        class="el-menu-vertical-custom"
        :router="true"
    >
      <aside-static-menu />
      <aside-openal-menu />
    </el-menu>
  </el-col>
</template>

<script>
import AsideOpenalMenu from "@/components/side_nav/AsideOpenalMenu";
import AsideStaticMenu from "@/components/side_nav/AsideStaticMenu";

export default {
  name: "AsideList",
  components: {
    AsideStaticMenu,
    AsideOpenalMenu,
  },
};
</script>

<style scoped>
/* 自定义菜单样式 */
.el-menu-vertical-custom {
  width: 100%;
  max-width: 280px; /* 最大宽度 */
  background: linear-gradient(135deg, #f0f4ff, #ffffff); /* 渐变背景 */
  border-radius: 12px; /* 圆角 */
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  padding: 10px 0; /* 内边距 */
  transition: all 0.3s ease; /* 动画过渡 */
  overflow: hidden;
}

.el-menu-vertical-custom:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2); /* 鼠标悬停时加深阴影 */
}

.el-menu-vertical-custom .el-menu-item {
  font-size: 16px;
  font-family: "Roboto", Arial, sans-serif; /* 字体设置 */
  color: #1e88e5; /* 默认字体颜色 */
  transition: color 0.3s ease, background-color 0.3s ease; /* 动画过渡效果 */
  margin: 5px 10px; /* 菜单项间距 */
  border-radius: 8px; /* 菜单项圆角 */
}

.el-menu-vertical-custom .el-menu-item:hover {
  background-color: #f0f4ff; /* 鼠标悬停时的背景色 */
  color: #0056b3; /* 鼠标悬停时的文字颜色 */
}

.el-menu-vertical-custom .el-menu-item.is-active {
  background-color: #1e88e5; /* 激活状态背景色 */
  color: #ffffff; /* 激活状态字体颜色 */
  font-weight: bold; /* 激活状态加粗 */
}

.el-menu-vertical-custom .el-submenu__title {
  font-size: 16px;
  font-weight: 500; /* 子菜单标题加权 */
  color: #333333; /* 默认子菜单标题颜色 */
  border-radius: 8px; /* 子菜单圆角 */
}

.el-menu-vertical-custom .el-submenu__title:hover {
  background-color: #f0f4ff; /* 子菜单悬停背景颜色 */
  color: #1e88e5; /* 子菜单悬停字体颜色 */
}

.el-menu-vertical-custom .el-menu-item-group__title {
  padding: 10px 20px; /* 分组标题的内边距 */
  font-size: 14px; /* 分组标题字体大小 */
  color: #666666; /* 分组标题字体颜色 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .el-menu-vertical-custom {
    max-width: 100%; /* 小屏幕时菜单宽度 */
    border-radius: 0; /* 去除圆角 */
    box-shadow: none; /* 小屏幕时去除阴影 */
  }

  .el-menu-vertical-custom .el-menu-item {
    padding: 10px; /* 小屏幕时菜单项的内边距增加 */
  }
}
</style>