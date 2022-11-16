import Vue from "vue";
import App from "./App.vue";

// Setup vue router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router";

// Import the store
import store from "./store";

// Setup the sidebar menu
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
Vue.use(VueSidebarMenu);

// Setup toast
import ToastService from "primevue/toastservice";
Vue.use(ToastService);

//import element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
