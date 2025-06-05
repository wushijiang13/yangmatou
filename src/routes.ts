import home from './views/home.vue'
import test from './views/test.vue'

const routes = [
  {
    path: '/goods/detail',
    name: 'goodsDetail',
    component: ()=>import('./views/goods/detail.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/user/info',
    name: 'info',
    component: ()=>import('./views/user/info.vue')
  },
  {
    path: '/user/order',
    name: 'order',
    component: ()=>import('./views/user/order.vue')
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
