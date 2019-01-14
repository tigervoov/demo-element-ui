import Layout from '@/views/layout/Layout'

const userProfileRouter = {
  path: '/userProfile',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/profile/userInfo'),
    name: 'userProflie',
    meta: { title: 'userProflie', noCache: true }
  }]
}

export default userProfileRouter
