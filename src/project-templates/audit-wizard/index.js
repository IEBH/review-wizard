import ViewHome from "./ViewHome.vue";
import ViewAuditTitlePage from "./ViewAuditTitlePage.vue";
import ViewAuditPeople from "./ViewAuditPeople.vue";
import ViewAuditStudyInformation from "./ViewAuditStudyInformation.vue";
import ViewAuditPicot from "./ViewAuditPicot.vue";
import ViewAuditInterventions from "./ViewAuditInterventions.vue";
import ViewAuditStudySetting from "./ViewAuditStudySetting.vue";
import ViewAuditOutcomes from "./ViewAuditOutcomes.vue";
import ViewAuditParticipantTimeline from "./ViewAuditParticipantTimeline.vue";
import ViewAuditSampleSize from "./ViewAuditSampleSize.vue";
import ViewAuditRecruitment from "./ViewAuditRecruitment.vue";
import ViewAuditAssignmentOfInterventions from "./ViewAuditAssignmentOfInterventions.vue";
import ViewAuditDataCollectionManagementAndAnalysis from "./ViewAuditDataCollectionManagementAndAnalysis.vue";
import ViewAuditMonitoring from "./ViewAuditMonitoring.vue";
import ViewAuditEthicsAndDissemination from "./ViewAuditEthicsAndDissemination.vue";

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
		header: true,
		title: "METHODS",
		hiddenOnCollapse: true
	},
	{
		title: "Study Information",
		icon: "pi pi-pencil",
		href: `/method/study-information`
	},
	{
		title: "Study Setting",
		icon: "pi pi-check",
		href: `/method/study-setting`
	},
	{
		title: "Eligibility Criteria (PICOST)",
		icon: "pi pi-file",
		href: `/method/picot`
	},
	{
		title: "Interventions",
		icon: "pi pi-file",
		href: `/method/interventions`
	},
	{
		title: "Outcomes",
		icon: "pi pi-upload",
		href: `/method/outcomes`
	},
	{
		title: "Participant Timeline",
		icon: "pi pi-chart-bar",
		href: `/method/participant-timeline`
	},
	{
		title: "Sample Size",
		icon: "pi pi-chart-line",
		href: `/method/sample-size`
	},
	{
		title: "Recruitment",
		icon: "pi pi-list",
		href: `/method/recruitment`
	},
	{
		title: "Assignment of Interventions",
		icon: "pi pi-exclamation-circle",
		href: `/method/assignment-of-interventions`
	},
	{
		title: "Data Collection, Management and Analysis",
		icon: "pi pi-chart-bar",
		href: `/method/data-collection-management-and-analysis`
	},
	{
		title: "Monitoring",
		icon: "pi pi-search",
		href: `/method/monitoring`
	},
	{
		title: "Ethics and Dissemination",
		icon: "pi pi-question",
		href: `/method/ethics-and-dissemination`
	}
];
const routes = [
    { name: "home", path: "", component:  ViewHome},
    {
		name: "titlepage",
		path: "/planning/titlepage",
		component: ViewAuditTitlePage
	},
    {
		name: "people",
		path: "/planning/people",
		component: ViewAuditPeople
	},
	{
		name: "study-information",
		path: "/method/study-information",
		component: ViewAuditStudyInformation
	},
	{
		name: "study-setting",
		path: "/method/study-setting",
		component: ViewAuditStudySetting
	},
	{
		name: "picot",
		path: "/method/picot",
		component: ViewAuditPicot
	},
	{
		name: "interventions",
		path: "/method/interventions",
		component: ViewAuditInterventions
	},
	{
		name: "outcomes",
		path: "/method/outcomes",
		component: ViewAuditOutcomes
	},
	{
		name: "participant-timeline",
		path: "/method/participant-timeline",
		component: ViewAuditParticipantTimeline
	},
	{
		name: "sample-size",
		path: "/method/sample-size",
		component: ViewAuditSampleSize
	},
	{
		name: "recruitment",
		path: "/method/recruitment",
		component: ViewAuditRecruitment
	},
	{
		name: "assignment-of-interventions",
		path: "/method/assignment-of-interventions",
		component: ViewAuditAssignmentOfInterventions
	},
	{
		name: "data-collection-management-and-analysis",
		path: "/method/data-collection-management-and-analysis",
		component: ViewAuditDataCollectionManagementAndAnalysis
	},
	{
		name: "monitoring",
		path: "/method/monitoring",
		component: ViewAuditMonitoring
	},
	{
		name: "ethics-and-dissemination",
		path: "/method/ethics-and-dissemination",
		component: ViewAuditEthicsAndDissemination
	},
	
];

export { routes, getMenu };