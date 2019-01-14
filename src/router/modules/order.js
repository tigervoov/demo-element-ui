import Layout from '@/views/layout/Layout'

const marketRouter = {
  path: '/order',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/order/order'),
    name: 'order',
    meta: { title: 'Order', noCache: true }
  }]
}

export default marketRouter
