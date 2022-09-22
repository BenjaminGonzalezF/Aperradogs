import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registrarse',
    name: 'registrarse',
    component: () => import('../views/Registrarse.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
