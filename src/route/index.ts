import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouterOptions,
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('comp/HelloWorld.vue'),
  },
]

const routeOptions: RouterOptions = {
  history: createWebHashHistory(),
  routes,
}

export default createRouter(routeOptions)
