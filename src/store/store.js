import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        response: {
            pickedBroth: '',
            pickedMeat: '',
            checkedToppings: []
        }
    }
});