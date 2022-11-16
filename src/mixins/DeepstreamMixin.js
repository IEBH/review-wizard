const getDefaultData = key => {
	const data = {
		titlepage: {
			title: "",
			authors: [""],
			year: 0
		},
		introduction: {
			intro: ""
		},
		researchplan: {
			planTable: {
				headers: [
					{ name: "srTaskNo", label: "SR TaskNo." },
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
						srTaskNo: "a1",
						tasks: "Lead in time",
						toolDescription:
							"Time spent completing other work to allow SR authors to focus on the 2 week SR",
						toolLink: "/titlepage",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "a2",
						tasks: "SR design meetings",
						toolDescription:
							"Time spent refining the idea, determining feasibility, assembling the team, planning timelines, deciding on roles (who's responsible for oversight, coordination and documentation) and provide information on SRA tools",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "0",
						tasks: "Daily administrative meetings",
						toolDescription:
							"Short daily meetings to review progress, discuss issues and document decisions",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "1",
						tasks: "Formulate SR question",
						toolDescription: "Final decision on the research question (PICO)",
						toolLink: "/method/picot",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "2",
						tasks: "Find and review existing or upcoming SRs",
						toolDescription:
							"Search for and review existing SRs that answers the same or a similar question.",
						toolLink: "/method/search",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "3",
						tasks: "Write the SR protocol",
						toolDescription:
							"Provide an objective, reproducible, sound methodology for the SR, then register the protocol",
						toolLink: "/method/search/bibliographic-databases",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "4",
						tasks: "Obtain set of relevant studies",
						toolDescription:
							"Identify a small sample of studies relevant to the review, to aid with designing the search and data extraction form.",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "5",
						tasks: "Design data extraction form",
						toolDescription:
							"Design forms for extracting study characteristics and test their usefulness/applicability",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "6",
						tasks: "Design systematic search strategy",
						toolDescription:
							"Design search strategy to find all relevant information (choose databases; develop search string)",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "7",
						tasks: "Run systematic search strings",
						toolDescription:
							"Run search strings in databases, trial registries, collate results in reference management system (e.g. EndNote)",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "8",
						tasks: "Deduplicate results",
						toolDescription: "Remove duplicate citations",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "9",
						tasks: "Screen abstracts",
						toolDescription:
							"Screen titles and abstracts, exclude irrelevant citations, resolve disputes",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "10",
						tasks: "Obtain full text",
						toolDescription:
							"Download full text studies, request copies from authors, interlibrary loan",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "11",
						tasks: "Screen full text",
						toolDescription:
							"Screen full text of articles, exclude irrelevant citations, resolve disputes",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "12",
						tasks: "Screen trial registries",
						toolDescription:
							"Based on title and text in the trial registry entry: exclude irrelevant citations, resolve disputes",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "13",
						tasks: "Citation analysis",
						toolDescription:
							"Follow citations, cited and citing, from included studies to find additional relevant studies",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "14",
						tasks: "Screen citation analysis",
						toolDescription:
							"Screen titles and abstracts, and full texts exclude irrelevant citations, resolve disputes",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "15",
						tasks: "Extract data",
						toolDescription:
							"Extract study characteristics and relevant outcomes plan data presentation? - how will things be presented in the paper? Loai and I spent a while discussing and trying to work that out",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "16",
						tasks: "Risk of Bias assessment",
						toolDescription: "Assess the potential biases in included studies",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "17",
						tasks: "Synthesise data",
						toolDescription:
							"Convert extracted outcome data to common representation (usually mean and SD)",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "18",
						tasks: "Meta-analysis",
						toolDescription:
							"Statistically combine the results using meta-analysis or other statistical synthesis",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "19",
						tasks: "GRADE evidence",
						toolDescription:
							"Optional: rate the certainty of evidence for a treatment efficacy from high to very low",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "20",
						tasks: "Summary of findings",
						toolDescription:
							"Optional: summarise the main findings of the SR in a table",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "21",
						tasks: "Update systematic search strategy",
						toolDescription:
							"Optional: repeat the search to find new studies published since the initial search, especially if search more than a year old",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "22",
						tasks: "Write introduction",
						toolDescription:
							"Revise the introduction section from the SR protocol",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "23",
						tasks: "Write methods",
						toolDescription: "Revise the methods section from the SR protocol",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "24",
						tasks: "Write results",
						toolDescription: "Write the results section of the SR",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "25",
						tasks: "Write discussion",
						toolDescription:
							"Write the discussion and conclusion sections of the SR",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "26",
						tasks: "Obtain external feedback",
						toolDescription:
							"Circulate to colleagues for external feedback, also take a break from the SR to allow thinking time about the manuscript",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "27",
						tasks: "Submit manuscript",
						toolDescription:
							"Format manuscript to meet journal requirements, complete online forms and submit manuscript",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "28",
						tasks: "Reformat and resubmit manuscript",
						toolDescription:
							"If rejected, reformat manuscript to meet new journal requirements and standards, and submit (if accepted skip this task)",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "29",
						tasks: "Manuscript revisions",
						toolDescription:
							"Revise manuscript due to comments from peer reviewers, and resubmit it",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "30",
						tasks: "Manuscript accepted",
						toolDescription:
							"Review manuscript, and copy edit any errors or issues",
						toolLink: "",
						peopleInvolved: "",
						notes: ""
					},
					{
						srTaskNo: "31",
						tasks: "Manuscript published",
						toolDescription:
							"Send the details around to everyone you know, and enjoy the kudos",
						toolLink: "",
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
