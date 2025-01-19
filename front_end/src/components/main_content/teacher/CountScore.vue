<template>
	<div class="count-score">
		<!-- 左边课程管理表格 -->
		<div class="course-manage">
			<table-box class="course-table" :table-key="tableKey" :table-list="courseList">
				<template v-slot:operation>
				</template>
			</table-box>
		</div>
		<!-- 右边成绩图表 -->
		<div class="score-count-img">
			<chart-box :count-list="countList"/>
		</div>
	</div>
</template>

<script>
import { getStudentCourse } from '@/network/teacher'

export default {
  name: "CountScore",
  components: {
    ChartBox: () => import('@/components/common/ChartBox'),
    TableBox: () => import('@/components/common/TableBox')
  },
  data () {
    return {
      tea_id: this.$store.state.account.user_id,
      courseList: [],
      tableKey: [
        { title: '准考证号', value: 'stu_id' },
        { title: '名字', value: 'name' },
        { title: '分数', value: 'score' }
      ],
      countList: [
        { score: '0-300', count: 0 },
        { score: '300-400', count: 0 },
        { score: '400-500', count: 0 },
        { score: '500-600', count: 0 },
        { score: '600+', count: 0 }
      ]
    }
  },
  mounted () {
    this.getCourse(this.tea_id)
  },
  methods: {
    getCourse (tea_id) {
      let obj = { tea_id: tea_id }
      getStudentCourse(obj).then(res => {
        console.log(res)
        this.courseList = res.data
        this._countScore()
      })
    },
    // 统计成绩
    _countScore () {
      this.countList.forEach(item => item.count = 0); // 重置统计数据
      let courseList = this.courseList
      courseList.forEach(item => {
        if (item.score >= 0 && item.score <= 300) {
          this.countList[0].count++
        } else if (item.score >= 301 && item.score <= 400) {
          this.countList[1].count++
        } else if (item.score >= 401 && item.score <= 500) {
          this.countList[2].count++
        } else if (item.score >= 501 && item.score <= 600) {
          this.countList[3].count++
        } else {
          this.countList[4].count++
        }
      })
      // 更新图表数据
      this.$refs.chartBox.updateChart(this.countList)
    }
  }
}
</script>

<style scoped>
.count-score {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}

/*课程管理列表*/
.course-manage {
    width: 50%;
    border-right: 1px solid #ebeef5;
}

/*成绩图表*/
.score-count-img {
    width: 45%;
}
</style>
