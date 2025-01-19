<template>
  <div class="login-view">
    <!-- 背景装饰 -->
    <div class="background-circles">
      <div class="circle circle-lg"></div>
      <div class="circle circle-md"></div>
      <div class="circle circle-sm"></div>
    </div>

    <!-- 登录框 -->
    <div class="main-container">
      <!-- 标题 -->
      <!-- 登录框内容 -->
      <div class="login-box">
        <login-box></login-box>
      </div>
      <!-- 底部说明 -->
    </div>
  </div>
</template>

<script>
import LoginBox from "@/components/login/LoginBox";

export default {
  name: "LoginView",
  components: {
    LoginBox,
  },
};
</script>

<style scoped>
/* 页面根容器样式 */
.login-view {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #a1c4fd, #c2e9fb); /* 优雅的渐变背景 */
  overflow: hidden;
  font-family: "Arial", sans-serif;
}

/* 背景装饰元素 */
.background-circles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle-lg {
  width: 300px;
  height: 300px;
  top: -150px;
  left: -200px;
}

.circle-md {
  width: 200px;
  height: 200px;
  bottom: -100px;
  right: -150px;
}

.circle-sm {
  width: 100px;
  height: 100px;
  top: 100px;
  right: 50px;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

/* 主容器样式 */
.main-container {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  box-sizing: border-box;
}

/* 标题容器样式 */
.title-container {
  margin-bottom: 20px; /* 标题和登录框之间的间距 */
}

/* 标题样式 */
.title {
  font-size: 36px;
  color: #ffffff;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  margin: 0; /* 去除标题的默认间距 */
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.2); /* 透明背景块，增强可读性 */
  border-radius: 8px; /* 圆角背景 */
  display: inline-block;
}

/* 登录框样式 */
.login-box {
  background: #ffffff;
  border-radius: 16px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* 底部说明文字 */
.footer-text {
  font-size: 14px;
  color: #ffffff;
  margin-top: 20px;
  opacity: 0.8;
}
</style>