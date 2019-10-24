<template>
  <v-app>
    <app-header />
    <v-content>
        <about-us />
        <servers id="servers" class="pb-12" />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Servers from './components/server/Servers';
import AppHeader from './components/shared/Header';
import AppFooter from './components/shared/Footer';
import AboutUs from './components/shared/AboutUs';

export default {
 components: {
   'app-header': AppHeader,
   'servers': Servers,
   'app-footer': AppFooter,
   'about-us': AboutUs
 } 
}
</script>