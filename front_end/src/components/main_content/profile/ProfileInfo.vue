<template>
  <div class="profile-container">
    <el-form :model="form" label-width="120px" class="profile-form">
      <!-- 修改姓名 -->
      <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="请输入新的姓名" />
      </el-form-item>

      <!-- 修改邮箱 -->
      <el-form-item label="邮箱">
        <el-input v-model="form.email" placeholder="请输入新的邮箱" />
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item class="submit-button">
        <el-button type="primary" @click="submitForm">保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUserInfo, updateUserInfo } from "@/network/teacher"; // 假设已统一接口
import { msg } from "@/assets/js/InformMsg"; // 消息提示工具

export default {
  name: "ProfileInfo",
  data() {
    return {
      form: {
        name: "",
        email: "",
      },
      user_id: this.$store.state.account.user_id,
    };
  },
  mounted() {
    this.fetchProfileInfo();
  },
  methods: {
    // 获取用户信息
    fetchProfileInfo() {
      getUserInfo({ user_id: this.user_id })
          .then((res) => {
            const userInfo = res.data.data;
            this.form.name = userInfo.name || "";
            this.form.email = userInfo.email || "";
          })
          .catch((err) => {
            console.error("获取用户信息失败:", err);
            msg("error", "获取用户信息失败，请稍后重试");
          });
    },

    // 提交修改
    submitForm() {
      const updateData = { ...this.form, user_id: this.user_id };

      updateUserInfo(updateData)
          .then(() => {
            msg("success", "信息更新成功");
          })
          .catch((err) => {
            console.error("信息更新失败:", err);
            msg("error", "信息更新失败，请稍后重试");
          });
    },
  },
};
</script>

<style scoped>
/* 页面容器：垂直水平居中 */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 占满整个视口高度 */
  background: linear-gradient(135deg, #e3f2fd, #bbdefb); /* 渐变背景 */
  padding: 20px;
  box-sizing: border-box;
}

/* 表单容器样式 */
.profile-form {
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", Arial, sans-serif;
  text-align: left;
}

/* 表单项样式 */
.el-form-item {
  margin-bottom: 20px;
}

/* 提交按钮样式 */
.submit-button {
  text-align: center;
  margin-top: 20px;
}

.el-button {
  padding: 10px 25px;
  font-size: 16px;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.el-button:hover {
  background-color: #1e88e5;
  color: #fff;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.el-button:active {
  transform: scale(0.98);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .profile-form {
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  .el-button {
    font-size: 14px;
    padding: 8px 20px;
  }
}
</style>