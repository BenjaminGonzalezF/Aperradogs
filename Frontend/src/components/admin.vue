<template>

    <v-app>
  
      <v-main>  
  
        <Menu/>    
  
        <FichaClinica/>

          
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
	import FichaClinica from './FichaClinica';
	

	export default {
		name: 'FichaClinica',

		watch: {
			$route: {
				immediate: true,
				handler(to) {
					document.title = to.meta.title || 'FichaClinica - Aperradogs';
				}
			},
		},

		components: {
			Menu,
			Footer,
			FichaClinica,
			
		},

	} 

</script>