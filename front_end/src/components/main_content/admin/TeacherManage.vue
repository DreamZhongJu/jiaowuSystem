<template>
	<div class="teacher-manage">
		<data-show :table-list="tableList" :table-key="tableKey">
			<template v-slot:Edit>
				<el-button
						type="primary"
						round
						size="small"
						@click="Edit(scope.row)">
					详情
				</el-button>
			</template>
		</data-show>
	</div>
</template>

<script>
import { TeacherManageList } from '@/network/admin'

export default {
  name: "TeacherManage",
  data () {
    return {
      tableKey: [
        { title: '教师编号', value: 'tea_id' },
        { title: '姓名', value: 'name' },
        { title: '性别', value: 'sex' },
        { title: '籍贯', value: 'address' },
        { title: '学院', value: 'college' },
      ],
      tableList: []
    }
  },
  mounted () {
    this._TeacherManageList()
  },
  methods: {
    _TeacherManageList () {
      TeacherManageList().then(res => {
        this.tableList = res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
