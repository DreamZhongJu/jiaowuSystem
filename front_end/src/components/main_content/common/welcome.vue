<template>
  <div class="home-content">
    <!-- 欢迎部分 -->
    <div class="welcome-section">
      <h1>欢迎回来，{{ userName }}！</h1>
      <p>您可以在这里查看您的通知和课程信息。</p>
    </div>

    <!-- 信息卡片 -->
    <div class="dashboard">
      <!-- 第一行：三个紧凑排列的卡片 -->
      <div class="row">
        <div class="card">
          <h3 class="card-title">最新通知</h3>
          <p class="card-content">查看最新的校内公告和课程安排。</p>
        </div>
      </div>

      <!-- 第二行：课程表独占一行 -->
      <div class="row">
        <CourseSchedule />
      </div>
    </div>
  </div>
</template>

<script>
import CourseSchedule from "./CourseSchedule.vue";

export default {
  name: "HomeContent",
  components: {
    CourseSchedule,
  },
  methods: {
    fetchUsername() {
      const savedUsername = sessionStorage.getItem("userName");
      if (savedUsername) {
        this.userName = savedUsername;
      }
    },
  },
  data() {
    return {
      userName: "用户", // 默认用户名
    };
  },
  created() {
    this.fetchUsername();
  },
};
</script>

<style scoped>
/* 引入 Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

/* 页面整体样式 */
.home-content {
  font-family: "Roboto", Arial, sans-serif; /* 更加现代美观的字体 */
  color: #333;
  padding: 20px;
  background: linear-gradient(135deg, #f0f4ff, #ffffff); /* 渐变背景 */
  min-height: 100vh;
}

/* 欢迎部分 */
.welcome-section {
  margin-top: 30px;
  text-align: center;
}

.welcome-section h1 {
  font-size: 38px;
  color: #1e88e5; /* 蓝色标题 */
  font-weight: 700; /* 使用更粗的字体权重 */
  margin-bottom: 10px;
}

.welcome-section p {
  font-size: 18px;
  color: #555555; /* 深灰色字体 */
  margin-top: 0;
}

/* 信息卡片容器 */
.dashboard {
  margin-top: 50px;
  display: flex;
  flex-direction: column; /* 垂直排列行 */
  gap: 20px; /* 行间距 */
}

/* 每行卡片容器 */
.row {
  display: flex;
  justify-content: space-between; /* 卡片均匀分布 */
  gap: 20px; /* 卡片间距 */
}

/* 卡片样式 */
.card {
  background-color: #ffffff; /* 白色背景 */
  padding: 20px 25px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(30, 136, 229, 0.2); /* 卡片阴影 */
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1; /* 均分宽度 */
}

.card:hover {
  transform: translateY(-5px); /* 悬停时上浮 */
  box-shadow: 0 8px 24px rgba(30, 136, 229, 0.4); /* 悬停时加深阴影 */
}

/* 卡片标题 */
.card-title {
  font-size: 24px;
  color: #1e88e5; /* 蓝色标题 */
  margin-bottom: 15px;
  font-weight: 500; /* 字体权重更优雅 */
}

/* 卡片内容 */
.card-content {
  font-size: 16px;
  color: #555555; /* 深灰色字体 */
  margin: 0;
}

/* 高亮文本 */
.highlight {
  color: #1e88e5; /* 蓝色高亮文字 */
  font-weight: bold;
}

/* 单独占一行的卡片 */
.full-width {
  flex: none; /* 不均分宽度 */
  width: 100%; /* 占满一行 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .row {
    flex-direction: column; /* 小屏幕时垂直排列 */
    gap: 20px; /* 垂直间距 */
  }

  .card {
    width: 100%; /* 小屏幕时卡片占满行 */
  }

  .full-width {
    width: 100%;
  }
}
</style>