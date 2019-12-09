# RIA Final Project Description
Final project for Rich Internet Applications 1 regarding knowledge of VueJS. 

## Overview of Website
Features a mock Ramen Restaurant website where the restaurant's name is "Fortune Ramen", and users can go and place an online order, learn more about and contact the restaurant, and view the long list of ingredients used in the restaurant's dishes in a tasteful way.

## GitHub URL
https://github.com/rconatser/ria-final-project.git

## Netlify URL (Where Deployed Online)
https://zealous-shirley-8c8d58.netlify.com


# Project Requirements with Code Snippets
### Conditional logic and array methods render large lists
Seen in "OurMenu.vue"

<details><summary>Snippet</summary>

```HTML
<!-- Renders list of 24 items from Firebase -->
<!-- Seen in OurMenu.vue -->
<li v-for="ingredient in ingredients" :key="ingredient">
     <!-- ..... -->
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
    <!-- ..... -->
</li>
```
</details>

---

### Code encapsulated as single-file components
Seen in "App.vue"

<details><summary>Snippet</summary>

```HTML
<!-- All pages are single file components potentially utilizing other components -->
<!-- Seen in App.vue -->
<template>
  <v-app>
    <app-header />
    <v-content>
      <transition name="router-anim" enter-active-class="animated fadeInUp" leave-active-class="animated slideOutRight">
        <router-view :members="members" />
      </transition>
    </v-content>
    <app-footer />
  </v-app>
</template>
```
</details>

---

### Code created and managed with real development tools
Seen in "Main.js"
<details><summary>Snippet</summary>

```Javascript
//... Seen in main.js
// Utilized all of these tools in at least one location
import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './routes';
import{ store } from './store/store';
import Vuelidate from 'vuelidate';
//...
```
</details>

---

### Properly used Git with 4 days of commits per week
#### GitHub URL
https://github.com/rconatser/ria-final-project.git

---

### Component communication
Seen in "App.vue"
<details><summary>Snippet</summary>

```Javascript
//... Seen in App.vue
members: [
    {name:'Tracy Ibarra',position:'Manager',cell:'801-468-2955',bg:'woman'},
    {name:'Mark Davis',position:'Assistant',cell:'385-394-7619',bg:'man-1'},
    {name:'Phil Foster',position:'Head Chef',cell:'801-489-2805',bg:'man-2'}
]
```

```Javascript
//... Seen in ContactUs.vue
export default {
  props: ['members']
}
```
</details>

---

### User input form with validation
Seen in "Form.vue"

<details><summary>Snippet</summary>

```HTML
 <!-- ...Seen in Form.vue  -->
    <form ref="form" type="POST">
        <!-- Required Text Fields (Name / Email) -->
        <div class="form-group">
            <h3 class="mb-0">Your Information</h3>
            <v-text-field
            class="text-field"
            v-model="firstName"
            :error-messages="firstNameErrors"
            :counter="12"
            label="First Name"
            required
            @blur="$v.firstName.$touch()"
            ></v-text-field>
            <v-text-field
            class="text-field"
            v-model="lastName"
            :error-messages="lastNameErrors"
            :counter="14"
            label="Last Name"
            required
            @blur="$v.lastName.$touch()"
            ></v-text-field>
            <v-text-field
            class="text-field"
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @blur="$v.email.$touch()"
            ></v-text-field>
        </div>
        <div class="form-group">
            <h3 class="mb-0">The Essentials</h3>
            <!-- Required Broth Choice -->
            <v-select 
            class="select-field"
            v-model="broth"
            :items="broths"
            :error-messages="brothErrors"
            label="Choice of Broth"
            required
            @blur="$v.broth.$touch()"
            ></v-select>
            <!-- Required Meat Choice -->
            <v-select
            class="select-field"
            v-model="meat"
            :items="meats"
            :error-messages="meatErrors"
            label="Choice of Meat"
            required
            @blur="$v.meat.$touch()"
            ></v-select>
        </div>
        <div class="form-group">
            <!-- Optional Toppings -->
            <div class="toppings">
                <h3>Choose your Toppings</h3>
                <v-checkbox 
                class="checkboxes"
                v-model="selectedToppings"
                v-for="topping in toppings"
                :key="topping"
                :label="topping"
                :value="topping"
                ></v-checkbox>
            </div>
        </div>
        <v-btn
        color="orange darken-4 white--text"
        class="mt-12"
        v-ripple
        :disabled="$v.$invalid"
        @click="submit"
        >
        Submit Order
        </v-btn>
    </form>
```

```Javascript
//... Seen in Form.vue
// Validation information utilizing Vuelidate as a resource
    validations: {
      firstName: { required, maxLength: maxLength(12) },
      lastName: { required, maxLength: maxLength(14) },
      email: { required, email },
      broth: { required },
      meat: { required },
      selectedToppings: {
        checked (val) {
          return val
        },
      },
    },
```
</details>

---

### Custom directive developed and used
Seen in "Main.js"

<details><summary>Snippet</summary>

```Javascript
//... Seen in main.js
// Custom Directive, creates pulsing border on buttons, as seen on the Sticky Button located on all pages
Vue.directive('pulse', {
  bind(el){
    el.style.boxShadow = "0 0 0 rgba(0,0,0,.2)";
    el.animate([
      // keyframes
      { boxShadow: '0 0 0 rgba(0,0,0,.3)' }, 
      { boxShadow: '0 0 0 5px rgba(0,0,0,.3)' },
      { boxShadow: '0 0 0 10px rgba(0,0,0,0)' }
    ], { 
      // timing options
      duration: 3000,
      iterations: Infinity
    });
  }
});
```
</details>

---

### Animation(s) and transition(s) used
Seen in "App.vue"

<details><summary>Snippet</summary>

```HTML
<!-- ... Seen in App.vue  -->
<transition name="router-anim" enter-active-class="animated fadeInUp" leave-active-class="animated slideOutRight">
        <!-- ... -->
</transition>
```
</details>

---

### At least 3 Routes provided
Seen in "Routes.js"

<details><summary>Snippet</summary>

```Javascript
//... Seen in routes.js
    { path: '', component: AboutUs},
    { path: '/home', component: AboutUs },
    { path: '/menu', component: OurMenu },
    { path: '/order', component: Order },
    { path: '/contact', component: ContactUs },
    { path: '/review', component: YourOrder }
//...
```
</details>

---

### State managed using Vuex
Seen in "Store/Store.js"

<details><summary>Snippet</summary>

```Javascript
//... Seen in store/store.js
Vuex.Store({
    state: {
        response: { 
            firstName: '',
            lastName: '',
            email: '',
            broth: '',
            meat: '',
            toppings: []
        }
    }//...
//... 
)};
```
</details>

---

### Utilized Firebase for HTTP Request
Seen in "OurMenu.vue"

<details><summary>Snippet</summary>

```Javascript
    axios.get('https://ramen-ingredients.firebaseio.com/ingredients.json')
    // Gets info and assigns it to ingredients array while catching any errors.
    .then(response => {
        const allIngredients = response.data
        const objectsToArray = Object.entries(allIngredients).map(e => Object.assign(e[1], {key: e[0]}),
        )
        this.ingredients = objectsToArray;
    }) //...
```
</details>

---

### App structured, documented, and deployed
#### Netlify URL (Where Deployed Online)
https://zealous-shirley-8c8d58.netlify.com