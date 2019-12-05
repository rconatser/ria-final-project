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
        </div>
        <div class="section grey lighten-3">
        <div class="text-container">
          <h2 class="text-center">Our Ingredients and their Nutrition Information</h2>
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient">
              <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div class="flip-card">
                <div class="card-front">
                  <div class="overlay">
                  <span class="headline condensed light">{{ ingredient.key }}</span>
                </div>
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
document.getElementsByClassName("card-front").includes("Beef").style.backgroundImage = "url('../../assets/food-items/beef-broth.jpg')";
</script>

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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

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
  background-size: cover;
  background-repeat: no-repeat;
}

.overlay {
  background-color: rgba(0,0,0,.7);
  height: 100%;
  width: 100%;
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

/* Various BG Images for Card List Items */
li:nth-child(1) .card-front {
  background-image: url('../../assets/food-items/beef-broth.jpg');
}
li:nth-child(2) .card-front {
  background-image: url('../../assets/food-items/broccoli.jpg');
}
li:nth-child(3) .card-front {
  background-image: url('../../assets/food-items/carrot.jpg');
}
li:nth-child(4) .card-front {
  background-image: url('../../assets/food-items/chasu.jpg');
}
li:nth-child(5) .card-front {
  background-image: url('../../assets/food-items/chicken.jpg');
}
li:nth-child(6) .card-front {
  background-image: url('../../assets/food-items/chicken-broth.jpg');
}
li:nth-child(7) .card-front {
  background-image: url('../../assets/food-items/cilantro.jpg');
}
li:nth-child(8) .card-front {
  background-image: url('../../assets/food-items/corn.jpg');
}
li:nth-child(9) .card-front {
  background-image: url('../../assets/food-items/green-onion.jpg');
}
li:nth-child(10) .card-front {
  background-image: url('../../assets/food-items/lime.jpg');
}
li:nth-child(11) .card-front {
  background-image: url('../../assets/food-items/miso-broth.jpeg');
}
li:nth-child(12) .card-front {
  background-image: url('../../assets/food-items/mushrooms.jpg');
}
li:nth-child(13) .card-front {
  background-image: url('../../assets/food-items/naruto.jpg');
}
li:nth-child(14) .card-front {
  background-image: url('../../assets/food-items/nori.jpg');
}
li:nth-child(15) .card-front {
  background-image: url('../../assets/food-items/onion.jpg');
}
li:nth-child(16) .card-front {
  background-image: url('../../assets/food-items/ramen-noodles.jpg');
}
li:nth-child(17) .card-front {
  background-image: url('../../assets/food-items/red-pepper.jpg');
}
li:nth-child(18) .card-front {
  background-image: url('../../assets/food-items/seseme-seeds.jpg');
}
li:nth-child(19) .card-front {
  background-image: url('../../assets/food-items/shio-broth.jpg');
}
li:nth-child(20) .card-front {
  background-image: url('../../assets/food-items/shoyu-broth.jpg');
}
li:nth-child(21) .card-front {
  background-image: url('../../assets/food-items/shrimp.jpg');
}
li:nth-child(22) .card-front {
  background-image: url('../../assets/food-items/egg.jpg');
}
li:nth-child(23) .card-front {
  background-image: url('../../assets/food-items/beef.jpg');
}
li:nth-child(24) .card-front {
  background-image: url('../../assets/food-items/tonkotsu-broth.jpg');
}


</style>