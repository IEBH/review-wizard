<template>
  <router-view></router-view>
</template>

<script>
import router from "../router";
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
    refresh() {
      const articleId = this.$route.params.articleId;
      if (!articleId) {
        console.log("No article id specified");
      } else if (articleId !== this.prevId) {
        // Article id has changed, update the store
        this.$store
          .dispatch("method/openDBChannel", { pathVariables: { articleId } })
          .then(() => {
            this.$store.commit("setArticleId", articleId);
          })
          .catch(error => {
            console.log(
              "Error opening firestore channel, most likely due to invalid/expired articleId"
            );
            console.error(error);
            this.$store.commit("setArticleId", null);
            router.replace("/");
          });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
