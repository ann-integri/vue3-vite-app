import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
