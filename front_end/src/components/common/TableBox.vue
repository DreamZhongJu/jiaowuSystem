<template>
	<el-table :data="tableList"
          stripe style="width: 100%"
          height="500"
          class="table">
		<el-table-column
				:prop="item.value"
				:label="item.title"
				:sortable="item.sortable"
				v-for="item in tableKey"
				:key="item"/>
		<slot name="operation"></slot>
	</el-table>
</template>
<script>
export default {
  name: "TableBox",
  data () {
    return {
      role: this.$store.state.account.role
    }
  },
  props: {
    tableList: {
      type: Array,
      default: () => []
    },
    tableKey: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.table {
    text-align: center;
}
</style>
