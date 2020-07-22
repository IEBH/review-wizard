<template>
  <Dialog header="Header" :visible.sync="displayModal" :style="{width: '50vw'}" :modal="true">
    <p class="p-m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <template #footer>
        <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
        <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
    </template>
  </Dialog>
</template>

<script>
import Dialog from 'primevue/dialog';
export default {
  name: 'OutputModal',
  data() {
    return {
      displayModal: false
    }
  },
  methods: {
    openModal() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    },
  },
  props: {
    // content: String
  },
  components: {
    Dialog
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
