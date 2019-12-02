import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const staff = new Vuex.Store({
    state: {
        members: [
            {name:'Tracy Ibarra',position:'Manager',cell:'801-468-2955',image:'./../../assets/staff/woman.jpg'},
            {name:'Mark Davis',position:'Assistant',cell:'385-394-7619',image:'./../../assets/staff/man-1.jpg'},
            {name:'Phil Foster',position:'Head Chef',cell:'801-489-2805',image:'./../../assets/staff/man-2.jpg'},
        ]
    }
});