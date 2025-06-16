import home from './views/home.vue'
import test from './views/test.vue'
import detail from './views/goods/detail.vue'
import info from './views/user/info.vue'
import login from './views/user/login.vue'
import order from './views/user/order.vue'
import record from './views/user/record.vue'
import accounts from './views/user/accounts.vue'
import category from './views/classify/category.vue'

const routes = [
  {
    path: '/goods/detail',
    name: 'goodsDetail',
    component: detail
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/user/info',
    name: 'info',
    component: info
  },
  {
    path: '/user/order',
    name: 'order',
    component: order
  },
  {
    path: '/user/record',
    name: 'record',
    component: record
  },
  {
    path: '/user/accounts',
    name: 'accounts',
    component: accounts
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
