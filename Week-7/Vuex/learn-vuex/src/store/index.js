import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter+=randomNumber;
    },
    decreaseCounter(state) {
      state.counter--;
    },
  },
  actions: {
    increaseCounter({ commit }) {
      console.log("increase");
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
        ).then((res) => {
          commit("increaseCounter", res.data);
        });
      },
    },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});