import Vue from "vue";
import store from '../store/index'
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login";
import Register from "@/views/Register";

Vue.use(VueRouter);


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isLoggedIn) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: ifAuthenticated
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: ifNotAuthenticated
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;