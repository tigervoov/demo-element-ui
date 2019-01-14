import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// you may import global css here
// import '@/styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import i18n from './lang'
import './icons'
import './mock'

Vue.config.productionTip = false

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
