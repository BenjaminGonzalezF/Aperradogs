<template>

    <v-app>
  
      <v-main>  
  
        <Menu/>    
  
          <Login/>
  
          
  
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
	

	export default {
		name: 'InicioSesion',

		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'InicioSesion - Aperradogs';
				}
			},
		},

		components: {
			Menu,
			Footer,
			Login,
			
		},

	} 

</script>