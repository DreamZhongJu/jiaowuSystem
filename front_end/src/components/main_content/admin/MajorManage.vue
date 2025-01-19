<template>
	<div class="major-manage">
		<data-show :table-list="tableList" :table-key="tableKey" />
	</div>
</template>

<script>
import { MajorManageList } from '@/network/admin'

export default {
  name: "MajorManage",
  data () {
    return {
      tableKey: [
        { title: '专业编号', value: 'id'},
        { title: '学院', value: 'college', sortable: 1 },
        { title: '专业 ', value: 'major' },
      ],
      tableList: []
    }
  },
  mounted () {
    this._MajorManageList()
  },
  methods: {
    _MajorManageList () {
      MajorManageList().then(res => {
        this.tableList = res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
