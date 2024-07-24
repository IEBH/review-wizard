let defaultProjectState = {
	//titlepage:
	//title page
	name: "",
	nameShort: "",
	year: 0,
	//people
	author: [""],
	acknowledgements: [""],

	//acknowledgement:
	designhelp: [],
	statistical: [],
	manuscript: [],

	//introduction:
	intro: "",
	introprotocol: "",


	//researchplan:
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
				toolLink: [{ name: "Review Wizard", link: "/planning/titlepage" }],
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
				toolLink: [{ name: "Review Wizard", link: "/planning/titlepage" }],
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
				toolDescription: "Revise the introduction section from the SR protocol",
				toolLink: [{ name: "Introduction", link: "/introduction" }],
				notes: "",
				peopleInvolved: ""
				//notes: ""
			},
			{
				progress: false,
				tasks: "Revise methods",
				toolDescription: "Revise the methods section from the SR protocol",
				toolLink: [{ name: "Review Wizard", link: "/planning/titlepage" }],
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
	},

	//picot:
	population: [{ inclusion: true }],
	intervention: [{ inclusion: true }],
	comparator: [{ inclusion: true }],
	outcomes: [{ inclusion: true, type: true }],
	setting: [{ inclusion: true }],
	types: [],

	//search:
	// Search Strategy
	components: [],
	specialist: [],
	helper: [],
	tools: [],
	databaseTools: [],
	peerReviewer: [],
	searchAutomationTools: [],
	searchStrategyAuthors: [],
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
	supplementoryMethods: [],

	//screening:
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
	isExcludedFullTextInAppendix: false,

	//extraction:
	numberOfStudies: null,
	//numberOfExtractors: null,
	extractionAuthors: [],
	//New
	optionalDetail: false,
	methods: [],
	participants: [],
	interventions: [],
	comparators: [],
	extractionOutcomes: [{ inclusion: true, type: true }],
	extractionTypes: [],
	//extraction report
	detable: { headers: [], rows: [] },

	//riskOfBias:
	//numberOfAuthors: null,
	assessedRobAuthors: [],
	isIndependent: false,
	riskOfBiasToolUsed: [],

	//measurementOfEffect:
	isMetaAnalysis: true,
	measurementOfEffectToolUsed: null,
	dichotomousOutcomes: [],
	continuousOutcomes: [],
	otherOutcomes: [],
	metaAnalysisThreshold: null,
	metaAnalysisModelUsed: null,

	//unitOfAnalysis:
	unitOfAnalysisType: null,
	otherType: null,
	example: null,
	example2: null,

	//missingData:
	isContactedInvestigators: false,

	//heterogeneityPublicationBiases:
	isMeasuredPublicationBias: false,
	heterogeneityMeasurement: null,
	heterogeneityMeasurementOther: null,
	biasMeasurement: null,
	biasMeasurementOther: null,
	didNotMeasure: "because fewer than 10 studies were included",

	//subgroupAndSensitivityAnalysis:
	isSubgroupAnalysis: false,
	subgroupAnalysis: [""],
	whyNotSubgroupAnalysis: "We did not perform subgroup analysis",
	isSensitivityAnalysis: false,
	sensitivityAnalysis: [""],
	whyNotSensitivityAnalysis: "We did not perform sensitivity analysis",

	//contribution:
	conAuthors: []
};

export { defaultProjectState };
