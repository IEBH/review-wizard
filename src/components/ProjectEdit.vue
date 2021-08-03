<template>
	<router-view></router-view>
</template>

<script>
import {
	checkArticleExists,
	openArticle,
	closeArticle
} from "../api/firebase.js";

export default {
	name: "ProjectEdit",
	created() {
		this.refresh();
	},
	computed: {
		prevId() {
			return this.$store.state.articleId;
		}
	},
	watch: {
		"$route.params.articleId"() {
			this.refresh();
		}
	},
	methods: {
		async refresh() {
			let articleId = this.$route.params.articleId;
			// Check article ID
			if (!articleId) {
				console.log("No article ID specified in URL, checking local storage");
				if (localStorage.articleId) {
					console.log("Article ID found in local storage");
					articleId = localStorage.articleId;
				} else {
					console.log("No article ID found in local storage");
					return;
				}
			}
			// Check if article ID is different to the current ID
			if (articleId !== this.prevId) {
				console.log("Fetching article from Firebase");
				// If there is a previous ID, close channel and clear store data
				if (this.prevId) closeArticle(this.$store);
				// Check for existence of article
				if (await checkArticleExists(articleId)) {
					// Article id has changed, update the store
					openArticle(this.$store, articleId)
						.then(() => {
							// Set the new article ID in the store
							this.$store.commit("setArticleId", articleId);
						})
						.catch(error => {
							console.error(
								"Error opening firestore channel, this error should not be hit"
							);
							this.$store.commit("setArticleId", null);
							this.$router.replace("/");
							throw error;
						});
				} else {
					console.error("Article ID does not exist");
					this.$store.commit("setArticleId", null);
					this.$router.replace("/");
				}
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
