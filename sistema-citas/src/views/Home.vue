<template>
    <v-container>
        <div></div>
    </v-container>
</template>
    <v-carousel hide-delimiters>
      <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      >  
    </v-carousel-item>
    </v-carousel>
  </template>


<script>
    export default {
      data () {
        return {
          items: [
            {
              src: 'https://www.clinicaveterinariaejea.com/wp-content/uploads/2020/03/Equipo-Clinica-Veterinaria-Ejea-1.jpeg',
            },
            {
             src: 'https://www.clinicaveterinariaejea.com/wp-content/uploads/2020/03/clinica_veterinaria_ejea_036-2.jpeg',
            },
            {
              src: 'https://www.clinicaveterinariaejea.com/wp-content/uploads/2020/03/clinica_veterinaria_ejea_062-1.jpeg',
              
            },
            {
              
              //src : require('../../assets/vet.jpg'),
            },
          ],
        }
      },
    }
  </script>
  

<style>
    /* div[data-app='true'] {
        background: url('../assets/fondo.jpg') no-repeat center center fixed !important;
        background-size: cover;
        filter: blur(4px);
        -webkit-filter: blur(4px);
    } */
    h1{
        margin: auto;
    }

    
</style>