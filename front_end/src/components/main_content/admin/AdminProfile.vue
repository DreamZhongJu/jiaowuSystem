<template>
	<div class="admin-profile">
		<form-input-box :form="form2" class="profile-form-item"/>
	</div>
</template>

<script>
import { getAdminInfo } from '@/network/admin'

export default {
  name: "AdminProfile",
  data () {
    return {
      username: this.$store.state.account.username,
      form2: []
    }
  },
  mounted () {
    this._getAdminInfo()
  },
  methods: {
    _getAdminInfo () {
      getAdminInfo({ username: this.username }).then(res => {
        console.log(res)
        this.form2 = res.data.data[0]
      })
    }
  }
}
</script>

<style scoped>
.profile-form-item {
    margin: 0 80px;
}
</style>
