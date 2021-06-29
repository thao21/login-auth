import Vue from "vue";
import store from '../store/index'
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login";
import Register from "@/views/Register";
import NotFound from "@/views/NotFound";

Vue.use(VueRouter);

const notRequireLoggedIn = (to, from, next) => {
    if (!store.getters.isLoggedIn) {
        next();
        return;
    }
    next('/')
}

const requireLoggedIn = (to, from, next) => {
    if (store.getters.isLoggedIn && !to.meta.disableIfLoggedIn) {
        next();
        return;
    }
    next( '/login')
}

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        beforeEnter: requireLoggedIn
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            disableIfLoggedIn: true
        },
        beforeEnter: notRequireLoggedIn
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        beforeEnter: notRequireLoggedIn
    },
    {
        path: "*",
        name: "NotFound",
        component: NotFound
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;