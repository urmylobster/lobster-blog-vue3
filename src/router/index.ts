import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes : Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/blog',
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/blog/index.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('@/views/blog/add.vue'),
  },
  {
    path: '/hello',
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