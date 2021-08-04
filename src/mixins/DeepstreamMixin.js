const getDefaultData = key => {
	const data = {
		titlepage: {
			title: "",
			authors: [""],
			year: 0
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
		}
	}
});
