import VueRouter from "vue-router";
// import store from "../store";
import ViewMethodPicot from "../components/ViewMethodPicot.vue";
import ViewMethodSearch from "../components/ViewMethodSearch.vue";
import ViewMethodSearchBibliographic from "../components/ViewMethodSearchBibliographic.vue";
import ViewTitlepage from "../components/ViewTitlepage.vue";
import ViewHome from "../components/ViewHome.vue";

const routes = [
  { name: "home", path: "", component: ViewHome },
  { path: "/:articleId", component: ViewHome },
  {
    name: "titlepage",
    path: "/:articleId/titlepage",
    component: ViewTitlepage
  },
  {
    name: "picot",
    path: "/:articleId/method/picot",
    component: ViewMethodPicot
  },
  { path: "/:articleId/method/search", component: ViewMethodSearch },
  {
    path: "/:articleId/method/search/bibliographic",
    component: ViewMethodSearchBibliographic
  },
  { path: "/:articleId/method/screening", component: ViewMethodPicot }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
