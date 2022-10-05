<template>
  <!-- <h1>{{$store.state.hola}}</h1> -->
  <!--Formulario ingreso-->
  <v-content>
    <v-card width="500px" class="mx-auto mt-15">
      <v-card-title>Credenciales</v-card-title>
      <v-card-text>
        <v-text-field label="E-mail" v-model="loginEmail" prepend-icon="mdi-account-circle" 
/>
        <v-text-field
        
        
        v-model="loginPassword"
        label="Contraseña"
        :type="$store.state.mostrarPass ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        :append-icon="$store.state.mostrarPass ? 'mdi-eye' : 'mdi-eye-off'" @click:append="$store.state.mostrarPass=!$store.state.mostrarPass"/>
      </v-card-text>
      <v-divider/>

      <!-- Boton para entrar -->
      <v-card-actions>
        <v-btn v-on:click="login" color="success" class="mx-auto my-4" de>Iniciar Sesión</v-btn>
        <v-btn color="primary" class="mx-auto my-4" @click="$store.state.dialog=true">Registrarse</v-btn>
      </v-card-actions>
    </v-card>
    
    <!-- Dialog pal registro -->
    <v-row justify="center">
      <v-dialog
      v-model="$store.state.dialog"
      persistent
      max-width="650px"
      >
        <v-card>
          <v-card-title><span class="text-h5">Registrarse</span></v-card-title>
          <v-card-text>
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
                v-model="passRegistro"
                :rules="passRules"
                label="Contraseña"
                ></v-text-field>
              </v-col>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="confirmarPassRegistro"
                :rules="passRules"
                label="Confirmar Contraseña"
                ></v-text-field>
              </v-col>
            </v-row>
            </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer>
              <v-btn
              color="blue darken-1"
              text
              @click="$store.state.dialog=false"
              >Cerrar</v-btn>

              <v-btn
              :disabled="!valid"
              color="blue darken-1"
              class="mr-4"
              text
              @click="validate" 
              >Enviar</v-btn><!-- Acá deberia conectar con el back -->
            </v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    
    <v-alert v-model="notificacionExitosa" elevation="19" shaped type="success" dismissible > Usuario registrado!
    </v-alert>
    <v-alert v-model="notificacionNoExitosa" elevation="19" shaped type="error" dismissible> El email ya esta en uso
    </v-alert>
  </v-content>

  
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
      passRegistro: '',
      passRules: [
          v => !!v || 'Contraseña es requerida',
      ],
      confirmarPass: '',
    }),
      
    methods:{
      register(){
        
          axios.post('http://localhost:3000/registro', {
            email: this.emailRegistro,
            password: this.passRegistro,
            nombre: this.nombreRegistro,
            apellido: this.apellidoRegistro

          }).then((res)=>{
            if(res.status == 200){
              console.log(res.data)
              console.log("Usuario registrado en el servidor")
              this.notificacionExitosa = true

            }
          }).catch((err)=>{
            console.log(err)
            console.log(err.res)
            this.notificacionNoExitosa = true

          })


        },
        /* Validacion formulario registro */
        validate () {
          if((this.passRegistro == this.confirmarPassRegistro)){
            this.$store.state.dialog=false
            //this.$refs.form.validate()
            this.register()
            this.emailRegistro = ""
            this.passRegistro = ""
            this.nombreRegistro = ""
            this.apellidoRegistro = ""
            this.confirmarPassRegistro = ""
          }
          else{
            alert("Las contraseñas deben coincidir")
          }
        },
        login(){
          console.log(this.loginEmail)
          console.log(this.loginPassword)

          axios.post('http://localhost:3000/login', {
            email: this.loginEmail,
            password: this.loginPassword
          }).then((res)=>{
            if(res.status == 200){
              console.log(res.data)
              this.loginEmail = JSON.stringify(res.data.user)
              

              // save token and user in local storage
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('user', JSON.stringify(res.data.user))

              // move to home usuario view
              this.$router.push('/usuario')

            }
          }).catch((err)=>{
            console.log(err)
          })

        }
    }
  }
</script>

<style>

</style>
