import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        response: { 
            firstName: '',
            lastName: '',
            email: '',
            broth: '',
            meat: '',
            toppings: []
        }
    },
    mutations: {
        updateInfo(state, payload) {
            state.response.firstName = payload.firstName;
            state.response.lastName = payload.lastName;
            state.response.email = payload.email;
            state.response.broth = payload.broth;
            state.response.meat = payload.meat;
            state.response.toppings = payload.toppings;
        }
    }

});