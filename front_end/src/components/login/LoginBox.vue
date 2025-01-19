<template>
  <div class="login">
    <form @submit.prevent="submitInfo">
      <h2 class="form-title">{{ title === 'Login' ? '用户登录' : '用户注册' }}</h2>
      <div class="form-group">
        <el-input
            type="text"
            v-model.lazy.trim="username"
            class="form-control"
            placeholder="用户名"
        ></el-input>
      </div>
      <div class="form-group" v-if="title === 'Register'">
        <el-input
            type="text"
            v-model.lazy.trim="user_id"
            class="form-control"
            placeholder="学生ID"
        ></el-input>
      </div>
      <div class="form-group" v-if="title === 'Register'">
        <el-input
            type="email"
            v-model.lazy.trim="email"
            class="form-control"
            placeholder="邮箱"
        ></el-input>
      </div>
      <div class="form-group">
        <el-input
            type="password"
            v-model.lazy.trim="password"
            class="form-control"
            placeholder="密码"
        ></el-input>
      </div>
      <div class="form-group" v-if="title === 'Register'">
        <el-select
            v-model.lazy="role"
            class="m-2 radius"
            placeholder="选择角色"
        >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <el-button
          class="form-button primary"
          type="primary"
          round
          @click="submitInfo"
      >
        {{ title }}
      </el-button>
      <a
          href="#"
          class="tip"
          @click.prevent="changeFunction"
      >
        {{ title === 'Register' ? '用户登录' : '用户注册' }}
      </a>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import "element-plus/theme-chalk/el-message.css";
import { msg } from "@/assets/js/InformMsg";
import {registerSub,loginSub} from "@/network/log_reg"

export default {
  name: "LoginBox",
  data() {
    return {
      title: "Login",
      value: ref(2), // 默认角色为学生
      options: [
        { value: 0, label: "管理员" }, // 数值类型角色
        { value: 1, label: "老师" },
        { value: 2, label: "学生" },
      ],
      username: "",
      user_id: "",
      email: "",
      password: "",
      role: null, // 数值类型角色绑定
    };
  },
  methods: {
    changeFunction() {
      this.title = this.title === "Login" ? "Register" : "Login";
    },
    async submitInfo() {
      if (this.title === "Login") {
        // 登录请求校验
        if (!this.username || !this.password) {
          msg("warning", "请填写完整信息");
          return;
        }

        // 构造登录数据
        const loginObj = {
          num: this.username,
          password: this.password,
        };

        try {
          const res = await loginSub(loginObj);
          console.log(res);
          if (res.data.code === 200) {
            const token = res.data.data.token;
            const role = res.data.data.role;

            // 存储 Token 和角色
            sessionStorage.setItem('authToken', token);
            sessionStorage.setItem('userRole', role);

            msg('success', '登录成功');

            // 根据角色跳转
            const rolePaths = {
              0: '/admin',
              1: '/teacher',
              2: '/student'
            };
            const redirectPath = rolePaths[role] + "/index" || '/';
            this.$router.push({ path: redirectPath }); // 确保跳转路径有效
          }else {
            msg("error", res.data.msg);
          }
        } catch (err) {
          msg("error", err.message);
        }
      } else {
        // 注册请求校验
        if (!this.username || !this.password || !this.email || this.role === null) {
          msg("warning", "请填写完整信息");
          return;
        }

        // 学号校验：必须为数值
        if (!/^\d+$/.test(this.user_id)) {
          msg("warning", "学生ID必须为数值");
          return;
        }

        // 构造注册数据
        const registerObj = {
          name: this.username,
          num: this.user_id,
          email: this.email,
          password: this.password,
          role: parseInt(this.role, 10), // 确保 role 是数值类型
        };

        try {
          // 调用 registerSub 方法进行注册
          const res = await registerSub(registerObj);

          if (res.data.code === 200) {
            msg("success", "注册成功");
            this.changeFunction();
          } else {
            console.log(res);
            msg("error", res.data.msg);
          }
        } catch (err) {
          msg("error", err.message);
        }
      }
    },
  },
};
</script>

<style scoped>
/* 登录容器 */
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.95); /* 半透明白色背景 */
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Arial", sans-serif;
}

/* 表单标题 */
.form-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

/* 表单项 */
.form-group {
  margin-bottom: 15px;
  width: 100%;
}

/* 输入框 */
.form-control {
  width: 100%;
  border-radius: 8px;
}

/* 按钮 */
.form-button {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  transition: all 0.3s ease;
}

.form-button:hover {
  transform: scale(1.05); /* 鼠标悬停放大效果 */
}

/* 提示文字 */
.tip {
  margin-top: 15px;
  font-size: 14px;
  color: #7080e8;
  text-decoration: none;
  cursor: pointer;
}

.tip:hover {
  text-decoration: underline;
}
</style>