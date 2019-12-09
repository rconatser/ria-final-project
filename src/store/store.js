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
    mutations: {
        updateInfo: ({
            commit,
            state
        }) => {
            commit("?", {
                firstName: state.response.firstName,
                lastName: state.response.lastName,
                email: state.response.email,
                broth: state.response.broth,
                meat: state.response.meat,
                toppings: state.response.toppings
            });
        }  
    },
    actions: {
        updateInfo: ({
            commit,
            state
        }) => {
            commit("?", {
                firstName: state.response.firstName,
                lastName: state.response.lastName,
                email: state.response.email,
                broth: state.response.broth,
                meat: state.response.meat,
                toppings: state.response.toppings
            });
        }
    }
});