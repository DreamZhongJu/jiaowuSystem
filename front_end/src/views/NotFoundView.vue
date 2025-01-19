<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="not-found-title">404</h1>
      <p class="not-found-message">
        抱歉，我们找不到您访问的页面。
      </p>
      <div class="not-found-actions">
        <button @click="goHome" class="action-button primary">返回首页</button>
        <button @click="goBack" class="action-button secondary">返回上一页</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundView",
  methods: {
    goHome() {
      this.$router.push({ path: "/" }); // 返回首页
    },
    goBack() {
      this.$router.go(-1); // 返回上一页
    },
  },
};
</script>

<style scoped>
/* 页面容器 */
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb); /* 渐变背景 */
  color: #333;
  font-family: "Roboto", Arial, sans-serif;
  text-align: center;
}

/* 内容区域 */
.not-found-content {
  max-width: 500px;
  padding: 20px;
  background: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  animation: slideIn 0.8s ease-out; /* 增加滑入动画 */
}

/* 404 标题 */
.not-found-title {
  font-size: 6rem;
  font-weight: 800;
  color: #1e88e5; /* 主色调 */
  margin-bottom: 20px;
}

/* 提示信息 */
.not-found-message {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
}

/* 按钮区域 */
.not-found-actions {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

/* 按钮样式 */
.action-button {
  padding: 10px 25px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
}

.action-button.primary {
  background-color: #1e88e5;
  color: white;
}

.action-button.primary:hover {
  background-color: #1565c0;
}

.action-button.secondary {
  background-color: #e0e0e0;
  color: #333;
}

.action-button.secondary:hover {
  background-color: #bdbdbd;
}

/* 动画效果 */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>