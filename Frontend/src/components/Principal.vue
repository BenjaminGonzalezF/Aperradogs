<template>

    <v-app>
  
      <v-main>  
  
        <Menu/>    
  
          <Mascota/>
  
          
  
          <router-view> 
  
            <v-content>
              
  
            </v-content>      
  
          </router-view>     
  
        <Footer/>        
  
      </v-main>
  
    </v-app>
  
  </template>



<script>
	
	import Menu from './Menu';
	import Footer from './Footer';
	import Mascota from './PrincipalUsuario/Mascota';
	

	export default {
		name: 'PrincipalUsuario',

		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'PrincipalUsuario - Aperradogs';
				}
			},
		},

		components: {
			Menu,
			Footer,
			Mascota,
			
		},

	} 

</script>
