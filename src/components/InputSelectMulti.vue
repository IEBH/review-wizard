<template>
  <div class="input-select-multi p-mb-6">
    <p>
      <b>
        {{ question }}
      </b>
    </p>
    <!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
    <Listbox
      v-bind:value="value"
      v-on:change="$emit('input', $event.value)"
      :options="options"
      optionLabel="label"
      dataKey="label"
      :multiple="true"
    >
      <template #option="slotProps">
        <div>
          <span class="p-ml-3">{{ slotProps.option.label }}</span>
        </div>
      </template>
    </Listbox>
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
<style>
.p-listbox-item::before {
  content: "\e90b";
  font-family: "primeicons";
  float: left;
}
.p-listbox-item.p-highlight::before {
  content: "\e909";
}
</style>
