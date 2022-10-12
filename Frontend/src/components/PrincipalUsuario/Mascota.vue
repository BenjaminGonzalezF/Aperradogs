
<template>
    <v-container class="my-5 pt-10 mb-16">

        <div class="d-flex align-center justify-center">
                    <v-alert v-model="notificacionExitosa" elevation="19" shaped type="success" dismissible 
                    width="30%" >
                        Mascota registrada
                    </v-alert>
               
                    <v-alert v-model="notificacionNoExitosa" elevation="19" shaped type="error" dismissible width="30%">
                        Error alregistrar mascota
                    </v-alert>
                </div>

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

                            <template>
                                <v-container class="mt-8">
                                    <v-row>
                                        <v-col cols="5" md="4">
                                    
                                            <v-text-field v-model="nombre" :rules="nombreRules" label="Nombre Mascota"  
                                                required></v-text-field>
                                        </v-col>

                                        <v-col cols="5" md="5">
                                            <v-text-field v-model="especie" :rules="especieRules"
                                                label="Especie de la Mascota" required></v-text-field>
                                        </v-col>
                                    </v-row>

                                </v-container>

                            </template>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer>
                            <v-btn color="blue darken-1" text @click="$store.state.dialog=false">Cerrar</v-btn>

                            <v-btn color="blue darken-1" class="mr-4" text @click="validate">Enviar
                            </v-btn>
                        </v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

    </v-container>
</template>
    
<script>

import axios from 'axios';
export default {
    data: () => ({
        valido: true,
        nombre: '',
        nombreRules: [
            v => !!v || 'Nombre es requerido',
        ],
        especie: '',
        especieRules: [
            v => !!v || 'Especie es requerido',
        ],

        valid: false,

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

        registrar() {
            axios.post('http://localhost:3000/registroMascota', {
                nombre: this.nombre,
                especie: this.especie,

            }).then((res) => {
                if (res.status == 200) {
                    console.log(res.data)
                    console.log("Mascota registrada en el servidor")
                    this.notificacionExitosa = true

                } else {
                    console.log(res)
                }
            }).catch((err) => {
                console.log(err)
                console.log(err.res)
                this.notificacionNoExitosa = true

            })


        },
        validate() {
            if (this.nombre == '' || this.especie == '') {
                alert('Debe completar todos los campos');
            }
            else {
                this.$store.state.dialog = false
                this.registrar();
                this.nombre = ''
                this.especie = ''
            }
        }
    }

}
</script>