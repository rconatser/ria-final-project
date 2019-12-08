import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        response: {
            pickedBroth: '',
            pickedMeat: '',
            checkedToppings: [],
            subtotal: '',
            firstName: '',
            lastName: '',
            email: ''
        }
    },
    mutations: {
        updateFirstName (state, firstName) {
          state.obj.firstName = firstName
        },
        updateLastName (state, lastName) {
            state.obj.lastName = lastName
        },
        updateEmail (state, email) {
            state.obj.email = email
        },
        updateBroth (state, pickedBroth) {
            state.obj.pickedBroth = pickedBroth
        },
        updateMeat (state, pickedMeat) {
            state.obj.pickedMeat = pickedMeat
        },
        updateToppings (state, checkedToppings) {
            state.obj.checkedToppings = checkedToppings
        }
      }
});