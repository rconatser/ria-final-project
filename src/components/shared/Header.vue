<template>
  <div>
    <v-app-bar app elevation-on-scroll="true">
      <router-link to="/home">
        <v-img src="../../assets/ramen-logo.png" height="56" max-width="56" contain></v-img>
      </router-link>
      <router-link to="/home">
        <v-toolbar-title class="headline text-uppercase">
          <span>Fortune</span>
          <span class="font-weight-light">Ramen</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app fixed right temporary>
      <v-list nav dense>
        <v-list-item-group active-class="blue-grey--text" v-model="group">
          <router-link v-ripple to="/home">
            <v-list-item>Home</v-list-item>
          </router-link>
          <router-link v-ripple to="/menu">
            <v-list-item>Our Menu</v-list-item>
          </router-link>
          <router-link v-ripple to="/order">
            <v-list-item>Order</v-list-item>
          </router-link>
          <router-link v-ripple to="/contact">
            <v-list-item>Contact Us</v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      watch: {
        group() {
          this.drawer = false;
        }
      }
    })
  };
</script>
<style scoped>
  a {
    text-decoration: none !important;
    color: black !important;
    transition: 0.3s;
  }

  a:hover {
    color: #ca8f47 !important;
    transition: 0.3s;
  }
</style>