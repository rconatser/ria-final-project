<template>
<v-content class="pt-0">
  <v-parallax class="title-container" height="500" src="../../assets/ramen-header-3.jpg">
    <h1 class="title-text">
      <span class="font-weight-bold">Order</span>Here
    </h1>
  </v-parallax>
  <div class="text-container">
    <h2>Make Your Ramen</h2>
    <p>Select from the options below to create your custom ramen masterpiece!</p>

    <form id="order" type="POST" @submit.prevent="orderValues()">
      <!-- Radio Buttons for Broth & Meat Toppings -->
      <h3>Choose Your Broth (Limit One)</h3>
      <div class="form-group">
        <div>
          <img width="100" height="100" src="../../assets/food-items/chicken-broth.jpg" />
          <label for="chicken-broth">Chicken Broth</label>
          <input type="radio" value="Chicken Broth" name="chicken-broth" v-model="pickedBroth" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/beef-broth.jpg" />
          <label for="beef-broth">Beef Broth</label>
          <input type="radio" value="Beef Broth" name="beef" v-model="pickedBroth" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/miso-broth.jpeg" />
          <label for="miso-broth">Miso Broth</label>
          <input type="radio" value="Miso Broth" name="miso" v-model="pickedBroth" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/shoyu-broth.jpg" />
          <label for="shoyu-broth">Shoyu Broth</label>
          <input type="radio" value="Shoyu Broth" name="shoyu" v-model="pickedBroth" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/shio-broth.jpg" />
          <label for="shio-broth">Shio Broth</label>
          <input type="radio" value="Shio Broth" name="shio" v-model="pickedBroth" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/tonkotsu-broth.jpg" />
          <label for="tonkotsu-broth">Tonkotsu Broth</label>
          <input type="radio" value="Tonkotsu Broth" name="tonkotsu" v-model="pickedBroth" />
        </div>
      </div>
      <h3>Choose Your Meat (Limit One)</h3>
      <div class="form-group">
        <div>
          <img width="100" height="100" src="../../assets/food-items/chicken.jpg" />
          <label for="sliced-chicken">Chicken</label>
          <input type="radio" value="Sliced Chicken" name="chicken" v-model="pickedMeat" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/beef.jpg" />
          <label for="sliced-steak">Steak</label>
          <input type="radio" value="Sliced Steak" name="steak" v-model="pickedMeat" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/chasu.jpg" />
          <label for="sliced-chasu">Chasu (Pork)</label>
          <input type="radio" value="Sliced Chasu" name="chasu" v-model="pickedMeat" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/shrimp.jpg" />
          <label for="shrimp">Shrimp</label>
          <input type="radio" value="Shrimp" name="shrimp" v-model="pickedMeat" />
        </div>
      </div>

      <!-- Checkboxes for Toppings -->
      <h3>Choose Your Toppings</h3>
      <div class="form-group">
        <div>
          <img width="100" height="100" src="../../assets/food-items/green-onion.jpg" />
          <label for="green-onion">Green Onions</label>
          <input type="checkbox" value="Green Onion" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/onion.jpg" />
          <label for="onion">Onion</label>
          <input type="checkbox" value="Onion" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/broccoli.jpg" />
          <label for="broccoli">Broccoli</label>
          <input type="checkbox" value="Broccoli" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/carrot.jpg" />
          <label for="carrot">Carrots</label>
          <input type="checkbox" value="Carrot" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/mushrooms.jpg" />
          <label for="mushroom">Mushrooms</label>
          <input type="checkbox" value="Mushroom" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/corn.jpg" />
          <label for="corn">Corn</label>
          <input type="checkbox" value="Corn" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/cilantro.jpg" />
          <label for="cilantro">Cilantro</label>
          <input type="checkbox" value="Cilantro" v-model="checkedToppings" />
        </div>
      </div>
      <div class="form-group">
        <div>
          <img width="100" height="100" src="../../assets/food-items/lime.jpg" />
          <label for="lime">Lime</label>
          <input type="checkbox" value="Lime" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/egg.jpg" />
          <label for="egg">Soft Boiled Egg</label>
          <input type="checkbox" value="Egg" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/red-pepper.jpg" />
          <label for="red-pepper">Red Bell Pepper</label>
          <input type="checkbox" value="Red Pepper" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/seseme-seeds.jpg" />
          <label for="seseme-seeds">Toasted Seseme Seeds</label>
          <input type="checkbox" value="Seseme Seeds" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/nori.jpg" />
          <label for="nori">Nori</label>
          <input type="checkbox" value="Nori" v-model="checkedToppings" />
        </div>
        <div>
          <img width="100" height="100" src="../../assets/food-items/naruto.jpg" />
          <label for="naruto">Naruto</label>
          <input type="checkbox" value="Naruto" v-model="checkedToppings" />
        </div>
      </div>
      <input v-ripple type="submit" value="Submit Order" />
    </form>
    <p>
      <em>Note: All ramen dishes are served with standard ramen noodles.</em>
    </p>
  </div>

  <div id="results" class="text-container">
    <h2>Your Selections</h2>
      <p><strong>Broth:</strong> {{ pickedBroth }}</p>
      <p><strong>Meat:</strong> {{ pickedMeat }}</p>
      <p><strong>Toppings:</strong></p>
      <ul>
        <li v-for="(checkedTopping, index) in checkedToppings" :item="checkedTopping" :key="index">{{ checkedTopping }}</li>
      </ul>
    </div>
</v-content>
</template>

<script>
export default {
data() {
    return {
        pickedBroth: '',
        pickedMeat: '',
        checkedToppings: []
  };
},
methods: {
  orderValues() {
    this.$router.push("/review?"+this.pickedBroth+this.pickedMeat+this.checkedToppings);
  }
}
};
</script>

<style scoped>
form#order label {
display: block;
font-size: 20px;
}

form#order input[type="submit"] {
padding: 15px 30px;
background-color: #D84315;
color: white;
text-transform: uppercase;
margin: 20px 0;
transition: all 0.2s ease-in-out;
font-weight: 600;
letter-spacing: 1px;
}

form#order input[type="submit"]:hover, form#order input[type="submit"]:focus, form#order input[type="submit"]:target {
background-color: #E65100;
cursor: pointer;
}

form#order h3 {
text-align: center;
margin: 20px 0;
}

form#order img {
width: 100px;
height: 100px;
border-radius: 100px;
}

form#order div.form-group {
display: flex;
justify-content: center;
align-items: top;
text-align: center;
}

form#order div.form-group div {
margin: 20px;
}

ul li {
  list-style: none;
  display: inline;
}

ul li:after {
  content: ', ';
}

ul li:last-child:after {
  content: '';
}

div.text-container {
min-width: 360px;
max-width: 1200px;
margin: 20px auto;
text-align: center;
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