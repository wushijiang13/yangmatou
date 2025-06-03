import home from './views/home.vue'
import test from './views/test.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/goods/detail',
    name: 'goodsDetail',
    component: ()=>import('./views/goods/detail.vue')
  },
  {
    path: '/user/userinfo',
    name: 'userinfo',
    component: ()=>import('./views/user/userinfo.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('./views/error.vue')
  }
]

export default routes
