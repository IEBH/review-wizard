<template>
  <div id="app">
    <!-- If articleId exists render small logo and toolbar -->
    <div v-if="articleId" class="p-grid p-ai-center">
      <div class="p-col-12 p-md-3 p-lg-2">
        <img class="logo" alt="Logo" src="./assets/logo.png" height="100px" />
      </div>
      <div class="p-col-12 p-md-9 p-lg-9">
        <h1 class="logo-text-small">ArticleWizard</h1>
      </div>
      <div class="toolbar p-col-12">
        <TheArticleToolbar />
      </div>
    </div>

    <!-- Else render a larger logo -->
    <div v-else class="p-grid p-ai-center">
      <div class="p-col-12 p-md-3 p-lg-2">
        <img class="logo" alt="Logo" src="./assets/logo.png" height="150px" />
      </div>
      <div class="p-col-12 p-md-9 p-lg-9">
        <h1 class="logo-text-large">ArticleWizard</h1>
      </div>
    </div>

    <div class="p-grid">
      <div class="p-col-12 p-md-3 p-lg-2"><TheSidebar /></div>
      <div class="p-col-12 p-md-9 p-lg-9">
        <div class="p-shadow-10" style="padding:20px">
          <ProjectEdit class="p-input-filled"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";

import TheSidebar from "./components/TheSidebar.vue";
import TheArticleToolbar from "./components/TheArticleToolbar.vue";
import ProjectEdit from "./components/ProjectEdit.vue";

export default {
  name: "App",
  components: {
    TheSidebar,
    TheArticleToolbar,
    ProjectEdit
  },
  computed: {
    articleId() {
      return this.$store.state.articleId;
    }
  }
};
</script>

<style>
.logo {
  display: block;
  margin: auto;
}
.logo-text-small {
  padding-left: 20px;
  font-size: 3em;
}
.logo-text-large {
  padding-left: 20px;
  font-size: 5em;
}
.toolbar {
  padding: 0px 20px 20px 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 20px;
}
</style>
