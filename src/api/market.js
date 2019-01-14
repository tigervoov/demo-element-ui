import request from '@/utils/request'

export function getShips(query) {
  return request({
    url: '/ship',
    method: 'get',
    params: query
  })
}

export function updateProduct(data) {
  return request({
    url: '/product',
    method: 'post',
    data: data
  })
}

export function handoverBookingList(data) {
  return request({
    url: '/booking',
    method: 'post',
    data: data
  })
}

export function fetchOrderList(query) {
  return request({
    url: '/order',
    method: 'get',
    params: query
  })
}

export function cancelOrder(data) {
  return request({
    url: '/order',
    method: 'delete',
    data: data
  })
}

