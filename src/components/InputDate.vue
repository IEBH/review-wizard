<template>
  <div class="p-mb-6">
    <p>
      <b>
        {{ question }}
      </b>
    </p>
    <!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
    <Calendar :value="date" @input="$emit('input', $event)" />
  </div>
</template>

<script>
import Calendar from "primevue/calendar";

export default {
  name: "InputDate",
  props: {
    question: String,
    value: [Date, Object]
  },
  computed: {
    date() {
      // Try to convert date if timestamp, if not return value
      try {
        return this.value?.toDate();
      } catch {
        return this.value;
      }
    }
  },
  components: {
    Calendar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
