export default key => ({
	computed: {
		methodsRecord() {
			return this.$store.state.methodsRecord;
		},
		projectRecord() {
			return this.$store.state.projectRecord;
		}
	},
	methods: {
		updateField(field, value) {
			console.info('@depreciated updateField(', {field, value}, ')');
			this.$set(this[key], field, value);
			this.methodsRecord.set(key, this[key]);
			this.projectRecord.set("metadata.dateModified", Date.now());
		}
	}
});
