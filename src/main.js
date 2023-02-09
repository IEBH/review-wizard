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

//import element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

// Register all Input/Base Components Globally {{{
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
	// The relative path of the components folder
	"./components",
	// Whether or not to look in subfolders
	false,
	// The regular expression used to match base component filenames
	/(Input|Base)[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
	// Get component config
	const componentConfig = requireComponent(fileName);

	// Get PascalCase name of component
	const componentName = upperFirst(
		camelCase(
			// Gets the file name regardless of folder depth
			fileName
				.split("/")
				.pop()
				.replace(/\.\w+$/, "")
		)
	);

	// Register component globally
	Vue.component(
		componentName,
		// Look for the component options on `.default`, which will
		// exist if the component was exported with `export default`,
		// otherwise fall back to module's root.
		componentConfig.default || componentConfig
	);
});
// }}}

(async () => {
	const router = await initializeRouter();
	new Vue({
		router,
		store,
		render: h => h(App)
	}).$mount("#app");
})();
