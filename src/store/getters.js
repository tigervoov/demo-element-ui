const getters = {
  language: state => state.app.language,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  errorLogs: state => state.errorLog.logs,
  shoppingList: state => state.shoppingList.shoppingList,
  hasLogin: state => state.user.hasLogin,
  showLoginBox: state => state.app.showLoginBox
}
export default getters
