<template>
<v-container class="my-5 pt-10 mb-16">
    <h1 class="subheading grey--text mb-10">Mascotas</h1>
    <v-layout row wrap class="justify-center">
        <v-flex xs5 sm6 md4 lg3 ps-1 ma-3 v-for="mascota in mascotas" :key="mascota.nombre">
            <v-card class="text-center">
                <v-responsive class="pt-4">
                    <v-avatar size="100" class="grey-lighten-2">
                        <v-img :src="mascota.imagen" contain height="125"></v-img>
                    </v-avatar>
                </v-responsive>
                <v-card-text >
                    <div class="subheading">{{mascota.nombre}}</div>
                    <div>{{mascota.especie}}</div>
                    <div>{{mascota.raza}}</div>
                </v-card-text>
                <v-row>
                    <v-btn
                    class="mb-2 ml-5"
                    fab
                    dark
                    x-small
                    color="success"
                    >
                        <v-icon dark>
                            mdi-pencil
                        </v-icon>
                    </v-btn>
                </v-row>
            </v-card>
        </v-flex>
    </v-layout>
    <v-container row>
        <v-btn
        class="mr-16"
        fab
        dark
        right
        absolute
        color="indigo"
        >
        <v-icon dark>
            mdi-plus
        </v-icon>
        </v-btn>
    </v-container>
</v-container>
</template>

<script>
export default{
        data(){
            return{
                mascotas:[
                    {nombre: 'Chimichurri', especie:'Perro' ,raza:'Golden',imagen:'/Chimi.jpeg'},
                    {nombre: 'Qüiky', especie:'Perro' ,raza:'kilterrier',imagen:'/gato.jpg'},
                    {nombre: 'Chiturra', especie:'Gato' ,raza:'Balinés',imagen:'/perro.jpg'},
                    {nombre: 'Garfield', especie:'Gato' ,raza:'Gato exotico',imagen:'/Chimi.jpeg'},
                    {nombre: 'Peluza', especie:'Conejo' ,raza:'Hotot',imagen:'/gato.jpg'},
                    {nombre: 'Garfield', especie:'Gato' ,raza:'Gato exotico',imagen:'/perro.jpg'},
                    {nombre: 'Peluza', especie:'Conejo' ,raza:'Hotot',imagen:'/Chimi.jpeg'}, 
                ]
            }
        }
    }
</script>