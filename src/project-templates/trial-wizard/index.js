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

// The path for deepstream, where the bulk of the information is kept (e.g. `methods`)
const deepstreamPath = "trial";

// The routes array for the router
const routes = [
	{ name: "home", path: "", component: ViewHome },
	{ path: "/", component: ViewHome },
	{
		name: "titlepage",
		path: "/titlepage",
		component: ViewTitlepage
	},
	{
		name: "study-setting",
		path: "/method/study-setting",
		component: ViewMethodStudySetting
	},
	{
		name: "eligibility-criteria",
		path: "/method/eligibility-criteria",
		component: ViewMethodEligibilityCriteria
	},
	{
		name: "interventions",
		path: "/method/interventions",
		component: ViewMethodInterventions
	},
	{
		name: "outcomes",
		path: "/method/outcomes",
		component: ViewMethodOutcomes
	},
	{
		name: "participant-timeline",
		path: "/method/participantTimeline",
		component: ViewMethodParticipantTimeline
	},
	{
		name: "sample-size",
		path: "/method/sampleSize",
		component: ViewMethodSampleSize
	},
	{
		name: "recruitment",
		path: "/method/recruitment",
		component: ViewMethodRecruitment
	},
	{
		name: "assignment-of-interventions",
		path: "/method/assignmentOfInterventions",
		component: ViewMethodAssignmentOfInterventions
	},
	{
		name: "data-collection",
		path: "/method/dataCollection",
		component: ViewMethodDataCollection
	},
	{
		name: "monitoring",
		path: "/method/monitoring",
		component: ViewMethodMonitoring
	},
	{
		name: "ethics-and-dissemination",
		path: "/method/ethicsAndDissemination",
		component: ViewMethodEthicsAndDissemination
	},
	{
		path: "/output",
		component: ViewOutput
	}
];

// The data required for the project
const data = {
	titlepage: {
		title: "",
		authors: [""]
	},
	studySetting: {
		settings: [],
		regions: []
	},
	eligibilityCriteria: {
		ages: [],
		ageBracket: "",
		sexes: [],
		conditions: [],
		severity: [],
		others: [],
		othersExcluded: [],
		baselineMeasurments: []
	},
	interventions: {
		interventions: [{ name: "", materials: "", instructions: "" }],
		control: [{ name: "", materials: "", instructions: "" }],
		discontinued: [],
		adherenceMaintained: [],
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
		sampleSize: "",
		effectSize: "",
		participantDropOuts: "",
		//new added
		trialDesign: ""
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
		unblinding: [],
		//new added
		mechanism: "",
		concealSteps: ""
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
	ethicsAndDissemination: {
		approval: "",
		protocol: "",
		consent: "",
		confidentiality: "",
		declaration: "",
		access: "",
		care: "",
		dissemination: "",
		//new added
		responsiblePerson: "",
		relatedDoc: "",
		guidelines: "",
		plans: ""
	}
};

// The menu array which is used for the sidebar
const getMenu = ()=> [
	{
		header: true,
		title: "Trial-Wizard",
		hiddenOnCollapse: true
	},
	{
		title: "Title Page",
		icon: "pi pi-file",
		href: `/titlepage`
	},
	{
		header: true,
		title: "Trial Protocol",
		hiddenOnCollapse: true
	},
	{
		title: "Study Setting",
		icon: "pi pi-file",
		href: `/method/study-setting`
	},
	{
		title: "Eligibility Criteria",
		icon: "pi pi-file",
		href: `/method/eligibility-criteria`
	},
	{
		title: "Interventions",
		icon: "pi pi-file",
		href: `/method/interventions`
	},
	{
		title: "Outcomes",
		icon: "pi pi-file",
		href: `/method/outcomes`
	},
	{
		title: "Participant Timeline",
		icon: "pi pi-file",
		href: `/method/participantTimeline`
	},
	{
		title: "Sample Size",
		icon: "pi pi-file",
		href: `/method/sampleSize`
	},
	{
		title: "Recruitment",
		icon: "pi pi-file",
		href: `/method/recruitment`
	},
	{
		title: "Assignment of Interventions",
		icon: "pi pi-file",
		href: `/method/assignmentOfInterventions`
	},
	{
		title: "Data Collection, Management and Analysis",
		icon: "pi pi-file",
		href: `/method/dataCollection`
	},
	{
		title: "Monitoring",
		icon: "pi pi-file",
		href: `/method/monitoring`
	},
	{
		title: "Ethics and Dissemination",
		icon: "pi pi-file",
		href: `/method/ethicsAndDissemination`
	},
	{
		header: true,
		title: "Output",
		hiddenOnCollapse: true
	},
	{
		title: "Output",
		icon: "pi pi-download",
		href: `/output`
	}
];

export { deepstreamPath, routes, data, getMenu };
