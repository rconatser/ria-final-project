import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        response: { // Default Response
            firstName: '',
            lastName: '',
            email: '',
            broth: '',
            meat: '',
            toppings: []
        }
    },
    getters: {
        firstName: state => {
            return state.response.firstName;
        },
        lastName: state => {
            return state.response.lastName;
        },
        email: state => {
            return state.response.email;
        },
        broth: state => {
            return state.response.broth;
        },
        meat: state => {
            return state.response.meat;
        },
        toppings: state => {
            return state.response.toppings;
        }
    },
    mutations: {
        updateFirstName: (state, payload) => {
            state.response.firstName = payload;
        },
        updateLastName: (state, payload) => {
            state.response.lastName = payload;
        },
        updateEmail: (state, payload) => {
            state.response.email = payload;
        },
        updateBroth: (state, payload) => {
            state.response.broth = payload;
        },
        updateMeat: (state, payload)  => {
            state.response.meat = payload;
        },
        updateToppings: (state, payload) => {
            state.response.toppings = payload;
        }       
    },
    actions: {
        updateFirstName: ({commit}, payload) => {
            commit('updateFirstName', payload);
        },
        updateLastName: ({commit}, payload) => {
            commit('updateLastName', payload);
        },
        updateEmail: ({commit}, payload) => {
            commit('updateEmail', payload);
        },
        updateBroth: ({commit}, payload) => {
            commit('updateBroth', payload);
        },
        updateMeat: ({commit}, payload) => {
            commit('updateMeat', payload);
        },
        updateToppings: ({commit}, payload) => {
            commit('updateToppings', payload);
        }
    }
});