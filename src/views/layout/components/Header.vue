<template>
  <div class="navbar">
    <svg-icon icon-class="buy" />

    <div class="right-menu">
      <template>
        <vue-canvas-nest :config="config" :el="'.navbar'"/>
        <lang-select class="international right-menu-item"/>

        <el-dropdown class="user-name-container right-menu-item" trigger="click">
          <div class="name-wrapper">
            <span class="user-name">{{ name }}</span>
            <i class="el-icon-caret-bottom"/>
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/">
              <el-dropdown-item>
                {{ $t('navbar.home') }}
              </el-dropdown-item>
            </router-link>
            <router-link to="/userProfile">
              <el-dropdown-item>
                {{ $t('navbar.userProfile') }}
              </el-dropdown-item>
            </router-link>
            <router-link to="/shoppingList">
              <el-dropdown-item>
                {{ $t('navbar.shoppingList') }}
              </el-dropdown-item>
            </router-link>
            <router-link to="/order">
              <el-dropdown-item>
                {{ $t('navbar.order') }}
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logBox">{{ hasLogin? $t('navbar.logOut') : $t('navbar.logIn') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </div>
    <login-box/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LangSelect from '@/components/LangSelect'
import LoginBox from '@/components/LoginBox'
import vueCanvasNest from 'vue-canvas-nest'

export default {
  name: 'Header',
  components: {
    LangSelect,
    LoginBox,
    vueCanvasNest
  },
  data() {
    return {
      config: {
        color: '202,207,212',
        opacity: 0.7,
        zIndex: -2,
        count: 50
      },
      el: '.navbar'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'hasLogin'
    ])
  },
  methods: {
    logBox() {
      if (this.hasLogin) {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()// In order to re-instantiate the vue-router object to avoid bugs
        })
      } else {
        this.$store.dispatch('setShowLoginBox', true)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .international{
      vertical-align: top;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
