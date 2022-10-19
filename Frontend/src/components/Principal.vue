<template>

    <v-app>
  
      <v-main>  
  
          
  
          <VistaUsuario/>
  
          
  
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
	import VistaUsuario from './PrincipalUsuario/VistaUsuario';
	

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
			VistaUsuario,
			
		},

	} 

</script>
