<template>
  <div>
    <PanelMenu v-if="articleId" :model="items" />
    <Button v-else label="Create New Article" @click="newArticle" />
  </div>
</template>

<script>
import { createNewArticle } from "../api/firebase.js";
import PanelMenu from "primevue/panelmenu";
import Button from "primevue/button";

export default {
  name: "TheSidebar",
  components: {
    PanelMenu,
    Button
  },
  computed: {
    articleId() {
      return this.$store.state.articleId;
    },
    items() {
      return [
        {
          label: "Metadata",
          items: [
            {
              label: "TitlePage",
              icon: "pi pi-file",
              to: `/${this.$store.state.articleId}/titlepage`
            }
          ]
        },
        {
          label: "Method",
          expanded: true,
          items: [
            {
              label: "PICOT",
              icon: "pi pi-file",
              to: `/${this.$store.state.articleId}/method/picot`
            },
            {
              label: "Search Strategy",
              icon: "pi pi-search",
              to: `/${this.$store.state.articleId}/method/searchStrategy`
            },
            {
              label: "Study Selection and Screening",
              icon: "pi pi-upload",
              to: `/${this.$store.state.articleId}/method/screening`
            }
          ]
        }
      ];
    }
  },
  methods: {
    newArticle() {
      createNewArticle()
        .then(val => {
          const newId = val.id;
          console.log(val.id);
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
