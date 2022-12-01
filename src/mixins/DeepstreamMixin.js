const getDefaultData = key => {
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
						tasks: "a1. Lead in time",
						toolDescription:
							"Time spent completing other work to allow SR authors to focus on the 2 week SR",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "a2. SR design meetings",
						toolDescription:
							"Time spent refining the idea, determining feasibility, assembling the team, planning timelines, deciding on roles (who's responsible for oversight, coordination and documentation) and provide information on SRA tools",
						toolLink: [{ name: "Methods Wizard", link: "/titlepage" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "0. Daily administrative meetings",
						toolDescription:
							"Short daily meetings to review progress, discuss issues and document decisions",
						toolLink: [{ name: "Research Plan", link: "/method/rs-plan" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "1. Formulate SR question",
						toolDescription: "Final decision on the research question (PICO)",
						toolLink: [{ name: "PICOST", link: "/method/picot" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "2. Find and review existing or upcoming SRs",
						toolDescription:
							"Search for and review existing SRs that answers the same or a similar question.",
						toolLink: [
							{ name: "PubMed,Prospero", link: "" },
							{ name: "Prospero", link: "" }
						],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "3. Write the SR protocol",
						toolDescription:
							"Provide an objective, reproducible, sound methodology for the SR, then register the protocol",
						toolLink: [{ name: "Methods Wizard", link: "/titlepage" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "4. Obtain set of relevant studies",
						toolDescription:
							"Identify a small sample of studies relevant to the review, to aid with designing the search and data extraction form.",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
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
						tasks: "6. Design systematic search strategy",
						toolDescription:
							"Design search strategy to find all relevant information (choose databases; develop search string)",
						toolLink: [
							{ name: "Word Freq Analyzer", link: "" },
							{ name: "Search Refinery", link: "" }
						],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "7. Run systematic search strings",
						toolDescription:
							"Run search strings in databases, trial registries, collate results in reference management system (e.g. EndNote)",
						toolLink: [{ name: "Polyglot", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "8. Deduplicate results",
						toolDescription: "Remove duplicate citations",
						toolLink: [{ name: "Dedupe", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "9. Screen abstracts",
						toolDescription:
							"Screen titles and abstracts, exclude irrelevant citations, resolve disputes",
						toolLink: [
							{ name: "Screenatron", link: "" },
							{ name: "Disputatron", link: "" }
						],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "10. Obtain full text",
						toolDescription:
							"Download full text studies, request copies from authors, interlibrary loan",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "11. Screen full-text",
						toolDescription:
							"Screen full text of articles, exclude irrelevant citations, resolve disputes",
						toolLink: [
							{ name: "Screenatron", link: "" },
							{ name: "Disputatron", link: "" }
						],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "12. Screen trial registries",
						toolDescription:
							"Based on title and text in the trial registry entry: exclude irrelevant citations, resolve disputes",
						toolLink: [
							{ name: "Screenatron", link: "" },
							{ name: "Disputatron", link: "" }
						],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "13. Citation analysis",
						toolDescription:
							"Follow citations, cited and citing, from included studies to find additional relevant studies",
						toolLink: [{ name: "SpiderCite", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "14. Screen citation analysis",
						toolDescription:
							"Screen titles and abstracts, and full texts exclude irrelevant citations, resolve disputes",
						toolLink: [
							{ name: "Screenatron", link: "" },
							{ name: "Disputatron", link: "" }
						],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "15. Extract data",
						toolDescription:
							"Extract study characteristics and relevant outcomes plan data presentation? - how will things be presented in the paper? Loai and I spent a while discussing and trying to work that out",
						toolLink: [
							{ name: "Data Extraction", link: "/method/data-extractio" }
						],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "16. Risk of Bias assessment",
						toolDescription: "Assess the potential biases in included studies",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "17. Synthesise data",
						toolDescription:
							"Convert extracted outcome data to common representation (usually mean and SD)",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "18. Meta-analysis",
						toolDescription:
							"Statistically combine the results using meta-analysis or other statistical synthesis",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "19. GRADE evidence",
						toolDescription:
							"Optional: rate the certainty of evidence for a treatment efficacy from high to very low",
						toolLink: [{ name: "Grade Pro", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "20. Summary of findings",
						toolDescription:
							"Optional: summarise the main findings of the SR in a table",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "21. Update systematic search strategy",
						toolDescription:
							"Optional: repeat the search to find new studies published since the initial search, especially if search more than a year old",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "22. Write introduction",
						toolDescription:
							"Revise the introduction section from the SR protocol",
						toolLink: [{ name: "Introduction", link: "/method/introduction" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "23. Write methods",
						toolDescription: "Revise the methods section from the SR protocol",
						toolLink: [{ name: "Methods Wizard", link: "/titlepage" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "24. Write results",
						toolDescription: "Write the results section of the SR",
						toolLink: [{ name: "Refman Replicant", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "25. Write discussion",
						toolDescription:
							"Write the discussion and conclusion sections of the SR",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "26. Obtain external feedback",
						toolDescription:
							"Circulate to colleagues for external feedback, also take a break from the SR to allow thinking time about the manuscript",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "27. Submit manuscript",
						toolDescription:
							"Format manuscript to meet journal requirements, complete online forms and submit manuscript",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "28. Reformat and resubmit manuscript",
						toolDescription:
							"If rejected, reformat manuscript to meet new journal requirements and standards, and submit (if accepted skip this task)",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "29. Manuscript revisions",
						toolDescription:
							"Revise manuscript due to comments from peer reviewers, and resubmit it",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
						tasks: "30. Manuscript accepted",
						toolDescription:
							"Review manuscript, and copy edit any errors or issues",
						toolLink: [{ name: "", link: "" }],
						peopleInvolved: "",
						notes: ""
					},
					{
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
			isTrialRegistries: false,
			screenTrialRegisPeople: null,
			numberOfTitleAbstractScreeners: null,
			titleAbstractScreeners: null,
			fullTextRetrivalAuthor: null,
			numberOfFullTextScreeners: null,
			fullTextScreeners: null,
			disputeResolution: [],
			isPrismaFlowDiagram: false,
			isExcludedFullTextInAppendix: false
		},
		extraction: {
			numberOfStudies: null,
			numberOfExtractors: null,
			extractionAuthors: null,
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
	return data[key];
};

export default key => ({
	data() {
		return {
			[key]: getDefaultData(key)
		};
	},
	computed: {
		methodsRecord() {
			return this.$store.state.methodsRecord;
		},
		projectRecord() {
			return this.$store.state.projectRecord;
		}
	},
	mounted() {
		if (this.methodsRecord) {
			var existing = this.methodsRecord.get(key);
			if (existing) {
				this[key] = existing;
			}
			this.methodsRecord.subscribe(key, picot => {
				this[key] = picot;
			});
		}
	},
	destroyed() {
		if (this.methodsRecord) {
			this.methodsRecord.unsubscribe(key);
		}
	},
	methods: {
		updateField(field, value) {
			this.$set(this[key], field, value);
			this.methodsRecord.set(key, this[key]);
			this.projectRecord.set("metadata.dateModified", Date.now());
		}
	}
});
