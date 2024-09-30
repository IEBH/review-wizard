import ViewHome from "./ViewHome.vue";
import ViewScopingTitlePage from "./ViewScopingTitlepage.vue";
import ViewScopingTitlePagePeople from "./ViewScopingTitlePagePeople.vue";
import ViewScopingResearchPlan from "./ViewScopingResearchPlan.vue";
import ViewScopingIntroduction from "./ViewScopingIntroduction.vue";
import ViewScopingPicot from "./ViewScopingPicot.vue";
import ViewScopingSearchStrategy from "./ViewScopingSearchStrategy.vue";
import ViewScopingSearchStrings from "./ViewScopingSearchStrings.vue";
import ViewScopingScreening from "./ViewScopingScreening.vue";
import ViewScopingDataExtraction from "./ViewScopingDataExtraction.vue";
import ViewScopingAssessmentOfTheRiskOfBias from "./ViewScopingAssessmentOfTheRiskOfBias.vue";
import ViewScopingAnalysisOfData from "./ViewScopingAnalysisOfData.vue";
import ViewScopingAnalysisApproach from "./ViewScopingAnalysisApproach.vue";
import ViewScopingDealingWithMissingData from "./ViewScopingDealingWithMissingData.vue";
import ViewScopingSubgroupAndSensitivityAnalysis from "./ViewScopingSubgroupAndSensitivityAnalysis.vue";
import ViewScopingContributions from "./ViewScopingContributions.vue";
import ViewScopingAcknowledgement from "./ViewAcknowledgement.vue";
import ViewScopingOutput from "./ViewScopingOutput.vue";
import ViewScopingDataExtractionReport from "./ViewScopingDataExtractionReport.vue";

const getMenu = () => [
	{
		header: true,
		title: "PLANNING",
		hiddenOnCollapse: true
	},
	{
		title: "Title Page",
		icon: "pi pi-file",
		href: `/planning/titlepage`
	},
	{
		title: "People",
		icon: "pi pi-file",
		href: `/planning/people`
	},
	{
		title: "Scoping Plan",
		icon: "pi pi-list",
		href: `/planning/rs-plan`
	},
	{
		header: true,
		title: "INTRODUCTION",
		hiddenOnCollapse: true
	},
	{
		title: "Introduction",
		icon: "pi pi-pencil",
		href: `/introduction`
	},
	{
		header: true,
		title: "METHODS",
		hiddenOnCollapse: true
	},
	{
		title: "Eligibility Criteria (PCCTT)",
		icon: "pi pi-file",
		href: `/method/picot`
	},
	{
		title: "Search Strategy",
		icon: "pi pi-search",
		href: `/method/search-strategy`
	},
	{
		title: "Search Strings",
		icon: "pi pi-search",
		href: `/method/search-str`
	},
	{
		title: "Study Selection and Screening",
		icon: "pi pi-check",
		href: `/method/screening`
	},
	{
		title: "Data Extraction",
		icon: "pi pi-upload",
		href: `/method/data-extraction`
	},
	{
		title: "Assessment of the RoB",
		icon: "pi pi-exclamation-circle",
		href: `/method/risk-of-bias`
	},
	{
		title: "Analysis of Data",
		icon: "pi pi-chart-bar",
		href: `/method/analysis-of-data`
	},
	{
		title: "Analysis approach",
		icon: "pi pi-chart-bar",
		href: `/method/analysis-approach`
	},
	{
		title: "Dealing with Missing Data",
		icon: "pi pi-question",
		href: `/method/missing-data`
	},
	{
		title: "Subgroup Analysis",
		icon: "pi pi-chart-line",
		href: `/method/subgroup-sensitivity-analysis`
	},
	{
		title: "Contributions",
		icon: "pi pi-chart-line",
		href: `/method/contributions`
	},
	{
		title: "Acknowledgement",
		icon: "pi pi-file",
		href: `/planning/ac-view`
	},
	{
		header: true,
		title: "REPORTS",
		hiddenOnCollapse: true
	},
	{
		title: "Research Plan",
		icon: "pi pi-list",
		href: `/reports/rs-plan`
	},
	{
		title: "Methods Section",
		icon: "pi pi-download",
		href: `/reports/output`
	},
	{
		title: "Data Extraction",
		icon: "pi pi-upload",
		href: `/reports/de-view`
	}
];
const routes = [
    { name: "home", path: "", component:  ViewHome},
    {
		name: "titlepage",
		path: "/planning/titlepage",
		component: ViewScopingTitlePage
	},
    {
		name: "people",
		path: "/planning/people",
		component: ViewScopingTitlePagePeople
	},
    {
		name: "rs-plan",
		path: "/planning/rs-plan",
		component: ViewScopingResearchPlan
	},
    {
		name: "introduction",
		path: "/introduction",
		component: ViewScopingIntroduction
	},
	{
		name: "picot",
		path: "/method/picot",
		component: ViewScopingPicot
	},
	{
		name: "search-strategy",
		path: "/method/search-strategy",
		component: ViewScopingSearchStrategy
	},
	{
		name: "search-str",
		path: "/method/search-str",
		component: ViewScopingSearchStrings
	},
	{ 
		path: "/method/screening", 
		component: ViewScopingScreening 
	},
	{
		path: "/method/data-extraction",
		component: ViewScopingDataExtraction
	},
	{
		path: "/method/risk-of-bias",
		component: ViewScopingAssessmentOfTheRiskOfBias
	},
	{
		path: "/method/analysis-of-data",
		component: ViewScopingAnalysisOfData
	},
	{
		path: "/method/analysis-approach",
		component: ViewScopingAnalysisApproach
	},
	{
		path: "/method/missing-data",
		component: ViewScopingDealingWithMissingData
	},
	{
		path: "/method/subgroup-sensitivity-analysis",
		component: ViewScopingSubgroupAndSensitivityAnalysis
	},
	{
		path: "/method/contributions",
		component: ViewScopingContributions
	},
	{
		name: "ac-view",
		path: "/planning/ac-view",
		component: ViewScopingAcknowledgement
	},
	{
		name: "rs-plan",
		path: "/reports/rs-plan",
		component: ViewScopingResearchPlan
	},
	{
		name: "output",
		path: "/reports/output",
		component: ViewScopingOutput
	},
	{
		name: "de-view",
		path: "/reports/de-view",
		component: ViewScopingDataExtractionReport
	}
];

export { routes, getMenu };