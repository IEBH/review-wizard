// Base Vue/Vite app bootstraping
import {createApp} from 'vue'

import App from './App.vue';
let app = globalThis.app = createApp(App);


// Import the store
import store from "./store";
app.use(store);

// Primevue
import PrimeVue from "primevue/config";
app.use(PrimeVue, { ripple: true  });

// Setup the sidebar menu
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
app.use(VueSidebarMenu);

// $router
import {createRouter, createWebHistory} from 'vue-router';
const router = app.router = createRouter({
	history: createWebHistory(),
	routes: [], // Populated individually below
});

// Routes {{{
app.use(router);
// }}}

// Mount + go
app.mount('#app')
