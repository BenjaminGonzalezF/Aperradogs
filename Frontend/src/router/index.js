import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Nosotros from '../components/Nosotros.vue'
import InicioSesion from '../components/InicioSesion.vue'
import Principal from '../components/Principal.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/Iniciosesion',
    name: 'InicioSesion',
    component: InicioSesion
  },
  {
    path: '/Principal',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/ingreso',
    name: 'login',
    component: () => import('../views/Login.vue')
  },{
    path: '/usuario',
    name: 'usuario',
    component: () => import('../components/PrincipalUsuario/VistaUsuario.vue')
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