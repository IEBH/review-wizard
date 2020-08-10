<template>
  <Toolbar>
    <template slot="left">
      <b>{{ title ? title : "Untitled Article" }}</b>
    </template>
    <template slot="right">
      <Button label="Share" class="p-mr-2" />
      <Button label="Close" @click="closeArticle" />
    </template>
  </Toolbar>
</template>

<script>
import { mapState } from "vuex";
import { closeArticle } from "../api/firebase.js";

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";

export default {
  name: "TheArticleToolbar",
  components: {
    Toolbar,
    Button
  },
  computed: mapState({
    title: state => state.titlepage.doc.title
  }),
  methods: {
    closeArticle() {
      closeArticle(this.$store);
      this.$router.push("/");
    }
  }
};
</script>
