<template>
	<el-form :model="form" label-width="auto" class="form">
		<el-form-item v-for="item in form" :key="item" :label="item.title" >
			<el-input v-model="item.value" :disabled="item.disabled"/>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
  name: "FormInputBox",
	props: {
		form: {
			type: Object
		}
	}
}
</script>

<style scoped>

</style>
