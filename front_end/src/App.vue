<template>
	<router-view v-slot="{ Component, route }">
		<keep-alive >
			<component
				:key="route.name"
				:is="Component"
				v-if="route.meta.isKeepAlive"
			/>
		</keep-alive>
		<component
			:key="route.name"
			:is="Component"
			v-if="!route.meta.isKeepAlive"
		/>
	</router-view>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import '@/assets/css/base.css';
.view{
    width: 100%;
    height: 100%;
}
</style>
