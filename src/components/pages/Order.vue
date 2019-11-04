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

      <form id="order">
        <!-- Radio Buttons for Broth & Meat Toppings -->
        <h3>Choose Your Broth (Limit One)</h3>
        <div class="section">
          <div>
            <img width="100" height="100" src="../../assets/food-items/chicken-broth.jpg" />
            <label for="chicken-broth">Chicken Broth</label>
            <input type="radio" name="chicken-broth" value="chicken-broth" v-model="order.broth" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/beef-broth.jpg" />
            <label for="beef-broth">Beef Broth</label>
            <input type="radio" name="beef-broth" value="beef" v-model="order.broth" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/miso-broth.jpeg" />
            <label for="miso-broth">Miso Broth</label>
            <input type="radio" name="miso-broth" value="miso" v-model="order.broth" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/shoyu-broth.jpg" />
            <label for="shoyu-broth">Shoyu Broth</label>
            <input type="radio" name="shoyu-broth" value="shoyu" v-model="order.broth" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/shio-broth.jpg" />
            <label for="shio-broth">Shio Broth</label>
            <input type="radio" name="shio-broth" value="shio" v-model="order.broth" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/tonkotsu-broth.jpg" />
            <label for="tonkotsu-broth">Tonkotsu Broth</label>
            <input type="radio" name="tonkotsu-broth" value="tonkotsu" v-model="order.broth" />
          </div>
        </div>
        <h3>Choose Your Meat (Limit One)</h3>
        <div class="section">
          <div>
            <img width="100" height="100" src="../../assets/food-items/chicken.jpg" />
            <label for="sliced-chicken">Chicken</label>
            <input type="radio" name="sliced-chicken" value="chicken" v-model="order.meat" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/beef.jpg" />
            <label for="sliced-steak">Steak</label>
            <input type="radio" name="sliced-steak" value="steak" v-model="order.meat" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/chasu.jpg" />
            <label for="sliced-chasu">Chasu (Pork)</label>
            <input type="radio" name="sliced-chasu" value="chasu" v-model="order.meat" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/shrimp.jpg" />
            <label for="shrimp">Shrimp</label>
            <input type="radio" name="shrimp" value="shrimp" v-model="order.meat" />
          </div>
        </div>

        <!-- Checkboxes for Toppings -->
        <h3>Choose Your Toppings</h3>
        <div class="section">
          <div>
            <img width="100" height="100" src="../../assets/food-items/green-onion.jpg" />
            <label for="green-onion">Green Onions</label>
            <input type="checkbox" value="green-onion" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/onion.jpg" />
            <label for="onion">Onion</label>
            <input type="checkbox" value="onion" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/broccoli.jpg" />
            <label for="broccoli">Broccoli</label>
            <input type="checkbox" value="broccoli" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/carrot.jpg" />
            <label for="carrot">Carrots</label>
            <input type="checkbox" value="carrot" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/mushrooms.jpg" />
            <label for="mushroom">Mushrooms</label>
            <input type="checkbox" value="mushroom" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/corn.jpg" />
            <label for="corn">Corn</label>
            <input type="checkbox" value="corn" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/cilantro.jpg" />
            <label for="cilantro">Cilantro</label>
            <input type="checkbox" value="cilantro" v-model="order.toppings" />
          </div>
        </div>
        <div class="section">
          <div>
            <img width="100" height="100" src="../../assets/food-items/lime.jpg" />
            <label for="lime">Lime</label>
            <input type="checkbox" value="lime" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/egg.jpg" />
            <label for="egg">Soft Boiled Egg</label>
            <input type="checkbox" value="egg" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/red-pepper.jpg" />
            <label for="red-pepper">Red Bell Pepper</label>
            <input type="checkbox" value="red-pepper" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/seseme-seeds.jpg" />
            <label for="seseme-seeds">Toasted Seseme Seeds</label>
            <input type="checkbox" value="seseme-seeds" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/nori.jpg" />
            <label for="nori">Nori</label>
            <input type="checkbox" value="nori" v-model="order.toppings" />
          </div>
          <div>
            <img width="100" height="100" src="../../assets/food-items/naruto.jpg" />
            <label for="naruto">Naruto</label>
            <input type="checkbox" value="naruto" v-model="order.toppings" />
          </div>
        </div>
        <input v-ripple type="submit" value="Submit Order" v-on:click.prevent="order" />
      </form>
      <p>
        <em>Note: All ramen dishes are served with standard ramen noodles.</em>
      </p>
    </div>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      order: {
        broth: "",
        meat: "",
        toppings: []
      }
    };
  },
  methods: {}
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

form#order div.section {
  display: flex;
  justify-content: center;
  align-items: top;
  text-align: center;
}

form#order div.section div {
  margin: 20px;
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