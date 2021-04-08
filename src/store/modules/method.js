const method = {
  firestorePath: "reviews/{articleId}/sections/method",
  firestoreRefType: "doc", // or 'doc'
  moduleName: "method",
  statePropName: "doc",
  namespaced: true, // automatically added
  // sync: {
  //   preventInitialDocInsertion: true // Prevent document from being created if it doesnt exist
  // },

  // this object is your store module (will be added as '/method')
  // you can also add state/getters/mutations/actions

  // default state
  state: {
    doc: {
      picot: {
        population: [{ inclusion: true }],
        intervention: [{ inclusion: true }],
        comparator: [{ inclusion: true }],
        outcomes: [{ inclusion: true, type: true }],
        types: []
      },
      search: {
        // Search Strategy
        components: [],
        specialist: [],
        helper: [],
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
        //New
        optionalDetail: false,
        methods: [],
        participants: [],
        interventions: [],
        comparators: [],
        outcomes: null,
        types: []
      },
      riskOfBias: {
        numberOfAuthors: null,
        isIndependent: false,
        toolUsed: null
      },
      measurementOfEffect: {
        toolUsed: null,
        dichotomousOutcomes: [],
        metaAnalysisThreshold: null,
        metaAnalysisModelUsed: null
      },
      unitOfAnalysis: {
        type: null,
        otherType: null,
        example: null
      },
      missingData: {
        isContactedInvestigators: false
      },
      heterogeneityPublicationBiases: {
        isMeasuredPublicationBias: false,
        biasMeasurement: null,
        didNotMeasure: "because fewer than 20 studies were included"
      },
      subgroupAndSensitivityAnalysis: {
        isSubgroupAnalysis: false,
        subgroupAnalysis: [""],
        whyNotSubgroupAnalysis: "We did not perform subgroup analysis",
        isSensitivityAnalysis: false,
        sensitivityAnalysis: [""],
        whyNotSensitivityAnalysis: "We did not perform sensitivity analysis"
      }
    }
  },
  getters: {},
  mutations: {},
  actions: {}
};

export default method;
