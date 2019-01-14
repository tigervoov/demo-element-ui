import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken, setHasLoginFlag, getHasLoginFlag, getUserName, setUserName } from '@/utils/auth'
import { deleteShoppingList } from '@/utils/shoppingList'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: getUserName(),
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    },
    hasLogin: getHasLoginFlag() === 'true'
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_HASLOGIN: (state, flag) => {
      state.hasLogin = flag
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password).then(response => {
          const data = response.data
          deleteShoppingList()
          commit('SET_TOKEN', data.token)
          commit('SET_HASLOGIN', true)
          commit('SET_NAME', data.name)
          setToken(response.data.token)
          setHasLoginFlag(true)
          setUserName(data.name)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          commit('SET_NAME', '')
          commit('SET_HASLOGIN', false)
          removeToken()
          setUserName('')
          setHasLoginFlag(false)
          deleteShoppingList()
          setHasLoginFlag(false)
          commit('SET_HASLOGIN', false)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit, dispatch }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
          resolve()
        })
      })
    }
  }
}

export default user
