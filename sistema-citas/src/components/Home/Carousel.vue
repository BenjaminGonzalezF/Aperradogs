
<template>

    <v-carousel v-model="model" height="auto" class="mt-3" hide-delimiters>
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
      name: 'Carousel',
  
      data: () => ({
  
        items: [
            {
              src: 'https://img.freepik.com/fotos-premium/equipo-veterinario-tratamiento-gatos-enfermos-mantener-salud-animales-concepto-revision-hogar-estetoscopio-hospital-animales-preparacion-gato-cirugia-inyeccion-foto-alta-calidad_530697-10353.jpg?w=540',
            },
            {
              src: 'https://www.clinicaveterinariaejea.com/wp-content/uploads/2020/03/clinica_veterinaria_ejea_036-2.jpeg',
            },
            {
              src: 'https://www.clinicaveterinariaejea.com/wp-content/uploads/2020/03/clinica_veterinaria_ejea_062-1.jpeg',
            },
            {
              src: 'https://www.clinicaveterinariaejea.com/wp-content/uploads/2020/03/clinica_veterinaria_ejea_067-1.jpeg',
            },
        ],
  
        model: 0,
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],     
  
      })
  
    }
  </script>
  