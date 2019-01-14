import Mock from 'mockjs'
import MaketAPI from './market'
import loginAPI from './login'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// 商场相关
Mock.mock(/\/ship/, 'get', MaketAPI.productList)
Mock.mock(/\/booking/, 'post', MaketAPI.bookingResult)
Mock.mock(/\/order/, 'get', MaketAPI.orderList)
Mock.mock(/\/order/, 'delete', MaketAPI.cancelResult)
Mock.mock(/\/user/, 'get', MaketAPI.userInfo)

export default Mock
