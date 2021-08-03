import { DeepstreamClient } from "@deepstream/client";

const getDefaultMethods = () => {
	return {
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
};

export default {
	data() {
		return {
			projectId: null,
			client: new DeepstreamClient("localhost:6020"),
			projectRecord: null,
			projectMetadata: null,
			methodsRecord: null,
			methods: getDefaultMethods()
		};
	},
	async created() {
		this.projectId = this.$route.query["project-id"];
		console.log("Loading Project:", `project/${this.projectId}`);
		if (this.projectId) {
			// Login
			this.client.login();
			// Add project record
			this.projectRecord = this.client.record.getRecord(
				`project/${this.projectId}`
			);
			// Subscribe to project metadata
			this.projectMetadata = await new Promise(resolve => {
				this.projectRecord.subscribe("metadata", metadata => {
					resolve(metadata);
				});
			});
			if (this.projectMetadata) {
				// Add methods record
				this.methodsRecord = this.client.record.getRecord(
					`methods/${this.projectMetadata.methods}`
				);
				// Subscribe to each method section
				// PICOT
				this.methodsRecord.subscribe("picot", picot => {
					this.$set(this.methods, "picot", picot);
				});
			} else {
				console.error("Invalid project-id");
			}
		} else {
			console.error("No project id specified");
		}
	},
	methods: {
		updateMethods(section, field, value) {
			this.methods[section][field] = value;
			this.methodsRecord.set(section, this.methods[section]);
		}
	}
};
