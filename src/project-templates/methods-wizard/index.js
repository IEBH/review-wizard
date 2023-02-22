//import ViewMethodSearch from "./ViewMethodSearch.vue";
//import ViewMethodSearchDatabses from "./ViewMethodSearchDatabases.vue";
//import ViewMethodSearchRegistries from "./ViewMethodSearchRegistries.vue";
//import ViewMethodSearchPublicationType from "./ViewMethodSearchPublicationType.vue";
//import ViewMethodSearchSupplementoryMethods from "./ViewMethodSearchSupplementoryMethods.vue";
//import ViewMethodHeterogeneityPublicationBias from "./ViewMethodHeterogeneityPublicationBias.vue";
import ViewMethodPicot from "./ViewMethodPicot.vue";
import ViewMethodScreening from "./ViewMethodScreening.vue";
import ViewMethodDataExtraction from "./ViewMethodDataExtraction.vue";
import ViewMethodAssessmentOfTheRiskOfBias from "./ViewMethodAssessmentOfTheRiskOfBias.vue";
import ViewMethodMeasurementOfEffect from "./ViewMethodMeasurementOfEffect.vue";
import ViewMethodUnitOfAnalysis from "./ViewMethodUnitOfAnalysis.vue";
import ViewMethodDealingWithMissingData from "./ViewMethodDealingWithMissingData.vue";
import ViewMethodSubgroupAndSensitivityAnalysis from "./ViewMethodSubgroupAndSensitivityAnalysis.vue";
import ViewTitlepage from "./ViewTitlepage.vue";
import ViewHome from "./ViewHome.vue";
import ViewOutput from "./ViewOutput.vue";
import ViewMethodIntroduction from "./ViewMethodIntroduction.vue";
import ViewMethodResearchPlan from "./ViewMethodResearchPlan.vue";
import ViewTitlePagePeople from "./ViewTitlePagePeople";
//new add
import ViewMethodSearchStrategy from "./ViewMethodSearchStrategy.vue";
import ViewMethodSearchStrings from "./ViewMethodSearchStrings.vue";
import ViewMethodHeterogeneity from "./ViewMethodHeterogeneity.vue";
import ViewMethodPublicationBiases from "./ViewMethodPublicationBiases.vue";

// The path for deepstream, where the bulk of the information is kept (e.g. `methods/${projectId}`)
const deepstreamPath = "methods";

// The routes array for the router
const routes = [
	{ name: "home", path: "", component: ViewHome },
	{ path: "/:projectId", component: ViewHome },
	{
		name: "titlepage",
		path: "/:projectId/planning/titlepage",
		component: ViewTitlepage
	},
	{
		name: "people",
		path: "/:projectId/planning/people",
		component: ViewTitlePagePeople
	},
	{
		name: "rs-plan",
		path: "/:projectId/planning/rs-plan",
		component: ViewMethodResearchPlan
	},
	{
		name: "introduction",
		path: "/:projectId/introduction",
		component: ViewMethodIntroduction
	},
	{
		name: "picot",
		path: "/:projectId/method/picot",
		component: ViewMethodPicot
	},
	//Integrate page: Search Strategy - Search Strategy + Restrictions... + Supplementary...
	{
		name: "search-strategy",
		path: "/:projectId/method/search-strategy",
		component: ViewMethodSearchStrategy
	},
	//Integrate page: Search Strings - Search Strings + Search Databases
	{
		name: "search-str",
		path: "/:projectId/method/search-str",
		component: ViewMethodSearchStrings
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
	//Split from Heterogeneity + Publication Bias
	{
		name: "Heterogeneity",
		path: "/:projectId/method/heterogeneity",
		component: ViewMethodHeterogeneity
	},
	{
		name: "Publication Bias",
		path: "/:projectId/method/publication-biases",
		component: ViewMethodPublicationBiases
	},
	{
		path: "/:projectId/method/subgroup-sensitivity-analysis",
		component: ViewMethodSubgroupAndSensitivityAnalysis
	},
	{
		name: "rs-plan",
		path: "/:projectId/reports/rs-plan",
		component: ViewMethodResearchPlan
	},
	{
		name: "output",
		path: "/:projectId/reports/output",
		component: ViewOutput
	}
	/*{
		path: "/:projectId/output",
		component: ViewOutput
	}*/
];

// The data required for the project
const data = {
	titlepage: {
		//title page
		title: "",
		year: 0,
		//people
		authors: [""],
		acknowledgements: [""]
	},
	introduction: {
		intro: ""
	},
	researchplan: {
		planTable: {
			headers: [
				{ name: "progress", label: "" },
				{ name: "tasks", label: "Task" },
				{
					name: "toolDescription",
					label: "Description"
				},
				{ name: "toolLink", label: "Tool" },
				{
					name: "peopleInvolved",
					label: "People"
				},
				{
					name: "notes",
					label: "Notes"
				}
			],
			rows: [
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "a1. Lead in time",
					toolDescription:
						"Time spent completing other work to allow SR authors to focus on the 2 week SR",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "a2. SR design meetings",
					toolDescription:
						"Time spent refining the idea, determining feasibility, assembling the team, planning timelines, deciding on roles (who's responsible for oversight, coordination and documentation) and provide information on SRA tools",
					toolLink: [{ name: "Methods Wizard", link: "/titlepage" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "0. Daily administrative meetings",
					toolDescription:
						"Short daily meetings to review progress, discuss issues and document decisions",
					toolLink: [{ name: "Research Plan", link: "/method/rs-plan" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "1. Formulate SR question",
					toolDescription: "Final decision on the research question (PICO)",
					toolLink: [{ name: "PICOST", link: "/method/picot" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "2. Find and review existing or upcoming SRs",
					toolDescription:
						"Search for and review existing SRs that answers the same or a similar question.",
					toolLink: [
						{ name: "PubMed", link: "https://pubmed.ncbi.nlm.nih.gov/" },
						{ name: "Prospero", link: "https://www.crd.york.ac.uk/PROSPERO/" }
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "3. Write the SR protocol",
					toolDescription:
						"Provide an objective, reproducible, sound methodology for the SR, then register the protocol",
					toolLink: [{ name: "Methods Wizard", link: "/titlepage" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "4. Obtain set of relevant studies",
					toolDescription:
						"Identify a small sample of studies relevant to the review, to aid with designing the search and data extraction form.",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "5. Design data extraction form",
					toolDescription:
						"Design forms for extracting study characteristics and test their usefulness/applicability",
					toolLink: [
						{ name: "Data Extraction", link: "/method/data-extraction" }
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "6. Design systematic search strategy",
					toolDescription:
						"Design search strategy to find all relevant information (choose databases; develop search string)",
					toolLink: [
						{
							name: "Word Freq Analyzer",
							link: "https://sr-accelerator.com/#/wordfreq"
						},
						{
							name: "Search Refinery",
							link: "https://sr-accelerator.com/#/searchrefinery"
						}
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "7. Run systematic search strings",
					toolDescription:
						"Run search strings in databases, trial registries, collate results in reference management system (e.g. EndNote)",
					toolLink: [
						{
							name: "Polyglot",
							link: "https://sr-accelerator.com/#/polyglot"
						}
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "8. Deduplicate results",
					toolDescription: "Remove duplicate citations",
					toolLink: [
						{
							name: "Dedupe",
							link: "https://sr-accelerator.com/#/deduplicator"
						}
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "9. Screen abstracts",
					toolDescription:
						"Screen titles and abstracts, exclude irrelevant citations, resolve disputes",
					toolLink: [
						{
							name: "Screenatron",
							link: "https://sr-accelerator.com/#/screenatron"
						},
						{
							name: "Disputatron",
							link: "https://sr-accelerator.com/#/disputatron"
						}
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "10. Obtain full text",
					toolDescription:
						"Download full text studies, request copies from authors, interlibrary loan",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "11. Screen full text",
					toolDescription:
						"Screen full text of articles, exclude irrelevant citations, resolve disputes",
					toolLink: [
						{
							name: "Screenatron",
							link: "https://sr-accelerator.com/#/screenatron"
						},
						{
							name: "Disputatron",
							link: "https://sr-accelerator.com/#/disputatron"
						}
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "12. Screen trial registries",
					toolDescription:
						"Based on title and text in the trial registry entry: exclude irrelevant citations, resolve disputes",
					toolLink: [
						{
							name: "Screenatron",
							link: "https://sr-accelerator.com/#/screenatron"
						},
						{
							name: "Disputatron",
							link: "https://sr-accelerator.com/#/disputatron"
						}
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "13. Citation search",
					toolDescription:
						"Follow citations, cited and citing, from included studies to find additional relevant studies",
					toolLink: [
						{
							name: "SpiderCite",
							link: "https://sr-accelerator.com/#/spidercite"
						}
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "14. Screen citation analysis",
					toolDescription:
						"Screen titles and abstracts, and full texts exclude irrelevant citations, resolve disputes",
					toolLink: [
						{
							name: "Screenatron",
							link: "https://sr-accelerator.com/#/screenatron"
						},
						{
							name: "Disputatron",
							link: "https://sr-accelerator.com/#/disputatron"
						}
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "15. Extract data",
					toolDescription:
						"Extract study characteristics and relevant outcomes plan data presentation? - how will things be presented in the paper? Loai and I spent a while discussing and trying to work that out",
					toolLink: [
						{ name: "Data Extraction", link: "/method/data-extraction" }
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "16. Risk of Bias assessment",
					toolDescription: "Assess the potential biases in included studies",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "17. Synthesise data",
					toolDescription:
						"Convert extracted outcome data to common representation (usually mean and SD)",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "18. Meta-analysis",
					toolDescription:
						"Statistically combine the results using meta-analysis or other statistical synthesis",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "19. GRADE evidence",
					toolDescription:
						"Optional: rate the certainty of evidence for a treatment efficacy from high to very low",
					toolLink: [{ name: "Grade Pro", link: "https://www.gradepro.org/" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "20. Summary of findings",
					toolDescription:
						"Optional: summarise the main findings of the SR in a table",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "21. Update systematic search strategy",
					toolDescription:
						"Optional: repeat the search to find new studies published since the initial search, especially if search more than a year old",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "22. Write introduction",
					toolDescription:
						"Revise the introduction section from the SR protocol",
					toolLink: [{ name: "Introduction", link: "/method/introduction" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "23. Write methods",
					toolDescription: "Revise the methods section from the SR protocol",
					toolLink: [{ name: "Methods Wizard", link: "/titlepage" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "24. Write results",
					toolDescription: "Write the results section of the SR",
					toolLink: [
						{
							name: "Refman Replicant",
							link: "https://sr-accelerator.com/#/replicant"
						}
					],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "25. Write discussion",
					toolDescription:
						"Write the discussion and conclusion sections of the SR",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "26. Obtain external feedback",
					toolDescription:
						"Circulate to colleagues for external feedback, also take a break from the SR to allow thinking time about the manuscript",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "27. Submit manuscript",
					toolDescription:
						"Format manuscript to meet journal requirements, complete online forms and submit manuscript",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "28. Reformat and resubmit manuscript",
					toolDescription:
						"If rejected, reformat manuscript to meet new journal requirements and standards, and submit (if accepted skip this task)",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "29. Manuscript revisions",
					toolDescription:
						"Revise manuscript due to comments from peer reviewers, and resubmit it",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "30. Manuscript accepted",
					toolDescription:
						"Review manuscript, and copy edit any errors or issues",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				},
				{
					progress: { isComplete: "false", state: "Incomplete" },
					tasks: "31. Manuscript published",
					toolDescription:
						"Send the details around to everyone you know, and enjoy the kudos",
					toolLink: [{ name: "", link: "" }],
					peopleInvolved: "",
					notes: ""
				}
			]
		}
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
		designSearchStrategyAuthors: [],
		deduplicateResultsAuthors: [],
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
		conductSSearchAuthors: [],
		supplementoryMethods: []
	},
	screening: {
		isTrialRegistries: false,
		screenTrialRegisPeople: [],
		conductSSearchPeople: [],
		screenCitationSearchPeople: [],
		numberOfTitleAbstractScreeners: null,
		titleAbstractScreeners: [],
		fullTextRetrivalAuthor: [],
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
		optionalDetail: false,
		methods: [],
		participants: [],
		interventions: [],
		comparators: [],
		outcomes: [{ inclusion: true, type: true }],
		types: []
	},
	riskOfBias: {
		numberOfAuthors: null,
		assessedRobAuthors: [],
		isIndependent: false,
		toolUsed: []
	},
	measurementOfEffect: {
		isMetaAnalysis: true,
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
		title: "PLANNING",
		hiddenOnCollapse: true
	},
	{
		title: "Title Page",
		icon: "pi pi-file",
		href: `/${projectId}/planning/titlepage`
	},
	{
		title: "People",
		icon: "pi pi-file",
		href: `/${projectId}/planning/people`
	},
	{
		title: "Research Plan",
		icon: "pi pi-list",
		href: `/${projectId}/planning/rs-plan`
	},
	{
		header: true,
		title: "INTRODUCTION",
		hiddenOnCollapse: true
	},
	{
		title: "Introduction",
		icon: "pi pi-pencil",
		href: `/${projectId}/introduction`
	},
	{
		header: true,
		title: "METHODS",
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
		href: `/${projectId}/method/search-strategy`
	},
	{
		title: "Search Strings",
		icon: "pi pi-search",
		href: `/${projectId}/method/search-str`
	},
	{
		title: "Study Screening",
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
		title: "Missing Data Strategy",
		icon: "pi pi-question",
		href: `/${projectId}/method/missing-data`
	},
	{
		title: "Heterogeneity",
		icon: "pi pi-users",
		href: `/${projectId}/method/heterogeneity`
	},
	{
		title: "Publication Bias",
		icon: "pi pi-users",
		href: `/${projectId}/method/publication-biases`
	},
	{
		title: "Subgroup Analysis",
		icon: "pi pi-chart-line",
		href: `/${projectId}/method/subgroup-sensitivity-analysis`
	},
	{
		header: true,
		title: "REPORTS",
		hiddenOnCollapse: true
	},
	{
		title: "Research Plan",
		icon: "pi pi-list",
		href: `/${projectId}/reports/rs-plan`
	},
	{
		title: "Methods Section",
		icon: "pi pi-download",
		href: `/${projectId}/reports/output`
	}
];

export { deepstreamPath, routes, data, getMenu };
