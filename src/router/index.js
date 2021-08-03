import VueRouter from "vue-router";
// import store from "../store";
import ViewMethodPicot from "../components/ViewMethodPicot.vue";
import ViewMethodSearch from "../components/ViewMethodSearch.vue";
import ViewMethodSearchDatabses from "../components/ViewMethodSearchDatabases.vue";
import ViewMethodSearchRegistries from "../components/ViewMethodSearchRegistries.vue";
import ViewMethodSearchPublicationType from "../components/ViewMethodSearchPublicationType.vue";
import ViewMethodSearchSupplementoryMethods from "../components/ViewMethodSearchSupplementoryMethods.vue";
import ViewMethodScreening from "../components/ViewMethodScreening.vue";
import ViewMethodDataExtraction from "../components/ViewMethodDataExtraction.vue";
import ViewMethodAssessmentOfTheRiskOfBias from "../components/ViewMethodAssessmentOfTheRiskOfBias.vue";
import ViewMethodMeasurementOfEffect from "../components/ViewMethodMeasurementOfEffect.vue";
import ViewMethodUnitOfAnalysis from "../components/ViewMethodUnitOfAnalysis.vue";
import ViewMethodDealingWithMissingData from "../components/ViewMethodDealingWithMissingData.vue";
import ViewMethodHeterogeneityPublicationBias from "../components/ViewMethodHeterogeneityPublicationBias.vue";
import ViewMethodSubgroupAndSensitivityAnalysis from "../components/ViewMethodSubgroupAndSensitivityAnalysis.vue";
import ViewTitlepage from "../components/ViewTitlepage.vue";
import ViewHome from "../components/ViewHome.vue";
import ViewOutput from "../components/ViewOutput.vue";

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
		path: "/:articleId/method/search/bibliographic-databases",
		component: ViewMethodSearchDatabses
	},
	{
		path: "/:articleId/method/search/trial-registries",
		component: ViewMethodSearchRegistries
	},
	{
		path: "/:articleId/method/search/publication-type",
		component: ViewMethodSearchPublicationType
	},
	{
		path: "/:articleId/method/search/supplementory-methods",
		component: ViewMethodSearchSupplementoryMethods
	},
	{ path: "/:articleId/method/screening", component: ViewMethodScreening },
	{
		path: "/:articleId/method/data-extraction",
		component: ViewMethodDataExtraction
	},
	{
		path: "/:articleId/method/risk-of-bias",
		component: ViewMethodAssessmentOfTheRiskOfBias
	},
	{
		path: "/:articleId/method/measurement-of-effect",
		component: ViewMethodMeasurementOfEffect
	},
	{
		path: "/:articleId/method/unit-of-analysis",
		component: ViewMethodUnitOfAnalysis
	},
	{
		path: "/:articleId/method/missing-data",
		component: ViewMethodDealingWithMissingData
	},
	{
		path: "/:articleId/method/heterogeneity-publication-biases",
		component: ViewMethodHeterogeneityPublicationBias
	},
	{
		path: "/:articleId/method/subgroup-sensitivity-analysis",
		component: ViewMethodSubgroupAndSensitivityAnalysis
	},
	{
		path: "/:articleId/output",
		component: ViewOutput
	}
];

const router = new VueRouter({
	routes // short for `routes: routes`
});

export default router;
