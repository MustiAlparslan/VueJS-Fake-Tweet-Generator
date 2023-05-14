import { Months } from "@/constants";
import { createStore } from "vuex";

const store = createStore({
  state: {
    name: "",
    username: "",
    tweet: "",
    like: 0,
    retweet: 0,
    imageUrl: null,
    bookMark: 0,
    views: 0,
    quotes: 0,
    isVerified: false,
    months: Months
  },
  mutations: {
    setIsVerified(state,payload){
      state.isVerified = payload
    }
  },
  actions: {},
  modules: {},
  getters: {},
});

export default store;
