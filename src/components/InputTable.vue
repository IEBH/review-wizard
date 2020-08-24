<template>
  <div class="p-mb-6">
    <p>
      <b>{{ question }}</b>
    </p>
    <table class="p-fluid" style="width: 100%;">
      <thead>
        <tr>
          <th v-if="inclusion" style="width: 9rem;">
            Inclusion (Include / Exclude)
          </th>
          <th v-if="type" style="width: 9rem;">Type (Primary / Secondary)</th>
          <th>{{ columnHeader }}</th>
          <th v-if="description">Description (Optional)</th>
          <th v-if="examples">Examples (Optional)</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, index) in value" :key="index">
          <!-- Inclusion -->
          <td v-if="inclusion">
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
          <!-- Type -->
          <td v-if="type">
            <div class="p-field-checkbox">
              <Checkbox
                id="type"
                v-model="row.type"
                :binary="true"
                @input="update(index, row, 'type', $event)"
              />
              <label for="type">
                {{ row.type ? "Primary" : "Secondary" }}
              </label>
            </div>
          </td>
          <!-- Outcome -->
          <td>
            <Textarea
              :value="row.outcome"
              :autoResize="true"
              rows="2"
              @input="update(index, row, 'outcome', $event)"
            />
          </td>
          <!-- Description -->
          <td v-if="description">
            <Textarea
              :value="row.description"
              :autoResize="true"
              rows="2"
              @input="update(index, row, 'description', $event)"
            />
          </td>
          <!-- Examples -->
          <td v-if="examples">
            <Textarea
              :value="row.examples"
              :autoResize="true"
              rows="2"
              @input="update(index, row, 'examples', $event)"
            />
          </td>
          <!-- Delete -->
          <td style="width: 4rem; text-align: center;">
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-warning"
              @click="confirmDelete(row)"
            />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <Button
          label="Add"
          icon="pi pi-plus"
          class="p-button-success p-mr-2"
          @click="newRow"
        />
      </tfoot>
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
      if (this.inclusion) {
        this.value.push({ inclusion: true });
      } else if (this.type) {
        this.value.push({ type: true });
      } else {
        this.value.push({});
      }
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

<style scoped>
table {
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid black;
}
</style>
