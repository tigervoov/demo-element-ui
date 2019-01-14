import Layout from '@/views/layout/Layout'

const marketRouter = {
  path: '/',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/market/market'),
    name: 'Market',
    meta: { title: 'ProductList', noCache: true }
  }]
}

export default marketRouter
