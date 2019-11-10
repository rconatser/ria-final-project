import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Routes from './routes';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


Vue.use(VueRouter);
Vue.use(VueResource);

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