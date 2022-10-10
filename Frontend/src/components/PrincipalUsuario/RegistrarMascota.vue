<template>
 
        <v-container class="mt-8">
            <v-row>
                <v-col cols="5" md="3">
                    <v-text-field
                    v-model="nombre"
                    :rules="nombreRules"
                    label="Nombre Mascota"
                    required
                ></v-text-field>
                </v-col>

                <v-col cols="5" md="3">
                    <v-text-field
                    v-model="especie"
                    :rules="especieRules"
                    label="Especie de la Mascota"
                    required
                    ></v-text-field>
                </v-col>
            </v-row>
            
        </v-container>

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
                v => !!v || 'Especie es requerido',
            ],
           
        }),
        
      /*  methods:{
            /* Validacion formulario registro 
            validate () {
                if((this.pass == this.confirmarPass)){
                    this.$refs.form.validate()
                    this.imprimir()
                } 
            },
        }*/
    }
</script>
