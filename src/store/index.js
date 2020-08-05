import Vue from "vue";
import Vuex from "vuex";
import VuexEasyFirestore from "vuex-easy-firestore";
Vue.use(Vuex);

// import from step 1
import { Firebase, initFirebase } from "./config/firebase.js";
// import from step 3 (below)
import method from "./modules/method.js";

// do the magic 🧙🏻‍♂️
const easyFirestore = VuexEasyFirestore([method], {
  logging: true,
  FirebaseDependency: Firebase
});

// include as PLUGIN in your vuex store
// please note that "myModule" should ONLY be passed via the plugin
const storeData = {
  plugins: [easyFirestore],
  state: {
    activeArticle: false
  },
  mutations: {
    setActiveArticle(state, bool) {
      state.activeArticle = bool;
    }
  }
};

// initialise Vuex
const store = new Vuex.Store(storeData);

// initFirebase
initFirebase().catch(error => {
  console.log(error);
  // take user to a page stating an error occurred
  // (might be a connection error, or the app is open in another tab)
});

export default store;
