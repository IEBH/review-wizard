import VueRouter from "vue-router";
import projectTemplateImport from "../helpers/projectTemplateImport";
import store from "../store";

const initializeRouter = async () => {
	const { routes } = await projectTemplateImport();

	const router = new VueRouter({
		routes // short for `routes: routes`
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

	return router;
};

export default initializeRouter;
