/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
import VueRouter from "vue-router";
import { mapState, mapGetters } from "vuex";
import App from "./components/app";
import Next from "./components/next";
import store from "./store";

window.Vue = require("vue");
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/test",
            name: "root",
            component: App
        },
        {
            path: "/next",
            name: "next",
            component: Next
        }
    ]
});

const app = new Vue({
    el: "#app",
    router,
    store
});
