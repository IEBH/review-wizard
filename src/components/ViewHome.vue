<template>
  <div>
    <h1>Welcome to the Article Wizard</h1>
    <p v-if="articleId">
      To start making changes, simply select a section from the left hand side
      and begin filling it in
    </p>
    <p v-else>
      To create a new article, please use the "Create New Article" button on the
      left hand side of the page.
    </p>
  </div>
</template>

<script>
export default {
  name: "ViewHome",
  computed: {
    articleId() {
      return this.$store.state.articleId;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
