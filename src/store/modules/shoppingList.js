import Cookies from 'js-cookie'
import { setShoppingList, deleteShoppingList } from '@/utils/shoppingList'

const shoppingList = {
  state: {
    shoppingList: getListInCookie()
  },
  mutations: {
    CHANGE_SHOPPING_LIST: (state, shoppingList) => {
      state.shoppingList = shoppingList
      setShoppingList(state.shoppingList)
    },
    ADD_SHOPPING_LIST: (state, newItem) => {
      state.shoppingList.push(newItem)
      setShoppingList(state.shoppingList)
    },
    REMOVE_SHOPPING_LIST: (state, item) => {
      state.shoppingList = []
      deleteShoppingList()
    }
  },
  actions: {
    changeShoppingList({ commit }, shoppingList) {
      commit('CHANGE_SHOPPING_LIST', shoppingList)
    },
    addShoppingList({ commit }, newItem) {
      commit('ADD_SHOPPING_LIST', newItem)
    },
    removehoppingList({ commit }, newItem) {
      commit('ADD_SHOPPING_LIST', newItem)
    }
  }
}

function getListInCookie() {
  const cookie = Cookies.get('shopping_list')
  if (cookie) {
    return JSON.parse(cookie)
  }
  return []
}

export default shoppingList
