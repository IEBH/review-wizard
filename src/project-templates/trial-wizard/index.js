// Imports
import ViewTitlepage from "./ViewTitlepage.vue";
import ViewHome from "./ViewHome.vue";
import ViewOutput from "./ViewOutput.vue";
import ViewMethodStudySetting from "./ViewMethodStudySetting.vue";
import ViewMethodEligibilityCriteria from "./ViewMethodEligibilityCriteria.vue";
import ViewMethodInterventions from "./ViewMethodInterventions.vue";
import ViewMethodOutcomes from "./ViewMethodOutcomes.vue";
import ViewMethodParticipantTimeline from "./ViewMethodParticipantTimeline.vue";
import ViewMethodSampleSize from "./ViewMethodSampleSize.vue";
import ViewMethodRecruitment from "./ViewMethodRecruitment.vue";
import ViewMethodAssignmentOfInterventions from "./ViewMethodAssignmentOfInterventions.vue";
import ViewMethodDataCollection from "./ViewMethodDataCollection.vue";
import ViewMethodMonitoring from "./ViewMethodMonitoring.vue";
import ViewMethodEthicsAndDissemination from "./ViewMethodEthicsAndDissemination.vue";

// The path for deepstream, where the bulk of the information is kept (e.g. `methods/${projectId}`)
const deepstreamPath = "trial";

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
		name: "study-setting",
		path: "/:projectId/method/study-setting",
		component: ViewMethodStudySetting
	},
	{
		name: "eligibility-criteria",
		path: "/:projectId/method/eligibility-criteria",
		component: ViewMethodEligibilityCriteria
	},
	{
		name: "interventions",
		path: "/:projectId/method/interventions",
		component: ViewMethodInterventions
	},
	{
		name: "outcomes",
		path: "/:projectId/method/outcomes",
		component: ViewMethodOutcomes
	},
	{
		name: "participant-timeline",
		path: "/:projectId/method/participantTimeline",
		component: ViewMethodParticipantTimeline
	},
	{
		name: "sample-size",
		path: "/:projectId/method/sampleSize",
		component: ViewMethodSampleSize
	},
	{
		name: "recruitment",
		path: "/:projectId/method/recruitment",
		component: ViewMethodRecruitment
	},
	{
		name: "assignment-of-interventions",
		path: "/:projectId/method/assignmentOfInterventions",
		component: ViewMethodAssignmentOfInterventions
	},
	{
		name: "data-collection",
		path: "/:projectId/method/dataCollection",
		component: ViewMethodDataCollection
	},
	{
		name: "monitoring",
		path: "/:projectId/method/monitoring",
		component: ViewMethodMonitoring
	},
	{
		name: "ethics-and-dissemination",
		path: "/:projectId/method/ethicsAndDissemination",
		component: ViewMethodEthicsAndDissemination
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
	studySetting: {
		settings: [],
		regions: []
	},
	eligibilityCriteria: {
		ages: [],
		sexes: [],
		conditions: [],
		others: [],
		baselineMeasurments: []
	},
	interventions: {
		interventions: [{ name: "", materials: "", instructions: "" }],
		control: [{ name: "", materials: "", instructions: "" }],
		discontinued: [],
		adherenceMaintained: "",
		adherenceMonitored: [],
		allInstructions: "",
		prohibitedInterventions: ""
	},
	outcomes: {
		primary: [{ name: "", assessed: "", time: "" }],
		secondary: [{ name: "", assessed: "", time: "" }],
		adverse: [{ name: "", assessed: "", time: "" }],
		clinicalRelevance: ""
	},
	participantTimeline: {
		schematic: true
	},
	sampleSize: {
		trialType: "",
		trialTypeOther: "",
		studyPower: "",
		studyPowerOther: "",
		levelOfSignificance: "",
		levelOfSignificanceOther: "",
		effectSize: "",
		participantDropOuts: ""
	},
	recruitment: {
		recruitment: []
	},
	assignmentOfInterventions: {
		ratioRandomization: "",
		sequenceGen: [],
		concealment: "",
		blindedPeople: [],
		blindedMethod: "",
		unblinding: []
	},
	dataCollection: {
		dataManagement: "",
		dataQuality: "",
		furtherDetails: [],
		primaryMeasure: "",
		secondaryMeasure: "",
		adverseEventMeasure: "",
		subgroupAnalysis: "",
		subgroupComparison: "",
		subgroupMethod: "",
		efficacyComparisons: [],
		efficacyPopulation: "",
		safetyPopulation: "",
		missingData: [],
		missingDataWhy: "",
		sensitivityAnalyses: ""
	},
	monitoring: {
		isCommittee: true,
		committeeDetails: "",
		committeeReporting: "",
		committeeComposition: "",
		committeeLink: "",
		committeeNotSetUpReasons: "",
		isInterimAnalysis: true,
		interimAnalysisTimePoints: "",
		interimResultsAvailable: [],
		earlyStop: "",
		finalDecisionOnTermination: [],
		interimNotConductedReasons: "",
		adverseEventsMonitored: "",
		trialAuditing: ""
	},
	ethicsAndDissemination: {}
};

// The menu array which is used for the sidebar
const getMenu = projectId => [
	{
		header: true,
		title: "Trial-Wizard",
		hiddenOnCollapse: true
	},
	{
		title: "Title Page",
		icon: "pi pi-file",
		href: `/${projectId}/titlepage`
	},
	{
		header: true,
		title: "Trial Protocol",
		hiddenOnCollapse: true
	},
	{
		title: "Study Setting",
		icon: "pi pi-file",
		href: `/${projectId}/method/study-setting`
	},
	{
		title: "Eligibility Criteria",
		icon: "pi pi-file",
		href: `/${projectId}/method/eligibility-criteria`
	},
	{
		title: "Interventions",
		icon: "pi pi-file",
		href: `/${projectId}/method/interventions`
	},
	{
		title: "Outcomes",
		icon: "pi pi-file",
		href: `/${projectId}/method/outcomes`
	},
	{
		title: "Participant Timeline",
		icon: "pi pi-file",
		href: `/${projectId}/method/participantTimeline`
	},
	{
		title: "Sample Size",
		icon: "pi pi-file",
		href: `/${projectId}/method/sampleSize`
	},
	{
		title: "Recruitment",
		icon: "pi pi-file",
		href: `/${projectId}/method/recruitment`
	},
	{
		title: "Assignment of Interventions",
		icon: "pi pi-file",
		href: `/${projectId}/method/assignmentOfInterventions`
	},
	{
		title: "Data Collection, Management and Analysis",
		icon: "pi pi-file",
		href: `/${projectId}/method/dataCollection`
	},
	{
		title: "Monitoring",
		icon: "pi pi-file",
		href: `/${projectId}/method/monitoring`
	},
	{
		title: "Ethics and Dissemination",
		icon: "pi pi-file",
		href: `/${projectId}/method/ethicsAndDissemination`
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
