<template>
  <div class="card">
    <h3 class="card-title">我的课表</h3>

    <!-- 日期和时间模式选择 -->
    <div class="controls">
      <div class="current-date">
        当前日期：<span class="highlight">{{ currentDate }}</span>
      </div>
      <div class="date-picker">
        <label for="date">选择日期：</label>
        <input type="date" id="date" v-model="selectedDate" />
      </div>
      <div class="time-mode">
        <label for="time-mode">时间模式：</label>
        <select id="time-mode" v-model="timeMode">
          <option value="校本部/作息时间">武昌校区/作息时间</option>
          <option value="其他模式">阳逻校区</option>
        </select>
      </div>
    </div>

    <!-- 课程表 -->
    <table class="schedule-table">
      <thead>
      <tr>
        <th>周/时次</th>
        <th v-for="(day, index) in days" :key="index">{{ day }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(timeSlot, index) in timeSlots" :key="index">
        <td>{{ timeSlot }}</td>
        <td v-for="day in days" :key="day" class="schedule-cell">
          <!-- 示例课程数据 -->
          <span v-if="courses[day] && courses[day][index]">
              <strong>{{ courses[day][index].name }}</strong><br />
              {{ courses[day][index].time }}
            </span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CourseSchedule",
  data() {
    return {
      currentDate: new Date().toISOString().substr(0, 10), // 当前日期
      selectedDate: new Date().toISOString().substr(0, 10), // 默认选择当天
      timeMode: "校本部/作息时间", // 默认时间模式
      days: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"], // 一周的天数
      timeSlots: ["9:00-10:30", "10:45-12:15", "14:00-15:30", "16:00-17:30"], // 时间段
      courses: {
        // 示例课程数据
        星期一: [
          { name: "高等数学", time: "9:00-10:30" },
          { name: "大学物理", time: "10:45-12:15" },
        ],
        星期三: [
          { name: "英语写作", time: "10:45-12:15" },
          { name: "程序设计基础", time: "16:00-17:30" },
        ],
        星期五: [
          { name: "数据结构", time: "14:00-15:30" },
        ],
      },
    };
  },
};
</script>

<style scoped>
.card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(30, 136, 229, 0.2);
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(30, 136, 229, 0.4);
}

.card-title {
  font-size: 24px;
  color: #1e88e5;
  margin-bottom: 15px;
  text-align: left;
}

/* 控件样式 */
.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.controls div {
  margin: 5px 0;
}

.current-date {
  font-size: 16px;
  color: #555555;
}

.highlight {
  color: #1e88e5;
  font-weight: bold;
}

.date-picker label,
.time-mode label {
  margin-right: 10px;
  font-size: 14px;
  color: #555555;
}

.date-picker input,
.time-mode select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* 表格样式 */
.schedule-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.schedule-table th,
.schedule-table td {
  border: 1px solid #ddd;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  color: #555555;
}

.schedule-table th {
  background-color: #f0f4ff;
  color: #1e88e5;
  font-weight: bold;
}

.schedule-cell {
  height: 60px;
}

.schedule-cell span {
  display: block;
  font-size: 14px;
  color: #555555;
}

.schedule-cell strong {
  color: #1e88e5;
}
</style>