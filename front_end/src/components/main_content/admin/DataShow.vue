<template>
	<div class="data-show">
		<div class="data-show-header">
			<!--	搜索框-->
			<div class="search">
				<div class="demo-input-suffix">
					<el-row :gutter="20" justify="space-between">
						<el-input
								v-model="input1"
								class="w-50 m-2 search-input"
								placeholder="搜索"
								:suffix-icon="Search"
						/>
						<!--	添加按钮-->
						<el-button
								type="primary"
								:icon="Plus"
								class="add-button"
						>添加
						</el-button>
					</el-row>
				</div>
			</div>
		</div>
		<!--		表格-->
		<div class="table">
			<table-box :table-list="tableList" :table-key="tableKey">
				<template v-slot:operation>
					<el-table-column label="操作">
						<template #default="scope">
							<slot name="Edit"></slot>
							<el-button
									type="danger"
									round
									size="small"
									@click="Delete(scope.row)">
								删除
							</el-button>
						</template>
					</el-table-column>
				</template>
			</table-box>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'
import { Search, Plus } from '@element-plus/icons-vue'

export default {
  name: "DataShow",
  props: {
    tableList: {
      type: Array,
      default: () => []
    },
    tableKey: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      input1: ref(''),
      Search: Search,
      Plus: Plus
    }
  }
}
</script>

<style scoped>
.data-show {
		margin: 0 20px;
}
.search-input {
    margin-left: 15px;
    width: 250px;
}
.add-button{
		margin-right: 30px;
}
</style>
