<template>    
     <v-container>
    <v-card-title>Datos del propietario</v-card-title>
    <v-form v-model="valid">
              <v-container>
              <v-row>
                <v-col cols="3" md="6">
                  <v-text-field
                  v-model="nombreRegistro"
                  :rules="nombreRules"
                  label="Nombre"
                  required
                ></v-text-field>
                </v-col>

                <v-col cols="2" md="6">
                  <v-text-field
                  v-model="apellidoRegistro"
                  :rules="apellidoRules"
                  label="Apellido"
                  required
                  ></v-text-field>
                </v-col>
              </v-row>
            <v-row>
              <v-col >
                <v-text-field
                v-model="emailRegistro"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="direccion"
                label="Direccion"
                ></v-text-field>
              </v-col>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="numero"
                label="Telefono /celular"
                ></v-text-field>
              </v-col>
            </v-row>
            </v-container>
            </v-form>
         

   
    <v-card-title>Reseña</v-card-title>
    <v-form v-model="valid">
              <v-container>
              <v-row>
                <v-col cols="3" md="6">
                  <v-text-field
                  v-model="nombreRegistro"
                  :rules="nombreRules"
                  label="Nombre Paciente"
                  required
                ></v-text-field>
                </v-col>

                <v-col cols="2" md="6">
                  <v-text-field
                  v-model="Especie"
                  label="Especie"
                  required
                  ></v-text-field>
                </v-col>
              </v-row>
            <v-row>
              <v-col >
                <v-text-field
                v-model="raza"
                label="Raza"
                required
                ></v-text-field>
              </v-col>
              <v-col >
                <v-text-field
                v-model="sexo"
                label="Sexo"
                required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="FechaNacimiento"
                label="Fecha Nacimiento"
                ></v-text-field>
              </v-col>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="peso"
                label="Peso (kg)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="colorTipoPelaje"
                label="Color y tipo pelaje"
                ></v-text-field>
              </v-col>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="onservaciones"
                label="Otras observaciones"
                ></v-text-field>
              </v-col>
  
            </v-row>
            </v-container>
            </v-form>


            <v-card-title>Anamnesis</v-card-title>
            <v-form v-model="valid">
              <v-container>
              <v-row>
                <v-col cols="3" md="6">
                  <v-text-field
                  v-model="dieta"
                  label="Dieta"
                  required
                ></v-text-field>
                </v-col>

              </v-row>
            <v-row>
              <v-col >
                <v-text-field
                v-model="enfermedades"
                label="Enfermedades Previas"
                required
                ></v-text-field>
              </v-col>
              <v-col >
                <v-text-field
                v-model="cirujias"
                label="Cirujias previas"
                required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="observacionesCita"
                label="Observaciones"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="medicamentos"
                label="Medicamentos"
                ></v-text-field>
              </v-col>
  
            </v-row>
            </v-container>
            </v-form>
    
          </v-container>
</template>

<script>
  import axios from 'axios';
  export default {
    
    data: () => ({
      notificacionExitosa: false,notificacionNoExitosa: false,
      loginEmail: '',emailRegistro:'',
      loginPassword: '',passRegistro: '',confirmarPassRegistro:'',
      valid: true,
      nombreRegistro: '',
      nombreRules: [
          v => !!v || 'Nombre es requerido',
      ],
      apellidoRegistro: '',
      apellidoRules: [
          v => !!v || 'apellido es requerido',
      ],
      emailRegistro: '',
      emailRules: [
          v => !!v || 'E-mail es requerido',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      
    }),

  
      
  }
</script>
