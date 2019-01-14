import Cookies from 'js-cookie'

const app = {
  state: {
    language: Cookies.get('language') || 'en',
    showLoginBox: false
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    SET_SHOW_LOGINBOX: (state, flag) => {
      state.showLoginBox = flag
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    setShowLoginBox({ commit }, flag) {
      commit('SET_SHOW_LOGINBOX', flag)
    }
  }
}

export default app
