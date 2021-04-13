import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/calculator1',
    component: () => import('@/views/Calculator1.vue')
  },
  {
    path: '/calculator2',
    component: () => import('@/views/Calculator2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL
})

export default router