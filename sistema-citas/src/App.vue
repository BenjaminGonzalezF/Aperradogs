<template>
  <v-app>
    <v-app-bar app color="cyan darken-1">
      <v-toolbar-items></v-toolbar-items>
      <v-toolbar-title>
        <h4>Aperradogs</h4>
      </v-toolbar-title>
    </v-app-bar>
    <router-view></router-view>

    <!-- Footer -->
    <template>
      <v-footer padless absolute>
        <v-card  width="100%" flat tile class="cyan darken-1 dark text-center" >
          <v-card-text>
            <v-btn v-for="icono in iconos" :key="icono" class="mx-4 white--text" icon>
              <v-icon size="24px">{{icono}}</v-icon>
            </v-btn>
          </v-card-text>
          
          <v-divider/>

          <v-card-text class="white-text">
            {{new Date().getFullYear()}} - <strong>Aperadogs S.A</strong>
          </v-card-text>
          
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
import Login from './views/Login.vue';

export default {
  name: 'App',
  data: () => ({
    iconos: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
};
</script>


<style>
  h4{
    color:white;
  }
</style>