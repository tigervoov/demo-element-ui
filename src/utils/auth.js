import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

const loginFlagKey = 'hasLogin'

const usetNameKey = 'username'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function setHasLoginFlag(flag) {
  return Cookies.set(loginFlagKey, flag)
}

export function getHasLoginFlag() {
  return Cookies.get(loginFlagKey)
}

export function getUserName() {
  return Cookies.get(usetNameKey)
}

export function setUserName(name) {
  return Cookies.set(usetNameKey, name)
}
