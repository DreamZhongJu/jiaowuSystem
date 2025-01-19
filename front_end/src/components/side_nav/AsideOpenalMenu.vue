<template>
	<el-col :span="24">
	<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			:route="true"
	>
		<el-sub-menu v-for="(item, index) in Info.openalHandle" :key="item" :index='index'>
			<template #title>
				<el-icon>
					<Tickets/>
				</el-icon>
				<span>{{ item.title }}</span>
			</template>
			<el-menu-item
					v-for="i in item.contain" :key="i"
					:index="i.path"
					@click="menuClick(i)">
				<el-icon>
					<Link/>
				</el-icon>
				<span>{{ i.title }}</span>
			</el-menu-item>
		</el-sub-menu>
	</el-menu>
	</el-col>
</template>

<script>
import { Tickets, Link } from "@element-plus/icons"

export default {
  name: "AsideOpenalMenu",
  data () {
    return {
      activeIndex: '1'
    }
  },
  inject: ['Info'],
  components: {
    Tickets,
    Link
  },
  methods: {
    menuClick (item) {
      this.$store.commit('setMenuActive', item)
      this.$router.push(item.path)
    }
  },
	setup() {
		const handleOpen = (key, keyPath) => {
			console.log(key, keyPath)
		}
		const handleClose = (key, keyPath) => {
			console.log(key, keyPath)
		}
		return {
			handleOpen,
			handleClose
		}
	}
}
</script>

<style scoped>

</style>
