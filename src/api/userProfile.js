import request from '@/utils/request'

export function userProfile(query) {
  return request({
    url: '/user',
    method: 'get',
    params: query
  })
}

export function updateUserInfo(data) {
  return request({
    url: '/user',
    method: 'post',
    data: data
  })
}
