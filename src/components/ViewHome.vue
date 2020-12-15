<template>
  <div>
    <h1>Welcome to the Methods Wizard!</h1>
    <p v-if="articleId">
      To start making changes, simply select a section from the left hand side
      and begin filling it in
    </p>
    <div v-else>
      <p>
        To create a new methods section, please use the "Create New Method"
        button.
      </p>
      <p>
        Any changes made are automatically synced, just make sure to save the
        URL to continue accessing the method section.
      </p>
      <br />
      <Button
        label="Create New Method"
        @click="newArticle"
        class="create-button"
      />
    </div>
  </div>
</template>

<script>
import { createNewArticle } from "../api/firebase.js";

import Button from "primevue/button";

export default {
  name: "ViewHome",
  components: {
    Button
  },
  computed: {
    articleId() {
      return this.$store.state.articleId;
    }
  },
  methods: {
    newArticle() {
      createNewArticle()
        .then(val => {
          const newId = val.id;
          this.$router.replace({
            name: "titlepage",
            params: { articleId: newId }
          });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
