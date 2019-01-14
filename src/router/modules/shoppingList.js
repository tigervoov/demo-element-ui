import Layout from '@/views/layout/Layout'

const marketRouter = {
  path: '/shoppingList',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/order/shoppingList'),
    name: 'shoppingList',
    meta: { title: 'shoppingList', noCache: true }
  }]
}

export default marketRouter
