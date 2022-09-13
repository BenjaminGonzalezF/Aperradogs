<template>
  <!-- <h1>{{$store.state.hola}}</h1> -->
  <!--Formulario ingreso-->
  <v-content>
    <v-card width="500px" class="mx-auto mt-15">
      <v-card-title>Credenciales</v-card-title>
      <v-card-text>
        <v-text-field label="E-mail" prepend-icon="mdi-account-circle"/>
        <v-text-field
        label="Contraseña"
        :type="mostrarPass ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        :append-icon="mostrarPass ? 'mdi-eye' : 'mdi-eye-off'" @click:append="mostrarPass=!mostrarPass"/>
      </v-card-text>
      <v-divider/>
      <!-- Boton para entrar -->
      <v-card-actions>
        <v-btn disabled color="success" class="mx-auto my-4" de>Iniciar Sesión</v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
</template>

<script>
  export default{
    data(){
      return{
        mostrarPass:false/* Oculta y muestra el pass */
      }
    }
  }
</script>

<style>

</style>
