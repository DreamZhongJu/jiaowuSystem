<template>
  <div>
    <el-form 
      :model="form" 
      :rules="rules" 
      ref="formRef" 
      label-width="120px" 
      class="profile-form"
    >
      <el-form-item label="用户名:" prop="username">
        <el-input type="text" v-model="form.username" disabled/>
      </el-form-item>
      <el-form-item label="旧密码:" prop="oldPassword">
        <el-input type="password" v-model="form.oldPassword" @blur="validateField('oldPassword')"/>
      </el-form-item>
      <el-form-item label="新密码:" prop="newPassword">
        <el-input type="password" v-model="form.newPassword" @blur="validateField('newPassword')"/>
      </el-form-item>
      <el-form-item label="确认密码:" prop="confirmPassword">
        <el-input type="password" v-model="form.confirmPassword" @blur="validateField('confirmPassword')"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">修改密码</el-button>
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
import { updatepwd } from '@/network/log_reg'; // 确保该路径正确

export default {
  name: "UpdatePsd",
  data() {
    return {
      form: {
        username: this.$store.state.account.username,
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      dialogVisible: false,
      dialogMessage: '',
      rules: {
        oldPassword: [
          { required: true, message: '请输入旧密码', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '请输入新密码', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请确认新密码', trigger: 'blur' },
          { validator: this.validateConfirmPassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    validateField(field) {
      this.$refs.formRef.validateField(field, () => {

      });
    },
    validateConfirmPassword(rule, value, callback) {
      if (value !== this.form.newPassword) {
        callback(new Error('新密码和确认密码不一致'));
      } else {
        callback();
      }
    },
    onSubmit() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          const payload = {
            username: this.form.username,
            oldPassword: this.form.oldPassword,
            newPassword: this.form.newPassword
          };

          updatepwd(payload)
            .then(response => {
              if (response?.data?.code === 200) {
                this.form.oldPassword = '';
                this.form.newPassword = '';
                this.form.confirmPassword = '';
                // 在这里可以决定不显示对话框，或者显示一个成功的消息
              } else {
                const errorMsg = response?.data?.message || '密码修改失败';
                this.dialogMessage = errorMsg;
                this.dialogVisible = true;
              }
            })
            .catch(error => {
              this.dialogMessage = '请求出错，请稍后再试';
              this.dialogVisible = true;
              console.error(error);
            });
        } else {
          this.dialogMessage = '请检查表单填写是否正确';
          this.dialogVisible = true;
        }
      });
    },
    handleClose(done) {
      this.dialogVisible = false;
      done();
    }
  }
}
</script>

<style scoped>
.profile-form {
  margin: 20px;
  max-width: 700px;
}
</style>
