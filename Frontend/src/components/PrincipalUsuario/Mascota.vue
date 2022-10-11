
<template>
    <v-container class="my-5 pt-10 mb-16">
        <v-alert v-model="notificacionExitosa" elevation="19" shaped type="success" dismissible > Usuario registrado!
    </v-alert>
    <v-alert v-model="notificacionNoExitosa" elevation="19" shaped type="error" dismissible> El email ya esta en uso
    </v-alert>
        <h1 class="subheading grey--text mb-10">Mascotas</h1>
        <v-layout row wrap class="justify-center">
            <v-flex xs5 sm6 md4 lg3 ps-1 ma-3 v-for="mascota in mascotas" :key="mascota.nombre">
                <v-card class="text-center">
                    <v-responsive class="pt-4">
                        <v-avatar size="100" class="grey-lighten-2">
                            <v-img :src="mascota.imagen" contain height="125"></v-img>
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="subheading">{{mascota.nombre}}</div>
                        <div>{{mascota.especie}}</div>
                        <div>{{mascota.raza}}</div>
                    </v-card-text>
                    <v-row>
                        <v-btn class="mb-2 ml-5" fab dark x-small color="success">
                            <v-icon dark>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </v-row>
                </v-card>
            </v-flex>
        </v-layout>
        <v-container row>
            <v-btn class="mr-16" @click="$store.state.dialog=true" fab dark right absolute color="indigo">
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>
        </v-container>
        <v-row justify="center">
            <v-dialog v-model="$store.state.dialog" persistent max-width="650px">
                <v-card>
                    <v-card-title><span class="text-h5">Registrarse</span></v-card-title>
                    <v-card-text>
                        <v-form v-model="valid">

                            <RegistrarMascota />


                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer>
                            <v-btn color="blue darken-1" text @click="$store.state.dialog=false">Cerrar</v-btn>

                            <v-btn color="blue darken-1" class="mr-4" text @click="validate">Enviar
                            </v-btn><!-- Acá deberia conectar con el back -->
                        </v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

    </v-container>
</template>
    
<script>
import RegistrarMascota from './RegistrarMascota.vue';


export default {
    components: {
            RegistrarMascota
        },
    data: () => ({

        notificacionExitosa: false, notificacionNoExitosa: false, 
        nombre: '', especie: '',
        mascotas: [
            { nombre: 'Chimichurri', especie: 'Perro', raza: 'Golden', imagen: '/Chimi.jpeg' },
            { nombre: 'Qüiky', especie: 'Perro', raza: 'kilterrier', imagen: '/gato.jpg' },
            { nombre: 'Chiturra', especie: 'Gato', raza: 'Balinés', imagen: '/perro.jpg' },
            { nombre: 'Garfield', especie: 'Gato', raza: 'Gato exotico', imagen: '/Chimi.jpeg' },
            { nombre: 'Peluza', especie: 'Conejo', raza: 'Hotot', imagen: '/gato.jpg' },

        ]
    }),
    methods: {
        validate() {
            if (nombre == '' || especie == '') {
                alert('Debe completar todos los campos');
            }
            else {
                Data.nombre
                this.registrar();
            }
        },
        registar() {
            axios.post('http://localhost:3000/registroMascota', {
                nombre: this.nombre,
                especie: this.especie,

            }).then((res) => {
                if (res.status == 200) {
                    console.log(res.data)
                    console.log("Mascota registrada en el servidor")
                    this.notificacionExitosa = true

                }
            }).catch((err) => {
                console.log(err)
                console.log(err.res)
                this.notificacionNoExitosa = true

            })


        }
    }
        
}
</script>