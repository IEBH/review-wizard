<template>
  <div class="p-mb-6">
    <p>
      <b>{{ question }}</b>
    </p>
    <DataTable
      ref="dt"
      :value="value"
      dataKey="id"
      class="p-datatable-gridlines"
      :resizableColumns="true"
      columnResizeMode="fit"
    >
      <template #header>
        <Button
          label="New"
          icon="pi pi-plus"
          class="p-button-success p-mr-2"
          @click="openNew"
        />
      </template>

      <Column field="type" header="Type" sortable></Column>
      <Column field="outcome" header="Outcome" sortable></Column>
      <Column
        field="description"
        header="Description (Optional)"
        sortable
      ></Column>
      <Column field="examples" header="Examples (Optional)" sortable></Column>
      <Column>
        <template #body="slotProps">
          <Button
            icon="pi pi-pencil"
            class="p-button-rounded p-button-success p-mr-2"
            @click="editProduct(slotProps.data)"
          />
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-warning"
            @click="confirmDeleteProduct(slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>

    <Dialog
      :visible.sync="productDialog"
      :style="{ width: '450px' }"
      header="New Outcome"
      :modal="true"
      class="p-fluid"
    >
      <div class="p-field">
        <label class="p-mb-3">Type</label>
        <div class="p-formgrid p-grid">
          <div
            v-for="type of options"
            :key="type.key"
            class="p-field-radiobutton p-col-6"
          >
            <RadioButton
              :id="type.key"
              name="type"
              :value="type.name"
              v-model="outcome.type"
            />
            <label :for="type.key">{{ type.name }}</label>
          </div>
        </div>
        <small class="p-invalid" v-if="submitted && !outcome.type">
          Type must be specified.
        </small>
      </div>

      <div class="p-field">
        <label for="outcome">Outcome</label>
        <InputText
          id="outcome"
          v-model.trim="outcome.outcome"
          required="true"
          autofocus
          :class="{ 'p-invalid': submitted && !outcome.outcome }"
        />
        <small class="p-invalid" v-if="submitted && !outcome.outcome">
          Outcome must be specified.
        </small>
      </div>

      <div class="p-field">
        <label for="description">Description</label>
        <Textarea
          id="description"
          v-model="outcome.description"
          required="true"
          rows="3"
          cols="20"
        />
      </div>

      <div class="p-field">
        <label for="examples">Examples</label>
        <Textarea
          id="examples"
          v-model="outcome.examples"
          required="true"
          rows="3"
          cols="20"
        />
      </div>

      <template #footer>
        <Button
          label="Cancel"
          icon="pi pi-times"
          class="p-button-text"
          @click="hideDialog"
        />
        <Button
          label="Save"
          icon="pi pi-check"
          class="p-button-text"
          @click="saveProduct"
        />
      </template>
    </Dialog>

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
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";

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
    InputText,
    Textarea,
    Button,
    RadioButton
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
    openNew() {
      this.outcome = {};
      this.submitted = false;
      this.productDialog = true;
    },
    hideDialog() {
      this.productDialog = false;
      this.submitted = false;
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
          // this.$toast.add({
          //   severity: "success",
          //   summary: "Successful",
          //   detail: "outcome Updated",
          //   life: 3000
          // });
        } else {
          this.outcome.id = this.createId();
          this.value.push(this.outcome);
          // this.$toast.add({
          //   severity: "success",
          //   summary: "Successful",
          //   detail: "outcome Created",
          //   life: 3000
          // });
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
    editProduct(outcome) {
      this.outcome = { ...outcome };
      this.productDialog = true;
    },
    confirmDeleteProduct(outcome) {
      this.outcome = outcome;
      this.deleteProductDialog = true;
    },
    deleteProduct() {
      this.value = this.value.filter(val => val.id !== this.outcome.id);
      this.deleteProductDialog = false;
      this.outcome = {};
      // this.$toast.add({
      //   severity: "success",
      //   summary: "Successful",
      //   detail: "outcome Deleted",
      //   life: 3000
      // });
    },
    confirmDeleteSelected() {
      this.deleteProductsDialog = true;
    }
  }
};
</script>
