<template>
  <div>
    <p>{{ question }}</p>
    <!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
    <Listbox
      v-bind:value="value"
      v-on:change="$emit('input', $event.value)"
      :options="options"
      :multiple="true"
    />
  </div>
</template>

<script>
import Listbox from "primevue/listbox";
export default {
  name: "InputSelectMulti",
  props: {
    question: String,
    options: Array,
    value: Array
  },
  components: {
    Listbox
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
