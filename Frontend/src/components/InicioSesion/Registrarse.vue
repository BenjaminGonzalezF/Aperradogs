<template>
    <v-form v-model="valido">
        <v-container class="mt-8">
            <v-row>
                <v-col cols="5" md="3">
                    <v-text-field
                    v-model="nombre"
                    :rules="nombreRules"
                    label="Nombre"
                    required
                ></v-text-field>
                </v-col>

                <v-col cols="5" md="3">
                    <v-text-field
                    v-model="apellido"
                    :rules="apellidoRules"
                    label="Apellido"
                    required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" md="3">
                    <v-text-field
                    v-model="pass"
                    :rules="passRules"
                    label="Contraseña"
                    ></v-text-field>
                </v-col>
                <v-col cols="5" md="3">
                    <v-text-field
                    v-model="confirmarPass"
                    :rules="passRules"
                    label="Confirmar Contraseña"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >Enviar</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
    export default {
        data: () => ({
            valido: true,
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
        }),
        
        methods:{
            /* Validacion formulario registro */
            validate () {
                if((this.pass == this.confirmarPass)){
                    this.$refs.form.validate()
                    this.imprimir()
                } 
            },
        }
    }
</script>
