//import ViewMethodSearch from "./ViewMethodSearch.vue";
//import ViewMethodSearchDatabses from "./ViewMethodSearchDatabases.vue";
//import ViewMethodSearchRegistries from "./ViewMethodSearchRegistries.vue";
//import ViewMethodSearchPublicationType from "./ViewMethodSearchPublicationType.vue";
//import ViewMethodSearchSupplementoryMethods from "./ViewMethodSearchSupplementoryMethods.vue";
//import ViewMethodHeterogeneityPublicationBias from "./ViewMethodHeterogeneityPublicationBias.vue";
import ViewMethodPicot from "./ViewMethodPicot.vue";
import ViewMethodScreening from "./ViewMethodScreening.vue";
import ViewMethodDataExtraction from "./ViewMethodDataExtraction.vue";
import ViewMethodDataExtractionReport from "./ViewMethodDataExtractionReport.vue";
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
import ViewAcknowledgement from "./ViewAcknowledgement";
import ViewMethodContributions from "./ViewMethodContributions";

// The path for deepstream, where the bulk of the information is kept (e.g. `methods`)
const deepstreamPath = "methods";

// The routes array for the router
const routes = [
	{ name: "home", path: "", component: ViewHome },
	{ path: "/", component: ViewHome },
	{
		name: "titlepage",
		path: "/planning/titlepage",
		component: ViewTitlepage
	},
	{
		name: "people",
		path: "/planning/people",
		component: ViewTitlePagePeople
	},
	{
		name: "rs-plan",
		path: "/planning/rs-plan",
		component: ViewMethodResearchPlan
	},
	{
		name: "introduction",
		path: "/introduction",
		component: ViewMethodIntroduction
	},
	{
		name: "picot",
		path: "/method/picot",
		component: ViewMethodPicot
	},
	//Integrate page: Search Strategy - Search Strategy + Restrictions... + Supplementary...
	{
		name: "search-strategy",
		path: "/method/search-strategy",
		component: ViewMethodSearchStrategy
	},
	//Integrate page: Search Strings - Search Strings + Search Databases
	{
		name: "search-str",
		path: "/method/search-str",
		component: ViewMethodSearchStrings
	},
	{ path: "/method/screening", component: ViewMethodScreening },
	{
		path: "/method/data-extraction",
		component: ViewMethodDataExtraction
	},
	{
		path: "/method/risk-of-bias",
		component: ViewMethodAssessmentOfTheRiskOfBias
	},
	{
		path: "/method/measurement-of-effect",
		component: ViewMethodMeasurementOfEffect
	},
	{
		path: "/method/unit-of-analysis",
		component: ViewMethodUnitOfAnalysis
	},
	{
		path: "/method/missing-data",
		component: ViewMethodDealingWithMissingData
	},
	//Split from Heterogeneity + Publication Bias
	{
		name: "Heterogeneity",
		path: "/method/heterogeneity",
		component: ViewMethodHeterogeneity
	},
	{
		name: "Publication Bias",
		path: "/method/publication-biases",
		component: ViewMethodPublicationBiases
	},
	{
		path: "/method/subgroup-sensitivity-analysis",
		component: ViewMethodSubgroupAndSensitivityAnalysis
	},
	{
		path: "/method/contributions",
		component: ViewMethodContributions
	},
	{
		name: "ac-view",
		path: "/planning/ac-view",
		component: ViewAcknowledgement
	},
	{
		name: "rs-plan",
		path: "/reports/rs-plan",
		component: ViewMethodResearchPlan
	},
	{
		name: "output",
		path: "/reports/output",
		component: ViewOutput
	},
	{
		name: "de-view",
		path: "/reports/de-view",
		component: ViewMethodDataExtractionReport
	}
	/*{
		path: "/output",
		component: ViewOutput
	}*/
];

// The data required for the project
const data = {
	titlepage: {
		//title page
		title: "",
		titleshort: "",
		year: 0,
		//people
		authors: [""],
		acknowledgements: [""]
	},
	acknowledgement: {
		designhelp: [],
		statistical: [],
		manuscript: []
	},
	introduction: {
		intro: "",
		introprotocol: ""
	},
	researchplan: {
		planTable: {
			headers: [
				{ name: "progress", label: "Completed" },
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
					progress: false,
					tasks: "Lead in time",
					toolDescription:
						"Time spent completing other work to allow authors to focus on the review",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "SR design meetings",
					toolDescription:
						"Time spent refining the idea, determining feasibility, assembling the team, planning timelines, deciding on roles",
					toolLink: [{ name: "Methods Wizard", link: "/planning/titlepage" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Daily administrative meetings",
					toolDescription:
						"Short daily meetings to review progress, discuss issues and document decisions",
					toolLink: [{ name: "Research Plan", link: "/planning/rs-plan" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Formulate SR question",
					toolDescription: "Final decision on the research question (PICO)",
					toolLink: [{ name: "PICOST", link: "/method/picot" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Find and review existing or upcoming SRs",
					toolDescription:
						"Search for and review existing SRs that answers the same or a similar question.",
					toolLink: [
						{ name: "PubMed", link: "https://pubmed.ncbi.nlm.nih.gov/" },
						{ name: "Prospero", link: "https://www.crd.york.ac.uk/PROSPERO/" }
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Write the SR protocol",
					toolDescription:
						"Provide an objective, reproducible, sound methodology for the SR, then register the protocol",
					toolLink: [{ name: "Methods Wizard", link: "/planning/titlepage" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Obtain set of relevant studies",
					toolDescription:
						"Identify a small sample of studies relevant to the review, to aid with designing the search and data extraction form.",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Design data extraction form",
					toolDescription:
						"Design forms for extracting study characteristics and test their usefulness/applicability",
					toolLink: [
						{ name: "Data Extraction", link: "/method/data-extraction" }
					],
					notes: "",
					peopleInvolved: ""

					//notes: ""
				},
				{
					progress: false,
					tasks: "Design systematic search strategy",
					toolDescription:
						"Design search strategy to find all relevant information (choose databases; develop search string)",
					toolLink: [
						{
							name: "Word Freq Analyzer",
							//link: "https://sr-accelerator.com/#/wordfreq"
							link: "https://tera-tools.com/word-freq"
						},
						{
							name: "Search Refinery",
							//link: "https://sr-accelerator.com/#/searchrefinery"
							link: "https://tera-tools.com/searchrefiner"
						},
						{
							name: "MeshMate",
							//link: "https://sr-accelerator.com/#/searchrefinery"
							link: "https://tera-tools.com/meshmate"
						}
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Run systematic search strings",
					toolDescription:
						"Run search strings in databases, trial registries, collate results in reference management system (e.g. EndNote)",
					toolLink: [
						{
							name: "Polyglot",
							//link: "https://sr-accelerator.com/#/polyglot"
							link: "https://tera-tools.com/polyglot"
						}
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Deduplicate results",
					toolDescription: "Remove duplicate citations",
					toolLink: [
						{
							name: "Dedupe",
							//link: "https://sr-accelerator.com/#/deduplicator"
							link: "https://tera-tools.com/deduplicator"
						}
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Screen abstracts",
					toolDescription:
						"Screen titles and abstracts, exclude irrelevant citations, resolve disputes",
					toolLink: [
						{
							name: "Screenatron",
							//link: "https://sr-accelerator.com/#/screenatron"
							link: "https://tera-tools.com/screenatron"
						},
						{
							name: "Disputatron",
							//link: "https://sr-accelerator.com/#/disputatron"
							link: "https://tera-tools.com/disputatron"
						}
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Obtain full text",
					toolDescription:
						"Download full text studies, request copies from authors, interlibrary loan",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Screen full text",
					toolDescription:
						"Screen full text of articles, exclude irrelevant citations, resolve disputes",
					toolLink: [
						{
							name: "Screenatron",
							//link: "https://sr-accelerator.com/#/screenatron"
							link: "https://tera-tools.com/screenatron"
						},
						{
							name: "Disputatron",
							//link: "https://sr-accelerator.com/#/disputatron"
							link: "https://tera-tools.com/disputatron"
						}
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Screen trial registries",
					toolDescription:
						"Based on title and text in the trial registry entry: exclude irrelevant citations, resolve disputes",
					toolLink: [
						{
							name: "Screenatron",
							//link: "https://sr-accelerator.com/#/screenatron"
							link: "https://tera-tools.com/screenatron"
						},
						{
							name: "Disputatron",
							//link: "https://sr-accelerator.com/#/disputatron"
							link: "https://tera-tools.com/disputatron"
						}
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Citation search",
					toolDescription:
						"Follow citations, cited and citing, from included studies to find additional relevant studies",
					toolLink: [
						{
							name: "SpiderCite",
							//link: "https://sr-accelerator.com/#/spidercite"
							link: "https://tera-tools.com/spidercite"
						}
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Screen citation analysis",
					toolDescription:
						"Screen titles and abstracts, and full texts exclude irrelevant citations, resolve disputes",
					toolLink: [
						{
							name: "Screenatron",
							//link: "https://sr-accelerator.com/#/screenatron"
							link: "https://tera-tools.com/screenatron"
						},
						{
							name: "Disputatron",
							//link: "https://sr-accelerator.com/#/disputatron"
							link: "https://tera-tools.com/disputatron"
						}
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Extract data",
					toolDescription:
						"Extract study characteristics and relevant outcomes, plan data presentation",
					toolLink: [
						{ name: "Data Extraction", link: "/method/data-extraction" }
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Risk of Bias assessment",
					toolDescription: "Assess the potential biases in included studies",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Synthesise data",
					toolDescription:
						"Convert extracted outcome data to common representation (usually mean and SD)",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Meta-analysis",
					toolDescription:
						"Statistically combine the results using meta-analysis or other statistical synthesis",
					toolLink: [
						{
							name: "MetaPairwise",
							link: "https://tera-tools.com/metapairwise"
						},
						{
							name: "MetaInsight",
							link: "https://tera-tools.com/metainsight"
						},
						{
							name: "MetaDTA",
							link: "https://tera-tools.com/metadta"
						}
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "GRADE evidence",
					toolDescription:
						"Optional: rate the certainty of evidence for a treatment efficacy from high to very low",
					toolLink: [{ name: "Grade Pro", link: "https://www.gradepro.org/" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Summary of findings",
					toolDescription:
						"Optional: summarise the main findings of the SR in a table",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Update systematic search strategy",
					toolDescription:
						"Optional: repeat the search to find new studies published since the initial search, especially if search more than a year old",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Revise introduction",
					toolDescription:
						"Revise the introduction section from the SR protocol",
					toolLink: [{ name: "Introduction", link: "/introduction" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Revise methods",
					toolDescription: "Revise the methods section from the SR protocol",
					toolLink: [{ name: "Methods Wizard", link: "/planning/titlepage" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Write results",
					toolDescription: "Write the results section of the SR",
					toolLink: [
						{
							name: "",
							link: ""
						}
					],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Write discussion",
					toolDescription:
						"Write the discussion and conclusion sections of the SR",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Obtain external feedback",
					toolDescription:
						"Circulate to colleagues for external feedback, also take a break from the SR to allow thinking time about the manuscript",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Submit manuscript",
					toolDescription:
						"Format manuscript to meet journal requirements, complete online forms and submit manuscript",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Reformat and resubmit manuscript",
					toolDescription:
						"If rejected, reformat manuscript to meet new journal requirements and standards",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Manuscript revisions",
					toolDescription:
						"Revise manuscript due to comments from peer reviewers, and resubmit it",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Manuscript accepted",
					toolDescription:
						"Review manuscript, and copy edit any errors or issues",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
				},
				{
					progress: false,
					tasks: "Manuscript published",
					toolDescription:
						"Send the details around to everyone you know, and enjoy the kudos",
					toolLink: [{ name: "", link: "" }],
					notes: "",
					peopleInvolved: ""
					//notes: ""
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
		tools: [],
		databaseTools: [],
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
		//isTrialRegistries: false,
		screenTrialRegisPeople: [],
		//conductSSearchPeople: [],
		screenCitationSearchPeople: [],
		//numberOfTitleAbstractScreeners: null,
		titleAbstractScreeners: [],
		fullTextRetrivalAuthor: [],
		//numberOfFullTextScreeners: null,
		fullTextScreeners: [],
		disputeResolution: [],
		screeningToolsSelected: [],
		//screenAutomationTools: [],
		isPrismaFlowDiagram: false,
		isExcludedFullTextInAppendix: false
	},
	extraction: {
		numberOfStudies: null,
		//numberOfExtractors: null,
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
		//numberOfAuthors: null,
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
	},
	contribution: {
		conAuthors: []
	}
};

// The menu array which is used for the sidebar
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
		title: "Research Plan",
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
		title: "Eligibility Criteria (PICOST)",
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
		title: "Study Screening",
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
		title: "Measurement of Effect",
		icon: "pi pi-sliders-v",
		href: `/method/measurement-of-effect`
	},
	{
		title: "Unit of Analysis",
		icon: "pi pi-chart-bar",
		href: `/method/unit-of-analysis`
	},
	{
		title: "Missing Data Strategy",
		icon: "pi pi-question",
		href: `/method/missing-data`
	},
	{
		title: "Heterogeneity",
		icon: "pi pi-users",
		href: `/method/heterogeneity`
	},
	{
		title: "Publication Bias",
		icon: "pi pi-users",
		href: `/method/publication-biases`
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

export { deepstreamPath, routes, data, getMenu };
