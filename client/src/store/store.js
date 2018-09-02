import Vue from 'vue';
import Vuex from 'vuex';
import {SET_TOKEN, SET_USER} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },
  mutations: {
    [SET_TOKEN] (state, token) {
      state.token = token;
      state.isUserLoggedIn = !!token;
    },
    [SET_USER] (state, user) {
      state.user = user;
    },
  },
  actions: {
    [SET_TOKEN] ({commit}, token) {
      commit(SET_TOKEN, token);
    },
    [SET_USER] ({commit}, user) {
      commit(SET_USER, user);
    },
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    isUserLoggedIn: (state) => {
      return !! state.isUserLoggedIn;
    },
  },
});
