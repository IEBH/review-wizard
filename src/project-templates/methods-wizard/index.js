import ViewMethodPicot from "./ViewMethodPicot.vue";
import ViewMethodSearch from "./ViewMethodSearch.vue";
import ViewMethodSearchDatabses from "./ViewMethodSearchDatabases.vue";
import ViewMethodSearchRegistries from "./ViewMethodSearchRegistries.vue";
import ViewMethodSearchPublicationType from "./ViewMethodSearchPublicationType.vue";
import ViewMethodSearchSupplementoryMethods from "./ViewMethodSearchSupplementoryMethods.vue";
import ViewMethodScreening from "./ViewMethodScreening.vue";
import ViewMethodDataExtraction from "./ViewMethodDataExtraction.vue";
import ViewMethodAssessmentOfTheRiskOfBias from "./ViewMethodAssessmentOfTheRiskOfBias.vue";
import ViewMethodMeasurementOfEffect from "./ViewMethodMeasurementOfEffect.vue";
import ViewMethodUnitOfAnalysis from "./ViewMethodUnitOfAnalysis.vue";
import ViewMethodDealingWithMissingData from "./ViewMethodDealingWithMissingData.vue";
import ViewMethodHeterogeneityPublicationBias from "./ViewMethodHeterogeneityPublicationBias.vue";
import ViewMethodSubgroupAndSensitivityAnalysis from "./ViewMethodSubgroupAndSensitivityAnalysis.vue";
import ViewTitlepage from "./ViewTitlepage.vue";
import ViewHome from "./ViewHome.vue";
import ViewOutput from "./ViewOutput.vue";

// The path for deepstream, where the bulk of the information is kept (e.g. `methods/${projectId}`)
const deepstreamPath = "methods";

// The routes array for the router
const routes = [
	{ name: "home", path: "", component: ViewHome },
	{ path: "/:projectId", component: ViewHome },
	{
		name: "titlepage",
		path: "/:projectId/titlepage",
		component: ViewTitlepage
	},
	{
		name: "picot",
		path: "/:projectId/method/picot",
		component: ViewMethodPicot
	},
	{ path: "/:projectId/method/search", component: ViewMethodSearch },
	{
		path: "/:projectId/method/search/bibliographic-databases",
		component: ViewMethodSearchDatabses
	},
	{
		path: "/:projectId/method/search/trial-registries",
		component: ViewMethodSearchRegistries
	},
	{
		path: "/:projectId/method/search/publication-type",
		component: ViewMethodSearchPublicationType
	},
	{
		path: "/:projectId/method/search/supplementory-methods",
		component: ViewMethodSearchSupplementoryMethods
	},
	{ path: "/:projectId/method/screening", component: ViewMethodScreening },
	{
		path: "/:projectId/method/data-extraction",
		component: ViewMethodDataExtraction
	},
	{
		path: "/:projectId/method/risk-of-bias",
		component: ViewMethodAssessmentOfTheRiskOfBias
	},
	{
		path: "/:projectId/method/measurement-of-effect",
		component: ViewMethodMeasurementOfEffect
	},
	{
		path: "/:projectId/method/unit-of-analysis",
		component: ViewMethodUnitOfAnalysis
	},
	{
		path: "/:projectId/method/missing-data",
		component: ViewMethodDealingWithMissingData
	},
	{
		path: "/:projectId/method/heterogeneity-publication-biases",
		component: ViewMethodHeterogeneityPublicationBias
	},
	{
		path: "/:projectId/method/subgroup-sensitivity-analysis",
		component: ViewMethodSubgroupAndSensitivityAnalysis
	},
	{
		path: "/:projectId/output",
		component: ViewOutput
	}
];

// The data required for the project
const data = {
	titlepage: {
		title: "",
		authors: [""],
		year: 0
	},
	picot: {
		population: [{ inclusion: true }],
		intervention: [{ inclusion: true }],
		comparator: [{ inclusion: true }],
		outcomes: [{ inclusion: true, type: true }],
		setting: [{ inclusion: true }],
		types: []
	},
	search: {
		// Search Strategy
		components: [],
		specialist: [],
		helper: [],
		peerReviewer: [],
		searchAutomationTools: [],
		// Search Strings for Bibliographic Databases
		databases: [],
		dateOfSearch: null,
		dateSearchedUntil: null,
		// Search Strings for Trial Registries
		registries: [],
		registryDateOfSearch: null,
		registryDateSearchedUntil: null,
		// Restrictions on Publication Type
		isRestrictedByPublicationType: false,
		excludedPublicationTypes: [],
		isRestrictedByLanguage: false,
		includedLanguages: [],
		// Supplementory Methods
		supplementoryMethods: []
	},
	screening: {
		numberOfTitleAbstractScreeners: null,
		titleAbstractScreeners: [],
		fullTextRetrivalAuthor: null,
		numberOfFullTextScreeners: null,
		fullTextScreeners: [],
		disputeResolution: [],
		screenAutomationTools: [],
		isPrismaFlowDiagram: false,
		isExcludedFullTextInAppendix: false
	},
	extraction: {
		numberOfStudies: null,
		numberOfExtractors: null,
		extractionAuthors: [],
		//New
		optionalDetail: true,
		methods: [],
		participants: [],
		interventions: [],
		comparators: [],
		outcomes: [{ inclusion: true, type: true }],
		types: []
	},
	riskOfBias: {
		numberOfAuthors: null,
		isIndependent: false,
		toolUsed: []
	},
	measurementOfEffect: {
		toolUsed: null,
		dichotomousOutcomes: [],
		continuousOutcomes: [],
		otherOutcomes: [],
		metaAnalysisThreshold: null,
		metaAnalysisModelUsed: null
	},
	unitOfAnalysis: {
		type: null,
		otherType: null,
		example: null,
		example2: null
	},
	missingData: {
		isContactedInvestigators: false
	},
	heterogeneityPublicationBiases: {
		isMeasuredPublicationBias: false,
		heterogeneityMeasurement: null,
		heterogeneityMeasurementOther: null,
		biasMeasurement: null,
		biasMeasurementOther: null,
		didNotMeasure: "because fewer than 10 studies were included"
	},
	subgroupAndSensitivityAnalysis: {
		isSubgroupAnalysis: false,
		subgroupAnalysis: [""],
		whyNotSubgroupAnalysis: "We did not perform subgroup analysis",
		isSensitivityAnalysis: false,
		sensitivityAnalysis: [""],
		whyNotSensitivityAnalysis: "We did not perform sensitivity analysis"
	}
};

// The menu array which is used for the sidebar
const getMenu = projectId => [
	{
		header: true,
		title: "Methods-Wizard",
		hiddenOnCollapse: true
	},
	{
		title: "Title Page",
		icon: "pi pi-file",
		href: `/${projectId}/titlepage`
	},
	{
		header: true,
		title: "Method",
		hiddenOnCollapse: true
	},
	{
		title: "Eligibility Criteria (PICOST)",
		icon: "pi pi-file",
		href: `/${projectId}/method/picot`
	},
	{
		title: "Search Strategy",
		icon: "pi pi-search",
		child: [
			{
				href: `/${projectId}/method/search`,
				title: "Search Strategy"
			},
			{
				href: `/${projectId}/method/search/bibliographic-databases`,
				title: "Search Strings for Databases"
			},
			{
				href: `/${projectId}/method/search/trial-registries`,
				title: "Search Strings for Trial Registries"
			},
			{
				href: `/${projectId}/method/search/publication-type`,
				title: "Restrictions on Publication Type"
			},
			{
				href: `/${projectId}/method/search/supplementory-methods`,
				title: "Supplementary Methods"
			}
		]
	},
	{
		title: "Study Screening and Selection",
		icon: "pi pi-check",
		href: `/${projectId}/method/screening`
	},
	{
		title: "Data Extraction",
		icon: "pi pi-upload",
		href: `/${projectId}/method/data-extraction`
	},
	{
		title: "Assessment of the RoB",
		icon: "pi pi-exclamation-circle",
		href: `/${projectId}/method/risk-of-bias`
	},
	{
		title: "Measurement of Effect",
		icon: "pi pi-sliders-v",
		href: `/${projectId}/method/measurement-of-effect`
	},
	{
		title: "Unit of Analysis",
		icon: "pi pi-chart-bar",
		href: `/${projectId}/method/unit-of-analysis`
	},
	{
		title: "Dealing with Missing Data",
		icon: "pi pi-question",
		href: `/${projectId}/method/missing-data`
	},
	{
		title: "Heterogeneity/Publication Bias",
		icon: "pi pi-users",
		href: `/${projectId}/method/heterogeneity-publication-biases`
	},
	{
		title: "Subgroup and Sensitivity Analysis",
		icon: "pi pi-chart-line",
		href: `/${projectId}/method/subgroup-sensitivity-analysis`
	},
	{
		header: true,
		title: "Output",
		hiddenOnCollapse: true
	},
	{
		title: "Output",
		icon: "pi pi-download",
		href: `/${projectId}/output`
	}
];

export { deepstreamPath, routes, data, getMenu };
