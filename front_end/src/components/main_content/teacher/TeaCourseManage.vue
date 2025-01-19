<template>
	<div class="course-manage"></div>
	<table-box class="course-table" :table-key="tableKey" :table-list="courseList">
		<template v-slot:operation>
		</template>
	</table-box>
</template>

<script>
import { getStudentCourse } from '@/network/teacher'

export default {
  name: "CourseManage",
  data () {
    return {
      tea_id: this.$store.state.account.user_id,
      courseList: [],
      tableKey: [
        { title: '准考证号', value: 'stu_id' },
        { title: '自定义准考证号', value: 'id' },
        { title: '学校', value: 'school' },
        { title: '班级', value: 'class' },
        { title: '名字', value: 'name' },
        { title: '类别', value: 'dict' },
        { title: '选科', value: 'dicts' },
        { title: '分数', value: 'score' }
      ]
    }
  },
  components: {
    TableBox: () => import('@/components/common/TableBox')
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
      })
    },
    countScore (row) {
      console.log(row)
      this.$store.commit('setCountScore', row.name)
      this.$router.push({ path: '/teacher/countscore' })
    }
  }
}
</script>

<style scoped>

</style>
