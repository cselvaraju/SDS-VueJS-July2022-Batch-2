import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    countHistory: [],
  },
  getters: {
    squaredCount(state) {
      return state.count * state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
      state.countHistory.push(state.count);
    },

    decrement(state) {
      state.count--;
      state.countHistory.push(state.count);
    },
  },
  actions: {
    incrementAfter2s(context) {
      setTimeout(() => context.commit('increment'), 2000);
    },

    increment(context) {
      context.commit('increment');
    },

    decrement(context) {
      context.commit('decrement');
    }
  },
  modules: {},
});
