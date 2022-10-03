import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* hola: "Te saludo", */
    mostrarPass:false,/* Oculta y muestra el pass */
    registro:false,
    dialog:false,
    drawer:false,
    /* items: [
      { nombre: 'Mascotas', icono: 'mdi-paw' },
      { nombre: 'Reservar citas', icono: 'mdi-calendar' },
      { nombre: 'Historial', icono: 'mdi-timetable' },
    ], */
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
