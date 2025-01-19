<template>
	<div class="common-layout ">
		<el-container class="main-page">
			<!--    header_nav -->
			<el-header class="header">
				<header-nav></header-nav>
			</el-header>
			<el-container>
				<!--    aside -->
				<el-aside class="aside">
					<aside-list />
				</el-aside>
				<!-- main-content -->
				<el-main class="main-content">
					<tab-box/>
					<!--					<index-content/>-->
					<router-view name="teaTable"/>
				</el-main>
			</el-container>
		</el-container>

	</div>
</template>

<script>
import HeaderNav from '@/components/header_nav/HeaderNav'
import { Info } from '@/router/aside/teacher'

export default {
  name: 'TeacherView',
  components: {
    HeaderNav
  },
  data () {
    return {
      role: this.$store.state.account.role
    }
  },
  provide() {
    return {
      title: this.$store.state.menuInfo.title,
      path: this.$store.state.menuInfo.path,
      Info: Info
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/base.css';

* {
    margin: 0;
    padding: 0;
}

/*整个界面*/
.main-page {
    background-color: #f0f0f0;
    width: 100%;
    height: 100vh;
}

/*顶部导航栏*/
.header {
    padding: 0;
    height: 60px;
}

/*侧面导航栏*/
.aside {
    width: 200px;
    background-color: #fff;
    height: calc(100vh - 60px);
}

/*主要内容显示*/
.main-content {
    padding: 0;
    background-color: #fff;
    border-left: #cccccc 1px solid;
}
</style>
