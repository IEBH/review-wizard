export default {
	created() {
		console.log(this.$route.query["project-id"]);
	}
}