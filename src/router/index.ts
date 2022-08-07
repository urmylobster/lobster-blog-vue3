import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes : Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/About.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router