import Vue from "vue";
import App from "./App.vue";

// Setup vue router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import initializeRouter from "./router";

// Import the store
import store from "./store";

// Setup the sidebar menu
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
Vue.use(VueSidebarMenu);

// Setup toast
import ToastService from "primevue/toastservice";
Vue.use(ToastService);

Vue.config.productionTip = false;

(async () => {
	const router = await initializeRouter();
	new Vue({
		router,
		store,
		render: h => h(App)
	}).$mount("#app");
})();
