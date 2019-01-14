import Cookies from 'js-cookie'

export function setShoppingList(list) {
  Cookies.set('shopping_list', JSON.stringify(list))
}

export function deleteShoppingList() {
  Cookies.set('shopping_list', JSON.stringify([]))
}
