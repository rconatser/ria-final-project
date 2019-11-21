<!--
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.11/vue.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>
-->

<template>
    <v-content class="pt-0">
        <v-parallax class="title-container" height="500" src="<img src='/tonkotsu-ramen.jpg' alt='' />">
          <h1 class="title-text"><span class="font-weight-bold">Our </span>Menu</h1>
        </v-parallax>
        <div class="text-container">
            <h2>Our Food</h2>
            <p>Where possible, our food items are locally and organically sourced.</p>
            <p><em>List of all food items with their images (See 'Order' page), and when user selects one it will open a lightbox with nutrition information about that item.</em></p>
        </div>
        <div class="section grey lighten-3">
        <div class="text-container">
          <h2 class="text-center">Our Ingredients and their Nutrition Information</h2>
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient">
              <span class="image">{{ imageSrc }}</span><span class="headline condensed light">{{ ingredient.key }}</span> <span class="items">
                <span>{{ ingredient.calories }} Calories</span>
                <span>{{ ingredient.carbs }}g Carbs</span>
                <span>{{ ingredient.fat }}g Fat</span>
                <span>{{ ingredient.protein }}g Protein</span>
                <span>{{ ingredient.sodium }}mg Sodium</span>
            </span>
            </li>
          </ul>
        </div>
        </div>
    </v-content>
</template>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-analytics.js"></script>

<script>
import axios from 'axios';

export default {  
  data() {
    return {
      ingredients: [],
      imageSrc: ["<img src='/chicken-broth.jpg' alt='chicken broth' />","<img src='/beef-broth.jpg' alt='beef broth' />", "<img src='/miso-broth.jpeg' alt='miso broth' />","<img src='/shoyu-broth.jpg' alt='shoyu broth' />", "<img src='/shio-broth.jpg' alt='shio broth' />", "<img src='/tonkotsu-broth.jpg' alt='tonkotsu broth' />", "<img src='/chicken.jpg' alt='chicken' />", "<img src='/beef.jpg' alt='beef' />", "<img src='/chasu.jpg' alt='chasu' />", "<img src='/shrimp.jpg' alt='shrimp' />", "<img src='/green-onion.jpg' alt='green onions' />", "<img src='/onion.jpg' alt='onion' />", "<img src='/broccoli.jpg' alt='broccoli' />", "<img src='/carrot.jpg' alt='carrots' />", "<img src='/mushrooms.jpg' alt='mushrooms' />", "<img src='/corn.jpg' alt='corn' />", "<img src='/cilantro.jpg' alt='cilantro' />", "<img src='/lime.jpg' alt='lime' />", "<img src='/egg.jpg' alt='eggs' />", "<img src='/red-pepper.jpg' alt='red bell pepper' />", "<img src='/seseme-seeds.jpg' alt='seseme seeds' />", "<img src='/nori.jpg' alt='nori' />", "<img src='/naruto.jpg' alt='naruto' />"]
    }
  },
  created() {
    axios.get('https://ramen-ingredients.firebaseio.com/ingredients.json')
    // Prof Thor Anderson Suggestion:
    .then(response => {
        const allIngredients = response.data
        const objectsToArray = Object.entries(allIngredients).map(e => Object.assign(e[1], {key: e[0]}),
        )
        this.ingredients = objectsToArray;
    })
    .catch(error => console.error(error))
  }
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

  ul li {
    display: inline-block;
    padding: 20px;
    width: 25%;
  }

  ul li span.items span {
    display: block;
  }
  
  ul li span.image {
    display: block;
    height: 100px;
    width: 100px;
  }
</style>