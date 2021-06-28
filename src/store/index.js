import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import Auth, { HTTP_STATUS } from '../services/auth'
import CONFIG from "../config";

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem(CONFIG.JWT_TOKEN_KEY) || '',
    user: {}
  },
  mutations: {
    AUTH_SUCCESS(state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
    },
    AUTH_ERROR(state) {
      state.status = 'error';
    },
    AUTH_RESET(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {

    login({ commit }, user) {

    let response = Auth.authenticate(user);
    if (response.status === HTTP_STATUS.OK) {
      let token = response.data.jwt_token;
      localStorage.setItem(CONFIG.JWT_TOKEN_KEY, token);
      commit('AUTH_SUCCESS', token, user);
    } else {
      localStorage.removeItem(CONFIG.JWT_TOKEN_KEY);
      commit('AUTH_ERROR');
    }          

    },
    logout({ commit }) {
      localStorage.removeItem(CONFIG.JWT_TOKEN_KEY)
      commit('AUTH_RESET')
    }
  },
  getters: {
    isLoggedIn: state => Auth.verify(state.token)
  }
})