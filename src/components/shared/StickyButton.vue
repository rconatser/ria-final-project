<template>
    <v-speed-dial
      v-model="fab"
      :fixed="true"
      :bottom="true"
      :right="true"
      :direction="top"
      :transition="scale"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="orange darken-4"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-comment-question</v-icon>
        </v-btn>
      </template>
      <router-link to="/contact" tag="v-btn">
      <v-btn
        v-pulse
        fab
        dark
        small
        color="cyan darken-1"
      >
        <v-icon>mdi-phone</v-icon> <!-- Link to Contact Page (v-pulse is custom directive) -->
      </v-btn>
      </router-link>
      <router-link to="/menu" tag="v-btn">
      <v-btn
        v-pulse
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-book-open-page-variant</v-icon> <!-- Link to Ingredients Page (v-pulse is custom directive) -->
      </v-btn>
      </router-link>
      <router-link to="/order" tag="v-btn">
      <v-btn
        v-pulse 
        fab
        dark
        small
        color="red"
      >
        <v-icon>mdi-noodles</v-icon> <!-- Link to Order Page (v-pulse is custom directive) -->
      </v-btn>
      </router-link>
    </v-speed-dial>
</template>

<script>
 export default {
    data: () => ({
      direction: 'top',
      right: true,
      bottom: true,
      transition: 'scale',
    })
  }
</script>

<style>

@media only screen and (min-width: 1200px){
    .v-speed-dial {
        margin-bottom: 100px;
        margin-right: 50px;
    }

}
</style>