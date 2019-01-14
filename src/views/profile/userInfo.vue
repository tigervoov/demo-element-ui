<template>
  <div class="container">
    <el-form ref="form" :model="form" :rules="rules" style="width: 600px">
      <el-form-item label="username" prop="username">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item label="emailAddress" prop="email">
        <el-input v-model="form.email" type="email"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { userProfile, updateUserInfo } from '@/api/userProfile'

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        email: ''
      },
      // userName: this.$store.getters.name,
      rules: {
        username: [
          { required: true, message: this.$t('usersList.validatePrefix') + this.$t('usersList.userName'), trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('usersList.validatePrefix') + this.$t('usersList.password'), trigger: 'blur' }
        ],
        email: [
          { required: true, message: this.$t('usersList.validatePrefix') + this.$t('usersList.emailAddress'), trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.fetchUserInfo()
  },
  methods: {
    async fetchUserInfo() {
      const result = await userProfile()
      this.form = result.data
    },
    onSubmit(form) {
      this.$refs[form].validate((vaild) => {
        if (vaild) {
          this.userSave()
        }
      })
    },
    async userSave() {
      await updateUserInfo(this.form)
      this.$store.dispatch('GetUserInfo')
      this.$message({
        message: '更新成功',
        type: 'success'
      })
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 16px;
}
</style>
