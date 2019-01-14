import Vue from 'vue'
import Router from 'vue-router'

import marketRouter from './modules/market'
import shoppingListRouter from './modules/shoppingList'
import orderRouter from './modules/order'
import userProfileRouter from './modules/userProfile'

Vue.use(Router)

// currently we do not use permisson
export const constantRouterMap = [
  marketRouter,
  shoppingListRouter,
  orderRouter,
  userProfileRouter
]

export default new Router({
  mode: 'history', // require service support
  routes: constantRouterMap
})
