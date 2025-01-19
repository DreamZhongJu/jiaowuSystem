<template>
	<div class="content">
		<profile-info  />
	</div>
</template>

<script>
import ProfileInfo from '@/components/main_content/profile/ProfileInfo'
export default {
  name: "IndexContent",
  components: {
		ProfileInfo
  },
}
</script>

<style scoped>
.content{
		padding: 30px;
}
</style>
