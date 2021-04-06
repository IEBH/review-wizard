<template>
  <div class="p-mb-6">
    <p>
      <b>{{ question }}</b>
    </p>
    <table class="p-fluid" style="width: 100%;">
      <thead>
        <tr>
          <th v-if="inclusion" style="width: 9rem;">
            Inclusion
          </th>
          <th v-if="type" style="width: 9rem;">Type</th>
          <th>{{ columnHeader }}</th>
          <th v-if="description">Description (Optional)</th>
          <th v-if="examples">Examples (Optional)</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, index) in value" :key="index">
          <!-- Inclusion -->
          <td v-if="inclusion">
            <div style="margin: 10px;">
              <SelectButton
                optionLabel="name"
                optionValue="value"
                :options="includeOptions"
                v-model="row.inclusion"
                @input="update(index, row, 'inclusion', $event)"
              />
            </div>
          </td>
          <!-- Type -->
          <td v-if="type">
            <div style="margin: 10px;">
              <SelectButton
                optionLabel="name"
                optionValue="value"
                :options="typeOptions"
                v-model="row.type"
                @input="update(index, row, 'type', $event)"
              />
            </div>
          </td>
          <!-- Main -->
          <td>
            <Textarea
              :placeholder="mainPlaceholder"
              :value="row.main"
              :autoResize="true"
              :ref="index"
              rows="2"
              @input="update(index, row, 'main', $event)"
            />
          </td>
          <!-- Description -->
          <td v-if="description">
            <Textarea
              :placeholder="descrtiptionPlaceholder"
              :value="row.description"
              :autoResize="true"
              rows="2"
              @input="update(index, row, 'description', $event)"
            />
          </td>
          <!-- Examples -->
          <td v-if="examples">
            <Textarea
              :placeholder="examplePlaceholder"
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
              @click="confirmDelete(row, index)"
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
        <span v-if="selectedRow"
          >Are you sure you want to delete <b>{{ selectedRow.main }}</b
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
import SelectButton from "primevue/selectbutton";

export default {
  name: "InputTable",
  props: {
    question: String,
    value: Array,
    columnHeader: String,
    inclusion: Boolean,
    type: Boolean,
    description: Boolean,
    examples: Boolean,
    mainPlaceholder: String,
    examplePlaceholder: String,
    descrtiptionPlaceholder: String
  },
  components: {
    Dialog,
    Textarea,
    Button,
    SelectButton
  },
  data() {
    return {
      productDialog: false,
      deleteProductDialog: false,
      deleteProductsDialog: false,
      selectedRow: {},
      filters: {},
      submitted: false,
      includeOptions: [
        { name: "Include", value: true },
        { name: "Exclude", value: false }
      ],
      typeOptions: [
        { name: "Primary", value: true },
        { name: "Secondary", value: false }
      ]
    };
  },
  methods: {
    newRow() {
      if (this.inclusion && this.type) {
        this.value.push({ inclusion: true, type: true });
      } else if (this.inclusion) {
        this.value.push({ inclusion: true });
      } else if (this.type) {
        this.value.push({ type: true });
      } else {
        this.value.push({});
      }
      this.$emit("input", this.value);
      const lastIndex = this.value.length - 1;
      // Wait until next tick so component is rendered
      this.$nextTick(() => {
        this.$refs[lastIndex][0].$el.focus();
      });
    },
    update(index, original, field, event) {
      var newObj = original;
      newObj[field] = event;
      this.$set(this.value, index, newObj);
      this.$emit("input", this.value);
    },
    confirmDelete(row, index) {
      this.selectedRow = row;
      this.selectedRow.index = index;
      this.deleteProductDialog = true;
    },
    deleteProduct() {
      this.value.splice(this.selectedRow.index, 1);
      this.deleteProductDialog = false;
      this.$emit("input", this.value);
      this.selectedRow = {};
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
