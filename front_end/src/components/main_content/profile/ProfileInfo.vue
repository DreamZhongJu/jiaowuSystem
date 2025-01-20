<template>
  <div class="profile-container">
    <!-- 展示模式 -->
    <div v-if="!editMode" class="profile-display">
      <h2 class="profile-title">个人信息</h2>
      <p><strong>学工号：</strong>{{ form.id }}</p>
      <p><strong>姓名：</strong>{{ form.name }}</p>
      <p><strong>邮箱：</strong>{{ form.email }}</p>
      <p><strong>角色：</strong>{{ form.role_name }}</p>
      <el-button type="primary" class="edit-button" @click="enableEditMode">修改信息</el-button>
    </div>

    <!-- 编辑模式 -->
    <el-form
        v-else
        :model="form"
        :rules="rules"
        ref="profileForm"
        label-width="120px"
        class="profile-form"
    >
      <h2 class="profile-title">修改个人信息</h2>
      <!-- 修改姓名 -->
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" placeholder="请输入新的姓名" clearable />
      </el-form-item>

      <!-- 修改邮箱 -->
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="请输入新的邮箱" clearable />
      </el-form-item>

      <!-- 按钮组 -->
      <el-form-item class="button-group">
        <el-button type="primary" :loading="loading" @click="submitForm">保存修改</el-button>
        <el-button type="default" @click="cancelEditMode">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUserInfo, updateUserInfo,getUserRole } from "@/network/user_info";
import { msg } from "@/assets/js/InformMsg";

export default {
  name: "ProfileInfo",
  data() {
    return {
      form: {
        id: "",
        name: "",
        email: "",
        role: "",
      },
      rules: {
        name: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
          { min: 2, max: 20, message: "姓名长度需在 2 到 20 个字符之间", trigger: "blur" },
        ],
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "请输入有效的邮箱地址", trigger: "blur" },
        ],
      },
      loading: false, // 按钮加载状态
      editMode: false, // 编辑模式状态
      user_id: sessionStorage.getItem("userNum"), // 从 Vuex 获取用户 ID
    };
  },
  mounted() {
    this.fetchProfileInfo();
  },
  methods: {
    // 获取用户信息
    async fetchProfileInfo() {
      try {
        const res = await getUserInfo(this.user_id);
        const userInfo = res.data.data;
        const res_role = await getUserRole(userInfo.role);
        this.form.id = userInfo.num || "";
        this.form.name = userInfo.name || "";
        this.form.email = userInfo.email || "";
        this.form.role = userInfo.role || "";
        this.form.role_name = res_role.data.data.name || "";
      } catch (err) {
        console.error("获取用户信息失败:", err);
        msg("error", "获取用户信息失败，请稍后重试");
      }
    },

    // 启用编辑模式
    enableEditMode() {
      this.editMode = true;
    },

    // 取消编辑模式并恢复展示模式
    cancelEditMode() {
      this.editMode = false;
      this.fetchProfileInfo(); // 恢复原始数据
    },

    // 提交修改
    submitForm() {
      this.$refs.profileForm.validate(async (valid) => {
        if (!valid) {
          msg("error", "请检查输入内容是否正确");
          return;
        }

        this.loading = true; // 开启加载状态
        const updateData = {...this.form, user_id: this.user_id };
        console.log(updateData)
        try {
          await updateUserInfo(this.user_id,updateData);
          msg("success", "信息更新成功");
          this.editMode = false; // 退出编辑模式
        } catch (err) {
          console.error("信息更新失败:", err);
          msg("error", "信息更新失败，请稍后重试");
        } finally {
          this.loading = false; // 关闭加载状态
        }
      });
    },
  },
};
</script>

<style scoped>
/* 全局容器样式 */
.profile-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 顶部对齐 */
  align-items: flex-start; /* 左对齐 */
  min-height: 100vh;
  padding: 40px; /* 左侧留白 */
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2); /* 渐变背景 */
  box-sizing: border-box;
}

/* 标题样式 */
.profile-title {
  text-align: left; /* 左对齐标题 */
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  font-family: "Roboto", Arial, sans-serif;
}

/* 展示模式样式 */
.profile-display {
  text-align: left;
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  width: 100%; /* 占满容器宽度 */
  max-width: 400px; /* 最大宽度 */
  font-family: "Roboto", Arial, sans-serif;
  margin-bottom: 20px; /* 与页面其他内容的间距 */
}

.profile-display p {
  font-size: 16px;
  color: #555;
  margin: 10px 0;
}

.profile-display .edit-button {
  margin-top: 20px;
  width: 100%;
}

/* 表单容器样式 */
.profile-form {
  width: 100%; /* 占满容器宽度 */
  max-width: 400px; /* 最大宽度 */
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", Arial, sans-serif;
}

/* 表单项样式 */
.el-form-item {
  margin-bottom: 20px;
}

/* 按钮组样式 */
.button-group {
  text-align: center;
}

.el-button {
  margin: 0 10px;
  padding: 10px 30px;
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
  .profile-container {
    padding: 20px;
  }

  .profile-display,
  .profile-form {
    padding: 20px;
    max-width: 100%; /* 在小屏幕上占满宽度 */
  }

  .profile-title {
    font-size: 20px;
  }

  .el-button {
    font-size: 14px;
    padding: 8px 20px;
  }
}
</style>