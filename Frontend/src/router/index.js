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
    path: '/usuario',
    name: 'usuario',
    component: () => import('../views/VistaUsuario.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  if ((to.name === 'login' || to.name === 'registrarse') && isAuthenticated()) next({ name: 'home' })
  else next()
})


function isAuthenticated(){
  return localStorage.getItem('token') != null;
}

export default router
