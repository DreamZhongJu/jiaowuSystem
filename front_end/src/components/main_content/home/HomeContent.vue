<template>
  <div class="home-content">
    <nav class="navbar">
      <div class="logo">学生成绩管理系统</div>
    </nav>

    <div class="welcome-section">
      <h1>欢迎回来！</h1>
      <p>您可以在这里查看您的班级成绩和课程信息。</p>
    </div>

    <div class="dashboard">
      <div class="card">
        <h3>班级成绩</h3>
        <p>平均分：85</p>
      </div>
      <div class="card">
        <h3>课程进度</h3>
        <p>已完成：70%</p>
      </div>
      <div class="card">
        <h3>最新通知</h3>
        <p>查看最新的校内公告和课程安排。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
}
</script>

<style scoped>
.home-content {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
  background-color: #f4f7f9;
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 10px 20px;
  border-radius: 8px;
}

.navbar .logo {
  font-size: 24px;
  color: #ecf0f1;
}

.navbar .nav-links {
  list-style: none;
  display: flex;
}

.navbar .nav-links li {
  margin: 0 15px;
}

.navbar .nav-links a {
  color: #ecf0f1;
  text-decoration: none;
  font-size: 18px;
}

.welcome-section {
  margin-top: 30px;
  text-align: center;
}

.welcome-section h1 {
  font-size: 36px;
  color: #34495e;
}

.welcome-section p {
  font-size: 18px;
  color: #7f8c8d;
}

.dashboard {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  width: 30%;
  text-align: center;
}

.card h3 {
  font-size: 24px;
  color: #2980b9;
}

.card p {
  font-size: 16px;
  color: #7f8c8d;
}

.card a {
  display: inline-block;
  margin-top: 10px;
  color: #2980b9;
  text-decoration: none;
  font-weight: bold;
}

.card a:hover {
  text-decoration: underline;
}
</style>
