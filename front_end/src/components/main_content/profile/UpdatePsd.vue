<template>
  <div class="profile-container">
    <el-form
        :model="form"
        :rules="rules"
        ref="formRef"
        label-width="120px"
        class="profile-form"
    >
      <h2 class="form-title">修改密码</h2>

      <!-- 用户名 -->
      <el-form-item label="用户名:" prop="username">
        <el-input type="text" v-model="form.userName" disabled class="input-field" />
      </el-form-item>

      <!-- 旧密码 -->
      <el-form-item label="旧密码:" prop="oldPassword">
        <el-input type="password" v-model="form.oldPassword" placeholder="请输入旧密码" @blur="validateField('oldPassword')" class="input-field" />
      </el-form-item>

      <!-- 新密码 -->
      <el-form-item label="新密码:" prop="newPassword">
        <el-input type="password" v-model="form.newPassword" placeholder="请输入新密码" @blur="validateField('newPassword')" class="input-field" />
      </el-form-item>

      <!-- 确认密码 -->
      <el-form-item label="确认密码:" prop="confirmPassword">
        <el-input type="password" v-model="form.confirmPassword" placeholder="请再次输入新密码" @blur="validateField('confirmPassword')" class="input-field" />
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="submit-button">修改密码</el-button>
      </el-form-item>
    </el-form>

    <!-- 弹出对话框 -->
    <el-dialog
        v-model="dialogVisible"
        width="30%"
        :before-close="handleClose"
    >
      <span>{{ dialogMessage }}</span>
      <template v-slot:footer>
        <el-button @click="dialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { updatepwd } from "@/network/log_reg";

export default {
  name: "UpdatePsd",
  data() {
    return {
      form: {
        userName: "user",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      dialogVisible: false,
      dialogMessage: "",
      rules: {
        oldPassword: [
          {required: true, message: "请输入旧密码", trigger: "blur"},
        ],
        newPassword: [
          {required: true, message: "请输入新密码", trigger: "blur"},
        ],
        confirmPassword: [
          {required: true, message: "请确认新密码", trigger: "blur"},
          {validator: this.validateConfirmPassword, trigger: "blur"},
        ],
      },
    };
  },
  methods: {
    fetchUsername() {
      const savedUsername = sessionStorage.getItem("userName");
      if (savedUsername) {
        this.form.userName = savedUsername;
      }
    },
    validateField(field) {
      this.$refs.formRef.validateField(field, () => {
      });
    },
    validateConfirmPassword(rule, value, callback) {
      if (value !== this.form.newPassword) {
        callback(new Error("新密码和确认密码不一致"));
      } else {
        callback();
      }
    },
    onSubmit() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          const payload = {
            username: this.form.userName,
            oldPassword: this.form.oldPassword,
            newPassword: this.form.newPassword,
          };

          updatepwd(payload)
              .then((response) => {
                if (response?.data?.code === 200) {
                  this.form.oldPassword = "";
                  this.form.newPassword = "";
                  this.form.confirmPassword = "";
                  this.dialogMessage = "密码修改成功";
                  this.dialogVisible = true;
                } else {
                  const errorMsg = response?.data?.message || "密码修改失败";
                  this.dialogMessage = errorMsg;
                  this.dialogVisible = true;
                }
              })
              .catch((error) => {
                this.dialogMessage = "请求出错，请稍后再试";
                this.dialogVisible = true;
                console.error(error);
              });
        } else {
          this.dialogMessage = "请检查表单填写是否正确";
          this.dialogVisible = true;
        }
      });
    },
    handleClose(done) {
      this.dialogVisible = false;
      done();
    },
  },
  created() {
    this.fetchUsername();
  },
};
</script>

<style scoped>
/* 页面容器 */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb); /* 渐变背景 */
  padding: 20px;
  box-sizing: border-box;
}

/* 表单样式 */
.profile-form {
  width: 100%;
  max-width: 500px;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  font-family: "Roboto", Arial, sans-serif;
}

/* 表单标题 */
.form-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

/* 输入框样式 */
.input-field {
  border-radius: 6px;
  font-size: 1rem;
}

/* 提交按钮样式 */
.submit-button {
  width: 100%;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  background-color: #1e88e5;
  color: white;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: #1565c0;
}

.submit-button:active {
  transform: scale(0.98);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .profile-form {
    padding: 15px 20px;
  }

  .form-title {
    font-size: 1.25rem;
  }

  .submit-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}
</style>