<template>
	<div class="score-manage">
		<table-box class="score-table" :table-list="scoreList" :table-key="tableKey"/>
	</div>
</template>

<script>
import { getStudentScore } from '@/network/student'

export default {
  name: "scoreManager",
  data () {
    return {
      stu_id: this.$store.state.account.user_id,
      scoreList: [],
      tableKey: [
        { title:'学号', value: 'stu_id' },
        { title:'姓名', value: 'stu_name' },
        { title:'课程', value: 'course_name' },
        { title:'成绩', value: 'score' }
      ]
    }
  },
  components: {
    TableBox: () => import('@/components/common/TableBox')
  },
  mounted () {
    this.getScore(this.stu_id)
  },
  methods: {
    getScore (stu_id) {
      let obj = { stu_id: stu_id }
      getStudentScore(obj).then(res => {
        this.scoreList = res.data.data
      })
    }
  }
}
</script>

<style scoped>
.score-manage {
    background-color: #fff;
}

.score-table {
    padding: 10px 30px;
}
</style>
