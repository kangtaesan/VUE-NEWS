//vue3 + vuex4 문법
import { createStore } from 'vuex'
import mutations from '../store/mutations'
import actions from '../store/actions'

export default createStore({
    state: {
        news: [],
        jobs: [],
        asks: [],
        user: {},
        item: {},
        list: [],
        loadingStatus: false,
    },
    getters: {
        fetchedAsk(state) {
            return state.asks;
        },
        fetchedItem(state) {
            return state.item;
        },
        fetchedSpinner(state) {
            return state.loadingStatus;
        },
    },
    mutations, //mutations: mutations
    actions, //actions: actions
})

//vue2 + vue3 문법
/* import Vue from 'vue'
import Vuex from 'vuex';

createApp().use(Vuex);
const store = new Vuex.Store({
    state: {
        news: []
    }
});
export default store */
