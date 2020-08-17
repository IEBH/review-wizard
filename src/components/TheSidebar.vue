<template>
  <div>
    <sidebar-menu
      v-if="articleId"
      :menu="menu"
      :relative="true"
      theme="white-theme"
      width="100%"
    />
  </div>
</template>

<script>
import { createNewArticle } from "../api/firebase.js";
import { SidebarMenu } from "vue-sidebar-menu";

export default {
  name: "TheSidebar",
  components: {
    SidebarMenu
  },
  computed: {
    articleId() {
      return this.$store.state.articleId;
    },
    menu() {
      return [
        {
          header: true,
          title: "Metadata",
          hiddenOnCollapse: true
        },
        {
          title: "Title Page",
          icon: "pi pi-file",
          href: `/${this.$store.state.articleId}/titlepage`
        },
        {
          header: true,
          title: "Method",
          hiddenOnCollapse: true
        },
        {
          title: "PICOT",
          icon: "pi pi-file",
          href: `/${this.$store.state.articleId}/method/picot`
        },
        {
          title: "Search Strategy",
          icon: "pi pi-search",
          href: `/${this.$store.state.articleId}/method/searchStrategy`
        },
        {
          title: "Study Selection and Screening",
          icon: "pi pi-upload",
          href: `/${this.$store.state.articleId}/method/screening`
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
