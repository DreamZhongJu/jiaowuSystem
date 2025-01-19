<template>
	<div class="course-manage">
		<data-show :table-list="tableList" :table-key="tableKey">
			<template v-slot:Edit>
				<el-button
						type="primary"
						round
						size="small"
						@click="Edit(scope.row)">
					修改
				</el-button>
			</template>
		</data-show>
	</div>
</template>

<script>
import { CourseManageList } from '@/network/admin'

export default {
  name: "CourseManage",
  data () {
    return {
      tableKey: [
        { title: '课称编号', value: 'id', sortable: 1 },
        { title: '课称名称', value: 'name' },
        { title: '课程类别', value: 'type' },
        { title: '代课教师', value: 'teacher_name' },
        { title: '开课时间', value: 'start_time' },
        { title: '上课地点', value: 'place' },
        { title: '课时', value: 'hours' }
      ],
      tableList: []
    }
  },
  mounted () {
    this._CourseManageList()
  },
  methods: {
    _CourseManageList () {
      CourseManageList().then(res => {
        console.log(res.data.data)
        this.tableList = res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
