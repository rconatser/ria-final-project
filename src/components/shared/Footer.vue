<template>
    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title class="bg-gradient">
          <span class="subheading mobile-center">Follow Our Sponsors on Social Media!</span>
  
          <div class="flex-grow-1"></div>
  
          <v-btn
          v-for="(value, icon, link) in icons"
          :key = "(icon, link)"
            class="social-media"
            icon
            color="transparent"
          >
            <a :href="value.link" target="_blank" v-bind:title="value.value + ' Opens in a New Tab'">
              <v-icon size="24px">{{ value.icon }}</v-icon>
            </a>
          </v-btn>
        </v-card-title>
  
        <v-card-actions class="grey darken-3 justify-center">
          &copy; {{ new Date().getFullYear() }} — Rachel Conatser
        </v-card-actions>
      </v-card>
    </v-footer>
</template>

<script>
export default {

  data: () => ({
    icons: { // parent
      facebook: { // value
        value: 'Facebook',
        icon: 'mdi-facebook', // icon
        link: 'https://www.facebook.com/dogofworld/' // link
      },
      instagram: { // value
        value: 'Instagram',
        icon: 'mdi-instagram', // icon
        link: 'https://www.instagram.com/happydogsworld/' // link
      },
      twitter: { // value
        value: 'Twitter',
        icon: 'mdi-twitter', // icon
        link: 'https://twitter.com/HappyDogIsland1' // link
      }
    }
})
}
</script>

<style scoped>
  .social-media a {
    color: white;
    text-decoration: none;
  }

  .social-media a:hover, .social-media a:focus {
    color: rgb(221, 163, 3);
    text-shadow: 0 0 6px rgba(0,0,0,0.35);
  }

  .bg-gradient {
    box-shadow: 0 4px 4px rgba(0,0,0,0.35);
    background: linear-gradient(to top right, #0F677E, #90B0AF);
  }

  .mobile-center {
    text-align: center !important;
  }
</style>