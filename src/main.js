import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './routes';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import{ store } from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

// Custom Directives
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

Vue.http.options.root = 'https://ramen-ingredients.firebaseio.com/ramen-ingredients.json';

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')