<template>

    <v-app>
  
      <v-main>  
  
        <Menu/>    
  
          <Login/>
  
          <Registrarse/>
  
          <router-view> 
  
            <v-content>
              
  
            </v-content>      
  
          </router-view>     
  
                
  
      </v-main>
  
    </v-app>
  
  </template>


<script>
	
	import Menu from './Menu';
	import Footer from './Footer';
	import Login from './InicioSesion/Login';
	import Registrarse from './InicioSesion/Registrarse';

	export default {
		name: 'InicioSesion',

		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'InicioSesion - Mi Proyecto';
				}
			},
		},

		components: {
			Menu,
			Footer,
			Login,
			//Registrarse,
		},

	} 

</script>