<template>
    <v-card>
      <v-toolbar
        flat
        color="primary"
        dark
      >
        <v-toolbar-title>Aperradogs</v-toolbar-title>
      </v-toolbar>
      <v-tabs vertical>
        <v-tab>
          <v-icon left>
            mdi-paw
          </v-icon>
          Mascotas
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-calendar
          </v-icon>
          Reservar Citas
        </v-tab>
        <v-tab>
          <v-icon left>
            mdi-timetable
          </v-icon>
          Historial
        </v-tab>
  
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                <Mascota/>
              </p>

            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text class="pa-10">
              <p>
                <Calendario></Calendario>
              </p>
  
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>
  
              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </template>
 
<script> 
import Mascota from './Mascota';
import Calendario from './Calendario.vue';

    export default{ 
        data () { 
     /* return { 
        items: [ 
          { nombre: 'Mascotas', icono: 'mdi-paw', route: './Mascota.vue'}, 
          { nombre: 'Reservar citas', icono: 'mdi-calendar', route:'/citas' }, 
          { nombre: 'Historial', icono: 'mdi-timetable', route:'/historial' }, 
        ], 
      } 
    }, */

   
    } ,
    components: {
    Mascota,
    Calendario
}
}
</script> 