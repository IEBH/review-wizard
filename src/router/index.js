import VueRouter from "vue-router";
import store from "../store";

const router = new VueRouter({
	routes: []
	// routes // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
	var projectId = to.query["project-id"] || to.params.projectId;
	if (projectId && projectId != store.state.projectId) {
		console.log("Initializing project ID:", projectId);
		store
			.dispatch("initializeFromProjectId", projectId)
			.then(() => {
				next();
			})
			.catch(err => {
				router.replace("/");
				alert(err);
				console.error(err);
			});
	} else {
		next();
	}
});

const initializeRouter = async () => {
	const { routes } = await import(
		"../components/" + process.env.VUE_APP_TEMPLATE + "/index.js"
	);
	router.addRoutes(routes);
};

initializeRouter();

export default router;
