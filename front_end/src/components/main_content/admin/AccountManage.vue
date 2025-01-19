<template>
	<data-show :table-key="tableKey" :table-list="tableList"/>
</template>

<script>
import { AccountManageList } from '@/network/admin'

export default {
  name: "AccountManage",
  data () {
    return {
      tableList: [],
      tableKey: [
        { title: '个人编号', value: 'id' },
				{ title: '用户名', value: 'username' },
				{ title: '姓名', value: 'name' },
				{ title: '邮箱', value: 'email' },
      ]
    }
  },
	computed: {
    role () {
			return this.$route.params.role
		}
	},
	watch:{
    role() {
      this._AccountManageList()
    }
	},
  methods: {
    _AccountManageList () {
      AccountManageList({role: this.role}).then(res => {
        console.log(res)
        this.tableList = res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
