import ViewHome from "./ViewHome.vue";
import ViewAuditTitlePage from "./ViewAuditTitlePage.vue";
import ViewAuditPeople from "./ViewAuditPeople.vue";
import ViewAuditStudyInformation from "./ViewAuditStudyInformation.vue";
import ViewAuditPicot from "./ViewAuditPicot.vue";
import ViewAuditStudySetting from "./ViewAuditStudySetting.vue";
import ViewAuditSampleSize from "./ViewAuditSampleSize.vue";
import ViewAuditRecruitment from "./ViewAuditRecruitment.vue";
import ViewAuditDataCollectionManagementAndAnalysis from "./ViewAuditDataCollectionManagementAndAnalysis.vue";
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
		title: "Data Collection, Management and Analysis",
		icon: "pi pi-chart-bar",
		href: `/method/data-collection-management-and-analysis`
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
		name: "data-collection-management-and-analysis",
		path: "/method/data-collection-management-and-analysis",
		component: ViewAuditDataCollectionManagementAndAnalysis
	},
	{
		name: "ethics-and-dissemination",
		path: "/method/ethics-and-dissemination",
		component: ViewAuditEthicsAndDissemination
	},
	
];

export { routes, getMenu };