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
  
]

const router = new VueRouter({
  routes
})

export default router