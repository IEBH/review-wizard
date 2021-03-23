const method = {
  firestorePath: "reviews/{articleId}/sections/titlepage",
  firestoreRefType: "doc", // or 'doc'
  moduleName: "titlepage",
  statePropName: "doc",
  namespaced: true, // automatically added
  // sync: {
  //   preventInitialDocInsertion: true // Prevent document from being created if it doesnt exist
  // },

  // this object is your store module (will be added as '/metadata')
  // you can also add state/getters/mutations/actions

  // default state
  state: {
    doc: {
      title: "",
      authors: [""],
      year: ""
    }
  },
  getters: {},
  mutations: {},
  actions: {}
};

export default method;
