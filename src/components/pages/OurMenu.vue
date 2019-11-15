<!--
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.11/vue.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>
-->

<template>
    <v-content class="pt-0">
        <v-parallax class="title-container" height="500" src="../../assets/food-items/tonkotsu-ramen.jpg">
          <h1 class="title-text"><span class="font-weight-bold">Our </span>Menu</h1>
        </v-parallax>
        <div class="text-container">
            <h2>Our Food</h2>
            <p>Where possible, our food items are locally and organically sourced.</p>
            <p><em>List of all food items with their images (See 'Order' page), and when user selects one it will open a lightbox with nutrition information about that item.</em></p>
        </div>
        <div class="text-container">
          <p>{{ getNutrition() }}</p>
        </div>
    </v-content>
</template>

<script>
import axios from 'axios'

export default {  
  data() {
    return {
      info: [],
    }
  },
  methods: {
    getNutrition() {
      axios.get('https://ramen-nutrition.firebaseio.com/')
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.error(error))
    }
  }
  // web api key: AIzaSyBf5zqvGanW1rwGjF7YYDcVjbmmROujSZM
  // app ID: 1:599047285369:web:83439892f3883d70d8c2a8
  // public facing name: project-599047285369
}
</script>

<style scoped>
  div.text-container {
    min-width: 360px;
    max-width: 1200px;
    margin: 20px auto;
    padding: 40px 20px;
  }

  h1.title-text {
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 4rem;
    margin: 0 auto;
  }
  
</style>