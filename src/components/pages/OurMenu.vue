<!--
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.11/vue.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-app.js"></script>
-->

<template>
    <v-content class="pt-0">
        <v-parallax class="title-container" height="500" src='../../assets/food-items/tonkotsu-ramen.jpg' alt='Parallax image of ramen'>
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
              <!-- <img :src="ingredient.image" :alt="'Image of ' + ingredient.key" height="100px" width="100px" /> -->
              <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div class="flip-card">
                <div class="card-front">
                  <span class="headline condensed light">{{ ingredient.key }}</span>
                </div>
                <div class="card-back">
                  <span class="items">
                    <span class="item">{{ ingredient.Calories }} Calories</span>
                    <span class="item">{{ ingredient.Carbs }}g Carbs</span>
                    <span class="item">{{ ingredient.Fat }}g Fat</span>
                    <span class="item">{{ ingredient.Protein }}g Protein</span>
                    <span class="item">{{ ingredient.Sodium }}mg Sodium</span>
                  </span>
                </div>
              </div>
              </div>
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
      
      ingredients: []
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
    width: 100%;
  }

  ul li span.items span {
    display: block;
  }

  @media only screen and (min-width: 756px) {
    ul li {
    width: 50%;
  }
  }

   @media only screen and (min-width: 1200px) {
    ul li {
    width: 25%;
  }
  }

  /*- Flip Cards -*/
/* entire container, keeps perspective */
.flip-container {
	perspective: 1000px;
  margin-top: 40px;
}
	/* flip the pane when hovered */
	.flip-container:hover .flip-card, .flip-container.hover .flip-card {
		transform: rotateY(180deg);
	}

.flip-container, .card-front, .card-back {
	width: 100%;
  height: 200px;
}

/* flip speed goes here */
.flip-card {
	transition: 0.6s;
	transform-style: preserve-3d;

	position: relative;
}

/* hide card-back of pane during swap */
.card-front, .card-back {
	backface-visibility: hidden;

	position: absolute;
	top: 0;
	left: 0;
  box-shadow: 0 0 4px rgba(0,0,0,.5);
}

/* card-front pane, placed above card-back */
.card-front {
	z-index: 2;
  background-color: goldenrod;
  color: white;
	/* for firefox 31 */
	transform: rotateY(0deg);
  text-align: center;
  padding-top: 80px;
}

/* card-back, initially hidden pane */
.card-back {
	transform: rotateY(180deg);
  background-color: white;
  padding: 15px 0;
}

.card-back span.item {
  padding: 5px 10px;
}

.card-back span.item:nth-child(odd) {
  background-color: rgb(238, 238, 238);
}

</style>