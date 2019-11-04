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

export default {
 components: {
   'app-header': AppHeader,
   'app-footer': AppFooter
 } 
}
</script>