<template>

    <v-card height="100%" class="mt-15" > <!-- Añadir color a la barra lateral -->
        <v-navigation-drawer
            permanent
            expand-on-hover
            left
            v-model="drawer"
        >
            <v-list>
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                        <v-img src="../assets/user.jpg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            Nombre de usuario
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Tipo de usuario(Solo para probar)
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>
            
            <v-list
            nav
            dense
            >
                <v-list-item
                v-for="item in items"
                :key="item.nombre"
                router :to="item.route"
                @click="drawer=!drawer"
                link>
                    <v-list-item-icon>
                        <v-icon>{{item.icono}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.nombre}}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>

        </v-navigation-drawer>
    </v-card>

</template>

<script>
    export default{
        data () {
      return {
        items: [
          { nombre: 'Mascotas', icono: 'mdi-paw', route:'/mascotas' },
          { nombre: 'Reservar citas', icono: 'mdi-calendar', route:'/citas' },
          { nombre: 'Historial', icono: 'mdi-timetable', route:'/historial' },
        ],
      }
    },
    }
</script>
