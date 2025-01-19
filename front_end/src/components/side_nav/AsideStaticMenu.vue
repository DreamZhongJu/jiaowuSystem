<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
  >
    <el-menu-item
        v-for="item in Info.staticHandle"
        :key="item.path"
        :index="item.path"
        @click="menuClick(item)"
    >
      <el-icon>
        <Tickets />
      </el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { Tickets } from "@element-plus/icons";

export default {
  name: "AsideStaticMenu",
  components: {
    Tickets,
  },
  inject: {
    Info: {
      default: () => ({
        staticHandle: [],
      }),
    },
  },
  methods: {
    menuClick(item) {
      if (!item || !item.path) {
        console.error("Invalid menu item:", item);
        return;
      }
      this.$store.commit("setMenuActive", item); // 更新 Vuex 状态
      this.$router.push(item.path); // 路由跳转
    },
  },
};
</script>

<style scoped>
/* 可根据需求添加样式 */
</style>