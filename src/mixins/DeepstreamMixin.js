import projectTemplateImport from "@/helpers/projectTemplateImport.js";

const getDefaultData = async key => {
	const { data } = await projectTemplateImport();
	return data[key];
};
let dataIsReady;

export default key => ({
	data() {
		return {
			[key]: {},
			dataReady: new Promise(resolve => (dataIsReady = resolve))
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
	async mounted() {
		this[key] = await getDefaultData(key);
		// Resolve promise marking that data is ready
		dataIsReady();
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
			this[key][field] = value;
			this.methodsRecord.set(key, this[key]);
			this.projectRecord.set("metadata.dateModified", Date.now());
		}
	}
});
