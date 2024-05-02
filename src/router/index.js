import VueRouter from "vue-router";
import projectTemplateImport from "../helpers/projectTemplateImport";

const initializeRouter = async () => {
	const { routes } = await projectTemplateImport();

	const router = new VueRouter({
		routes // short for `routes: routes`
	});

	return router;
};

export default initializeRouter;
