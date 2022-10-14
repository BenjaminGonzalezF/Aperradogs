
<template>
    <v-card
      
    >
      <v-toolbar>
      
        <v-app-bar-nav-icon 
          @click="drawer = true"
          v-if="$vuetify.breakpoint.xsOnly"
        >
        </v-app-bar-nav-icon>
  
        <v-toolbar-title

          :class="{'': $vuetify.breakpoint.smAndDown, 'ml-6': $vuetify.breakpoint.mdAndUp}" >  
           Aperradogs
        </v-toolbar-title>
  
        <v-spacer></v-spacer>
  
          <v-btn to="/" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/' }" v-show="$vuetify.breakpoint.lgOnly"> 
            Home 
          </v-btn>
  
          <v-btn to="/nosotros" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/nosotros' }" v-show="$vuetify.breakpoint.lgOnly">
            Nosotros
          </v-btn>
  
          <v-btn to="/InicioSesion" class="text-capitalize mr-2" v-bind:class="{ 'v-btn--active': $route.path == '/ingreso' }" v-show="$vuetify.breakpoint.lgOnly"> 
            Inicio Sesion
          </v-btn>

          
      </v-toolbar>
  
      <v-navigation-drawer
        v-model="drawer"
        absolute
        width="100%"
        height="auto"
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"            
          >
            <v-list-item v-bind:class="{ 'bg-active': $route.path == '/' }">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link to="/" class="flm">Home</router-link>
              </v-list-item-title>
            </v-list-item>
    
            <v-list-item v-bind:class="{ 'bg-active': $route.path == '/nosotros' }">
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link to="/nosotros" class="flm">Nosotros</router-link>
              </v-list-item-title>
            </v-list-item>
  
            <v-list-item v-bind:class="{ 'bg-active': $route.path == '/InicioSesion' }">
              <v-list-item-icon>
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link to="/InicioSesion" class="flm">InicioSesion</router-link>
              </v-list-item-title>
            </v-list-item>
    
          </v-list-item-group>
        </v-list>        
      </v-navigation-drawer>
  
    </v-card>
  </template>



<script>
    export default {
      name: 'Menu',

      
  
      data: () => ({
        drawer: false,
        group: null,      
        items: [
          { title: 'Misión' },
          { title: 'Objetivo' },
          { title: 'Visión' },        
        ],
        
      }),
  
      methods: {
        menuItems() {
          return this.menu;
        }
      }
  
    }
  </script>

<style scope>

    .bgsel:hover {
      background: #b5ecd5;
    }
  
    .flm:link {
      text-decoration: none;
    }
  
    .v-application a {
      color: #43ccb5!important;
    } 
    
  </style>
    