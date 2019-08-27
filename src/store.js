import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
      stocks: [],
      funds: 0,
      dialog: false,
      selectedStocks: []     //Type Array - Stocks selected in stock page search bar (searchAutoComplete page)
    },
    getters: {
      stocks: state => {
        return state.stocks
      },
      selectedStocks: state => {
        return state.selectedStocks;
      }
    },
    mutations: {
      addFunds(state) {
        state.funds += 100;
      },
      addStocks(state, payload) {
        state.stocks.push(payload);
      },
      clearStocks(state) {
        state.stocks.length = 0;
      },
      changeDialog(state){
        state.dialog = !state.dialog;
      },
      addSelectedStocks(state, payload) {
        state.selectedStocks.push(payload);
      },
      removeSelectedStocks(state, payload){
        state.selectedStocks.splice(payload, 1);
      },
      removeAllSelectedStocks(state){
        state.selectedStocks.length = 0;
      }
   },
   actions: {
    addStocks ({commit}, payload) {
      commit('addStocks', payload);
    },
    clearStocks({commit}) {
      commit('clearStocks');
    },
    addSelectedStocks({commit}, payload) {
      commit('addSelectedStocks', payload);
    },
    removeSelectedStocks({commit}, payload) {
      commit('removeSelectedStocks', payload);
    },
    removeAllSelectedStocks({commit}){
      commit('removeAllSelectedStocks');
    }
  }
});