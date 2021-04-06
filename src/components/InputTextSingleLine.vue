<template>
  <div class="p-fluid">
    <p>
      <b>{{ question }}</b>
    </p>
    <!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
    <!-- <input
        v-bind:value="value"
        v-on:change="$emit('input', $event.target.value)"
      > -->
    <InputText
      type="text"
      :value="value"
      :placeholder="placeholder"
      @change="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
export default {
  name: "InputTextSingleLine",
  props: {
    question: String,
    value: String,
    placeholder: String
  },
  components: {
    InputText
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
