
<template>

    <v-app>
  
      <v-main>  
  
        <Menu/>    
  
          <Carousel/>
          <ServiciosDestacados/>
        
  
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
    import Carousel from './Home/Carousel';
    import ServiciosDestacados from './Home/ServiciosDestacados';
    //import Newsletter from './Home/Newsletter';
    import Footer from './Footer'; 
  
    export default {
      name: 'Home',
  
      watch: {
        $route: {
          immediate: true,
          handler(to) {
            document.title = to.meta.title || 'Home - Aperradogs';
          }
        },
      },
  
      components: {
        Menu,
        Carousel,
        ServiciosDestacados,
        Footer,
      },
  
      data: () => ({
        //
      }),
    };
  </script>
  