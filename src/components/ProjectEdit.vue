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
      const articleId = this.$route.params.articleId;
      if (!articleId) {
        console.log("No article id specified");
      } else if (articleId !== this.prevId) {
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
              console.log(
                "Error opening firestore channel, this error should not be hit"
              );
              console.error(error);
              this.$store.commit("setArticleId", null);
              this.$router.replace("/");
            });
        } else {
          console.log("Article ID does not exist");
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
