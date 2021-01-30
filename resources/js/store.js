import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        LocalCount: window.localStorage.getItem("LocalCount")
    },
    mutations: {
        addCounter(state, num) {
            state.count += num;
        },
        addLocalCounter(state, num) {
            var localnum = Number(state.LocalCount);
            var count = localnum + num;
            localStorage.setItem("LocalCount", count);
            state.LocalCount = count;
        },
        resetCounter(state) {
            state.count = 0;
        },
        resetLocalCounter(state) {
            window.localStorage.setItem("LocalCount", 0);
            state.LocalCount = 0;
        }
    },
    actions: {
        addCounter(context, num) {
            context.commit("addCounter", num);
        },
        resetCounter(context) {
            context.commit("resetCounter");
        },
        addLocalCounter(context, num) {
            context.commit("addLocalCounter", num);
        },
        resetLocalCounter(context) {
            context.commit("resetLocalCounter");
        }
    }
});
