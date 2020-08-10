<template>
  <div>
    <PanelMenu v-if="articleId" :model="items" />
  </div>
</template>

<script>
import { createNewArticle } from "../api/firebase.js";
import PanelMenu from "primevue/panelmenu";

export default {
  name: "TheSidebar",
  components: {
    PanelMenu,
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
              label: "Title Page",
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
