<template>
  <div class="p-mb-6">
    <p>
      <b>{{ question }}</b>
    </p>
    <DataTable
      ref="dt"
      :value="value"
      dataKey="id"
      class="p-fluid p-datatable-gridlines"
      :resizableColumns="true"
      columnResizeMode="fit"
    >
      <!-- New row button -->
      <template #footer>
        <Button
          label="New"
          icon="pi pi-plus"
          class="p-button-success p-mr-2"
          @click="newRow"
        />
      </template>

      <!-- Type column -->
      <Column field="type" header="Type" headerStyle="width: 10rem;">
        <template #body="slotProps">
          <div class="p-field-checkbox">
            <Checkbox id="type" v-model="slotProps.data.type" :binary="true" />
            <label for="type">
              {{ slotProps.data.type ? "Primary" : "Secondary" }}
            </label>
          </div>
        </template>
      </Column>

      <!-- Outcome column -->
      <Column field="outcome" header="Outcome">
        <template #body="slotProps">
          <Textarea
            v-model="slotProps.data.outcome"
            :autoResize="true"
            rows="2"
          />
        </template>
      </Column>

      <!-- Description column -->
      <Column field="description" header="Description (Optional)">
        <template #body="slotProps">
          <Textarea
            v-model="slotProps.data.description"
            :autoResize="true"
            rows="2"
          />
        </template>
      </Column>

      <!-- Example column -->
      <Column field="examples" header="Examples (Optional)">
        <template #body="slotProps">
          <Textarea
            v-model="slotProps.data.examples"
            :autoResize="true"
            rows="2"
          />
        </template>
      </Column>

      <!-- Delete row column -->
      <Column
        headerStyle="width: 5rem; text-align: center"
        bodyStyle="text-align: center; overflow: visible"
      >
        <template #body="slotProps">
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-warning"
            @click="confirmDelete(slotProps)"
          />
        </template>
      </Column>
    </DataTable>

    <Dialog
      :visible.sync="deleteProductDialog"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
        <span v-if="outcome"
          >Are you sure you want to delete <b>{{ outcome.outcome }}</b
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
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Column from "primevue/column";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";

export default {
  name: "InputTable",
  props: {
    question: String,
    options: Array,
    value: Array
  },
  components: {
    DataTable,
    Dialog,
    Column,
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
      this.value.push({ id: this.createId(), type: true });
    },
    saveProduct() {
      this.submitted = true;

      if (this.outcome.outcome && this.outcome.type) {
        if (this.outcome.id) {
          this.$set(
            this.value,
            this.findIndexById(this.outcome.id),
            this.outcome
          );
        }

        this.productDialog = false;
        this.$emit("input", this.value);
        this.outcome = {};
      }
    },
    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.value.length; i++) {
        if (this.value[i].id === id) {
          index = i;
          break;
        }
      }

      return index;
    },
    createId() {
      let id = "";
      var chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    },
    confirmDelete(outcome) {
      console.log(outcome);
      this.outcome = outcome;
      this.deleteProductDialog = true;
    },
    deleteProduct() {
      this.value.splice(this.outcome.index, 1);
      this.deleteProductDialog = false;
      this.outcome = {};
    }
  }
};
</script>
