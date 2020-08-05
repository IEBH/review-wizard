import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

import ViewMethodPicot from "./components/ViewMethodPicot.vue";
import ViewHome from "./components/ViewHome.vue";

const routes = [
  { path: "", name: "home", component: ViewHome },
  { path: "/method/picot", component: ViewMethodPicot }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  if (to.name !== "home" && !store.state.activeArticle) next({ name: "home" });
  else next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
