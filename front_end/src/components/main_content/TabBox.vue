<template>
	<el-tabs
			v-model="editableTabsValue"
			type="card"
			closable
			class="demo-tabs"
			@tab-remove="handleRemove"
	>
		<el-tab-pane
				v-for="item in editableTabs"
				:key="item.name"
				:label="item.title"
				:name="item.name"
				@click="handleClick(item)"
		>
		</el-tab-pane>
	</el-tabs>
</template>
<script>
import { ref } from 'vue'

export default {
  name: "TabBox",
  methods: {
    handleClick (item) {
      this.$router.push(item.path)
    }
  },
  watch: {
    '$store.state.menuInfo.title' (val) {
      this.handleAdd(val)
    }
  },
  mounted () {
    this.handleAdd('主页')
  },
  setup () {
    const editableTabsValue = ref('2')
    const editableTabs = ref([
      {
        title: '主页',
        name: '0'
      }
    ])
    let tabIndex = 0
    const handleAdd = (title, path) => {
      //  如果已经存在该tab，跳转到该tab，否则添加标签
      let isExist = false
      let ctabIndex = 0
      editableTabs.value.forEach((tab, index) => {
        if (tab.title === title) {
          isExist = true
          ctabIndex = index
          console.log(tab)
        }
      })
      if (isExist) {
        // 存在时，跳转到该tab
        editableTabsValue.value = ctabIndex - 1
      } else {
        // 不存在时，添加tab，并跳转到该tab
        editableTabs.value.push({
          title: title,
          name: tabIndex++, // 用于标识tab
          path: path
        })
        editableTabsValue.value = tabIndex - 1
      }
    }

    const handleRemove = (targetName) => {
      const tabs = editableTabs.value
      let activeName = editableTabsValue.value
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      editableTabsValue.value = activeName
      editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
    }
    return {
      editableTabsValue,
      editableTabs,
      handleAdd,
      handleRemove
    }
  }
}
</script>
<style>

</style>
