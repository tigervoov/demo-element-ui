<template>
  <div>
    <el-dialog
      :title="$t('navbar.logIn')"
      :visible="showLoginBox"
      :before-close="close"
      width="30%">
      <el-form>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" type="text" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="form.pass" type="password" autocomplete="off"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">{{ $t('navbar.logIn') }}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'LoginBox',
  data() {
    return {
      form: {
        username: '',
        pass: ''
      }
    }
  },
  computed: {
    showLoginBox() {
      return this.$store.getters.showLoginBox
    }
  },
  methods: {
    login() {
      this.$store.dispatch('LoginByUsername', this.form).then(() => {
        this.$store.dispatch('setShowLoginBox', false)
      }).catch(() => {
        this.$message({ type: 'error', message: this.$t('error.login') })
      })
    },
    close() {
      this.$store.dispatch('setShowLoginBox', false)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
