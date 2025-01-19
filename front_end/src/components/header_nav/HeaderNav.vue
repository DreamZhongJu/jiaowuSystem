<template>
	<el-container class="nav">
		<div class="left">
			<div class="logo">
				<span>学生成绩管理系统</span>
			</div>
		</div>
		<div class="right">
			<span class="search_box">
				<input type="search"><i class="iconfont icon-sousuo"/>
			</span>
			<user-info class="user-info"></user-info>
		</div>
	</el-container>
</template>

<script>
import UserInfo from '@/components/header_nav/UserInfo'

export default {
  name: 'HeaderView',
  components: {
    UserInfo
  },
  data () {
    return {
      searchIsShow: false
    }
  },
  methods: {
    searchClick () {
      this.searchIsShow = !this.searchIsShow
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/base.css';
@import '@/assets/css/header_nav.css';
/*导航栏*/
.nav {
    background-color: #fff;
    width: 100%;
    height: 60px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
}
/*左边部分*/
/* Logo */
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px; /* 增加字体大小，使其更具视觉冲击力 */
    font-weight: bold;
    font-style: normal; /* 去掉斜体，使字体更加清晰 */
    color: #2c3e50; /* 使用深色调，增加稳重感 */
    margin-left: 15px; /* 调整左边距，使其更加平衡 */
    padding: 0 20px; /* 增加内边距，使Logo看起来更为舒适 */
    border-radius: 10px; /* 增加圆角，使元素更加柔和 */
    box-shadow: none; /* 移除阴影 */
    transition: background-color 0.3s ease; /* 增加背景颜色的过渡效果 */
    user-select: none; /* 禁止复制 */
}

.logo:hover {
    background-color: #e0e4e8; /* 悬停时改变背景色，增加互动性 */
}


/*右边部分*/
.right {
    position: absolute;
    right: 40px;
    display: flex;
    align-items: center;
}

.search-btn {
    position: absolute;
    right: 70px;
}

.icon-sousuo:active {
    font-size: 20px;
    color: #409eff;
}

/*搜素框*/
.search_box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #ccc;
    border-radius: 50px;
    padding: 0 10px;
    height: 30px;
}

.search_box input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: #666;
    margin-left: 10px;
}

/*搜索按钮*/
.icon-sousuo {
    font-size: 20px;
    color: #ccc;
}

.user-info {
    margin-left: 20px;
}

</style>
