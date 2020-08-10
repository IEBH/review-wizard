<template>
  <Toolbar>
    <template slot="left"> 
      <b>Article Title</b>
    </template>
    <template slot="right">
      <Button label="Share" class="p-mr-2"/>
      <Button label="Close" />
    </template>
  </Toolbar>
</template>

<script>
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";

export default {
  name: "TheArticleToolbar",
  components: {
    Toolbar,
    Button
  }
};
</script>
