
<template>

    <v-item-group class="mt-6">
      
      <v-container>
  
        <v-row>
  
          <!-- Servicio 1 -->
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="https://www.clinicaveterinariaejea.com/wp-content/uploads/2013/03/medicina-interna.jpg"
              height="200px"
            ></v-img>
  
            <v-card-title class="justify-center">
              Clinica Asistencial
            </v-card-title>
  
            <v-card-subtitle class="alinearjustificado">
                En Clínica Veterinaria Aperradogs ofrecemos una asistencia completa y de calidad a tu mascota. 
                Nuestro principal objetivo es mantener la salud y el bienestar de nuestros animales y ayudarlos a restablecerse cuando están enfermos. 
                Para ello, contamos con un personal altamente cualificado e instalaciones modernas y bien equipadas. 
            </v-card-subtitle>
            
            <v-btn
            class="ml-3 mb-3"
            color="primary"
            >
              Leer más ...
            </v-btn>
  
          </v-card>
  
          <!-- Servicio 2 -->
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="https://www.clinicaveterinariaejea.com/wp-content/uploads/2013/03/radiografia-digital.jpg"
              height="200px"
            ></v-img>
  
            <v-card-title class="justify-center">
              Diagnóstico
            </v-card-title>
  
            <v-card-subtitle class="alinearjustificado">
              Análisi en laboratorio propio. Radiología digital. Ecografías.
            </v-card-subtitle>
  
            <v-btn
            class="ml-3 mb-3"
            color="primary"
            >
              Leer más ...
            </v-btn>
          </v-card>
  
          <!-- Servicio 3 -->
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="https://www.clinicaveterinariaejea.com/wp-content/uploads/2014/05/clinica_veterinaria_ejea_073-1024x682.jpeg"
              height="200px"
            ></v-img>
  
            <v-card-title class="justify-center">
              Cirujía y anestesia
            </v-card-title>
  
            <v-card-subtitle class="alinearjustificado">
                El área de cirugía y anestesia de nuestro centro cuenta con personal cualificado y acreditado. Disponemos de un quirófano provisto con los mejores equipos,
                anestesia inhalatoria, ventilación mecánica, monitorización multiparamétrica,
                electrobisturí y láser de CO2, así como una amplia variedad de material quirúrgico específico.
            </v-card-subtitle>
  
            <v-btn
            class="ml-3 mb-3"
            color="primary"
            >
              Leer más ...
            </v-btn>
  
          </v-card>
  
        </v-row>
  
      </v-container>
  
    </v-item-group>
  
  
  </template>
  
  <script>
    
    export default {
  
      name: 'Servicios',
  
    }
    
  </script>
  
  <style scope>
    .alinearjustificado {
      text-align: justify;
    }
  </style>
  