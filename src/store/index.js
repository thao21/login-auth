import Vue from "vue";
import Vuex from "vuex";
import { JWT_TOKEN_KEY } from "../config";

Vue.use(Vuex);

import Auth, { HTTP_STATUS } from '../services/auth'

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem(JWT_TOKEN_KEY) || '',
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

      return new Promise((resolve, reject) => {
        let response = Auth.authenticate(user);
        if (response.status === HTTP_STATUS.OK) {
          commit('AUTH_SUCCESS', response.data.jwt_token, user);
          localStorage.setItem(JWT_TOKEN_KEY, this.state.token);
          resolve(user);
        } else {
          commit('AUTH_ERROR');
          localStorage.removeItem(JWT_TOKEN_KEY);
          reject(response);
        }              
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
      localStorage.removeItem(JWT_TOKEN_KEY)
      commit('AUTH_RESET');
      resolve();
      })
    }
  },
  getters: {
    isLoggedIn: state => Auth.verify(state.token),
    getLoggedUser: state => state.user
  }
})