<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "ProjectEdit",
  mounted() {
    const articleId = this.$route.query.articleId;
    if (articleId) {
      this.$store
        .dispatch("method/openDBChannel", { pathVariables: { articleId } })
        .then(() => {
          this.$store.commit("setActiveArticle", true);
        })
        .catch(error => {
          console.log(
            "Error opening firestore channel, most likely due to invalid/expired articleId"
          );
          console.error(error);
          this.$store.commit("setActiveArticle", false);
        });
    } else {
      console.log("No articleId specified");
      this.$store.commit("setActiveArticle", false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
