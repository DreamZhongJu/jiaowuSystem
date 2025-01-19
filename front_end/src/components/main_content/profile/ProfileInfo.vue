<template>
	<el-form :model="form1" label-width="120px" class="profile-form">
		<el-form-item v-if="role === 'student'" :label="form1.stu_id.title">
			<el-input v-model="form1.stu_id.value" />
		</el-form-item>
		<el-form-item :label="form1.name.title">
			<el-input v-model="form1.name.value" placeholder="修改姓名"/>
		</el-form-item>
		<el-form-item :label="form1.sex.title">
			<el-input v-model="form1.sex.value" placeholder="修改性别"/>
		</el-form-item>
		<el-form-item :label="form1.birthday.title">
			<el-date-picker
				v-model="form1.birthday.value"
				type="date"
				placeholder="选择出生日期"
				style="width: 100%"
			/>
		</el-form-item>
		<form-input-box :form="form2" class="profile-form-item" />
		<el-form-item class="submit-button">
			<el-button type="primary" @click="submitForm">保存修改</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
import { getStudentInfo, updateStudentInfo } from '@/network/student';
import { getTeacherInfo, updateTeacherInfo } from '@/network/teacher';
import FormInputBox from '@/components/common/FormInputBox';
import { msg } from '@/assets/js/InformMsg'; 

export default {
  name: "ProfileInfo",
  components: {
    FormInputBox
  },
  data() {
    return {
      form1: {
        stu_id: {},
        name: {},
        sex: {},
        birthday: {}
      },
      form2: [],
      username: this.$store.state.account.username,
      user_id: this.$store.state.account.user_id,
      role: this.$store.state.account.role
    };
  },
  mounted() {
    this.getProfileInfo();
  },
  methods: {
    getProfileInfo() {
      if (this.role === 'student') {
        getStudentInfo({ username: this.username }).then(res => {
          this.form1 = res.data.data[0];
          this.form2 = res.data.data[1];
        });
      } else {
        getTeacherInfo({ user_id: this.user_id }).then(res => {
          this.form1 = res.data.data[0];
          this.form2 = res.data.data[1];
        });
      }
    },
    submitForm() {
      const updateData = {
        ...this.form1,
        ...this.form2
      };

      if (this.role === 'student') {
        updateStudentInfo(updateData).then(() => {
          msg('success', '信息更新成功');
        }).catch(err => {
          console.error('信息更新失败:', err);
          msg('error', '信息更新失败');
        });
      } else {
        updateTeacherInfo(updateData).then(() => {
          msg('success', '信息更新成功');
        }).catch(err => {
          console.error('信息更新失败:', err);
          msg('error', '信息更新失败');
        });
      }
    }
  }
};
</script>

<style scoped>
.profile-form {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.profile-form-item {
  margin: 20px 0;
}

.submit-button {
  text-align: center;
  margin-top: 30px;
}
</style>
