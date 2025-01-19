<template>
	<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			:router="true">
	<el-menu-item
			v-for="item in this.Info.staticHandle" :key="item"
			:index="item.path"
			@click="menuClick(item)">
		<el-icon>
			<Tickets/>
		</el-icon>
		<span>{{ item.title }}</span>
	</el-menu-item>
	</el-menu>
</template>

<script>
import { Tickets } from '@element-plus/icons'

export default {
  name: "AsideStaticMenu",

  components: {
    Tickets
  },
  inject: ['Info'],
  methods: {
    menuClick (item) {
      this.$store.commit('setMenuActive', item)
      this.$router.push(item.path)
    }
  }
}
</script>

<style scoped>

</style>
>
