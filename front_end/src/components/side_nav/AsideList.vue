<template>
	<el-col :span="24">
		<el-menu
				default-active="2"
				class="el-menu-vertical-demo"
		>
			<aside-static-menu/>
			<aside-openal-menu/>
		</el-menu>
	</el-col>
</template>

<script>
import AsideOpenalMenu from '@/components/side_nav/AsideOpenalMenu'
import AsideStaticMenu from '@/components/side_nav/AsideStaticMenu'

export default {
  name: "AsideList",
  components: {
    AsideStaticMenu,
    AsideOpenalMenu
  }

}
</script>

<style scoped>

</style>
