<template>
  <div>
    <Toolbar>
      <template slot="left">
        <b>{{ title ? title : "Untitled Article" }}</b>
      </template>
      <template slot="right">
        <Button
          label="Share"
          @click="openModal()"
          icon="pi pi-share-alt"
          class="p-mr-2"
        />
        <Button label="Close" @click="closeArticle" class="p-button-danger" />
      </template>
    </Toolbar>

    <!-- Modal to display output -->
    <Dialog
      header="Share"
      :visible.sync="displayModal"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <p>Copy the link below to send to others:</p>
      <Toolbar>
        <template slot="left">{{ shareUrl }}</template>
        <template slot="right">
          <Button icon="pi pi-copy" @click="copyLink" />
        </template>
      </Toolbar>
      <input type="hidden" id="testing-code" :value="shareUrl" />
    </Dialog>

    <!-- Toast for copy msg -->
    <Toast />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { closeArticle } from "../api/firebase.js";

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";

export default {
  name: "TheArticleToolbar",
  components: {
    Toolbar,
    Button,
    Dialog,
    Toast
  },
  computed: mapState({
    title: state => state.titlepage.doc.title,
    articleId: state => state.articleId
  }),
  data() {
    return {
      displayModal: false,
      shareUrl: ""
    };
  },
  methods: {
    closeArticle() {
      closeArticle(this.$store);
      this.$router.push("/");
    },
    openModal() {
      this.shareUrl = "https://articlewizard.netlify.app/#/" + this.articleId;
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },
    copyLink() {
      let linkToCopy = document.querySelector("#testing-code");
      linkToCopy.setAttribute("type", "text");
      linkToCopy.select();

      try {
        document.execCommand("copy");
        this.$toast.add({
          severity: "success",
          summary: "Successfully copied to clipboard",
          life: 3000
        });
      } catch (err) {
        console.error(err);
        this.$toast.add({
          severity: "error",
          summary: "Error copying to clipboard",
          detail: err,
          life: 3000
        });
      }

      /* unselect the range */
      linkToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    }
  }
};
</script>
