<template>
  <div class="p-mb-6">
    <p>
      <b>{{ question }}</b>
    </p>
    <table>
      <tr>
        <th>Inclusion</th>
        <th>Outcome</th>
      </tr>
      <tr v-for="(row, index) in value" :key="index">
        <td>
          <div class="p-field-checkbox">
            <Checkbox
              id="inclusion"
              v-model="row.inclusion"
              :binary="true"
              @input="update(index, row, 'inclusion', $event)"
            />
            <label for="inclusion">
              {{ row.inclusion ? "Include" : "Exclude" }}
            </label>
          </div>
        </td>
        <td>
          <Textarea
            :value="row.outcome"
            :autoResize="true"
            rows="2"
            @input="update(index, row, 'outcome', $event)"
          />
        </td>
      </tr>
    </table>

    <Dialog
      :visible.sync="deleteProductDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
        <span v-if="outcome.data"
          >Are you sure you want to delete <b>{{ outcome.data.outcome }}</b
          >?</span
        >
      </div>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          class="p-button-text"
          @click="deleteProductDialog = false"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          class="p-button-text"
          @click="deleteProduct"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "primevue/dialog";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";

export default {
  name: "InputTable",
  props: {
    question: String,
    value: Array,
    columnHeader: String,
    inclusion: Boolean,
    type: Boolean,
    description: Boolean,
    examples: Boolean
  },
  components: {
    Dialog,
    Textarea,
    Button,
    Checkbox
  },
  data() {
    return {
      productDialog: false,
      deleteProductDialog: false,
      deleteProductsDialog: false,
      outcome: {},
      filters: {},
      submitted: false
    };
  },
  methods: {
    newRow() {
      this.value.push({});
      this.$emit("input", this.value);
    },
    update(index, original, field, event) {
      console.log(event);
      var newObj = original;
      newObj[field] = event;
      this.$set(this.value, index, newObj);
      this.$emit("input", this.value);
    },
    confirmDelete(outcome) {
      console.log(outcome);
      this.outcome = outcome;
      this.deleteProductDialog = true;
    },
    deleteProduct() {
      this.value.splice(this.outcome.index, 1);
      this.deleteProductDialog = false;
      this.$emit("input", this.value);
      this.outcome = {};
    }
  }
};
</script>
