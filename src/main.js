import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './routes';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(VueRouter);
Vue.use(Axios);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBf5zqvGanW1rwGjF7YYDcVjbmmROujSZM",
  authDomain: "ramen-nutrition.firebaseapp.com",
  databaseURL: "https://ramen-nutrition.firebaseio.com",
  projectId: "ramen-nutrition",
  storageBucket: "ramen-nutrition.appspot.com",
  messagingSenderId: "599047285369",
  appId: "1:599047285369:web:83439892f3883d70d8c2a8",
  measurementId: "G-YCKD8GRL4Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);