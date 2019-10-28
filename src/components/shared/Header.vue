<template>
    <div>
        <v-app-bar app elevation-on-scroll="true">
            <router-link to="/home">
                <v-img src="../../assets/ramen-logo.png" height="56" max-width="56" contain></v-img>
            </router-link>
            <router-link to="/home">
                <v-toolbar-title class="headline text-uppercase">
                    <span>Fortune</span>
                    <span class="font-weight-light"> Ramen</span>
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute right temporary>
            <v-list nav dense>
                <v-list-item-group active-class="blue-grey--text" v-model="group">
                    <v-list-item>
                        <router-link to="/home">Home</router-link>
                    </v-list-item>
                    <v-list-item>
                        <router-link to="/our-menu">Our Menu</router-link>
                    </v-list-item>
                    <v-list-item>
                        <router-link to="/order">Order</router-link>
                    </v-list-item>
                    <v-list-item>
                        <router-link to="/contact">Contact Us</router-link>
                    </v-list-item>
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
      group () {
        this.drawer = false
      },
    }
})
}
</script>
<style scoped>
    a {
        text-decoration: none !important;
        color: black !important;
        transition: 0.3s;
    }

    a:hover {
        color: #CA8F47 !important;
        transition: 0.3s;
    }
</style>