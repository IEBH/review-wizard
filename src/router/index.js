import VueRouter from "vue-router";
// import store from "../store";
import ViewMethodPicot from "../components/ViewMethodPicot.vue";
import ViewHome from "../components/ViewHome.vue";

const routes = [
  { path: "", name: "home", component: ViewHome },
  { path: "/:articleId/method/picot", component: ViewMethodPicot },
  { path: "/:articleId/method/searchStrategy", component: ViewMethodPicot },
  { path: "/:articleId/method/screening", component: ViewMethodPicot }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
