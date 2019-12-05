<template>
  <v-app>
    <app-header />
    <v-content>
      <transition name="router-anim" enter-active-class="animated fadeInUp" leave-active-class="animated slideOutRight">
        <router-view :members="members" />
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
 },
 data() {
   return {
     members: [
      {name:'Tracy Ibarra',position:'Manager',cell:'801-468-2955',bg:'woman'},
      {name:'Mark Davis',position:'Assistant',cell:'385-394-7619',bg:'man-1'},
      {name:'Phil Foster',position:'Head Chef',cell:'801-489-2805',bg:'man-2'}
    ]
   }
 }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";


</style>