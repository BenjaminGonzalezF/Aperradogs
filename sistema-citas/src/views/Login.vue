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
                  v-model="nombre"
                  :rules="nombreRules"
                  label="Nombre"
                  required
                ></v-text-field>
                </v-col>

                <v-col cols="2" md="6">
                  <v-text-field
                  v-model="apellido"
                  :rules="apellidoRules"
                  label="Apellido"
                  required
                  ></v-text-field>
                </v-col>
              </v-row>
            <v-row>
              <v-col >
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="pass"
                :rules="passRules"
                label="Contraseña"
                ></v-text-field>
              </v-col>
              <v-col cols="2" md="6">
                <v-text-field
                v-model="confirmarPass"
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
              v-on:click="register" 
              >Enviar</v-btn><!-- Acá deberia conectar con el back -->
            </v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-content>

  
</template>

<script>
  import axios from 'axios';
  export default {

    data: () => ({
      loginEmail: '',
      loginPassword: '',
      valid: true,
      nombre: '',
      nombreRules: [
          v => !!v || 'Nombre es requerido',
      ],
      apellido: '',
      apellidoRules: [
          v => !!v || 'apellido es requerido',
      ],
      email: '',
      emailRules: [
          v => !!v || 'E-mail es requerido',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      pass: '',
      passRules: [
          v => !!v || 'Contraseña es requerida',
      ],
      confirmarPass: '',
    }),
      
    methods:{
        /* Validacion formulario registro */
        validate () {
          if((this.pass == this.confirmarPass)){
            this.$store.state.dialog=false
            this.$refs.form.validate()
            /* limpiar variables */
            this.nombre=""
            this.apellido=""
            this.email=""
            this.pass=""
            this.confirmarPass=""
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

        },
        register(){
          console.log(this.email)
          console.log(this.pass)

        }
    }
  }
</script>

<style>

</style>
