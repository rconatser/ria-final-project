<template>
  <v-app>
    <app-header />
    <v-content>
        <router-view />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from './components/shared/Header';
import AppFooter from './components/shared/Footer';
// import AboutUs from './components/pages/AboutUs';
// import OurMenu from './components/pages/OurMenu';
// import Order from './components/pages/Order';
// import ContactUs from './components/pages/ContactUs';

export default {
 components: {
   'app-header': AppHeader,
   'app-footer': AppFooter,
  //  'about-us': AboutUs,
  //  'our-menu': OurMenu,
  //  'order': Order,
  //  'contact': ContactUs
 } 
}
</script>