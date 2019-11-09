<template>
  <v-app>
    <app-header />
    <v-content>
      <transition name="router-anim" enter-active-class="animated fadeInUp" leave-active-class="animated slideOutRight">
        <router-view />
      </transition>
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

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";


</style>