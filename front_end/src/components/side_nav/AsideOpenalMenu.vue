<template>
  <el-col :span="24">
    <el-menu
        default-active="2"
        class="el-menu-vertical-custom"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-sub-menu
          v-for="(item, index) in Info.openalHandle"
          :key="index"
          :index="String(index)"
          class="custom-submenu"
      >
        <template #title>
          <el-icon class="menu-icon">
            <Tickets/>
          </el-icon>
          <span class="menu-title">{{ item.title }}</span>
        </template>

        <el-menu-item
            v-for="i in item.contain"
            :key="i.path"
            :index="String(i.path)"
            @click="menuClick(i)"
            class="custom-menu-item"
        >
          <el-icon class="menu-icon">
            <Link/>
          </el-icon>
          <span class="menu-item-title">{{ i.title }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-col>
</template>

<script>
import {Tickets, Link} from "@element-plus/icons";

export default {
  name: "AsideOpenalMenu",
  data() {
    return {
      activeIndex: "1",
    };
  },
  inject: ["Info"],
  components: {
    Tickets,
    Link,
  },
  methods: {
    menuClick(item) {
      console.log("Navigating to:", item.path); // 调试信息
      this.$router.push({path: item.path}); // 确保使用对象形式
    },
  },
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
};
</script>