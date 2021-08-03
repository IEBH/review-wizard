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
			:options="selectOptions"
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

		<Button
			label="Other"
			icon="pi pi-plus"
			class="p-button-success"
			@click="openModal"
		/>

		<!-- Modal to display other option -->
		<Dialog
			header="Add Option"
			:visible.sync="displayModal"
			:style="{ width: '50vw' }"
			:modal="true"
		>
			<div class="p-fluid p-jc-center">
				<p>Enter value of new option below</p>
				<InputText autofocus v-model="newOption" class="p-mb-3" /> <br />
				<Button
					label="Add Value"
					icon="pi pi-plus"
					class="p-button-success"
					@click="closeModal"
				/>
			</div>
		</Dialog>
	</div>
</template>

<script>
import Listbox from "primevue/listbox";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

export default {
	name: "InputSelectMulti",
	props: {
		question: String,
		options: Array,
		value: Array
	},
	components: {
		Listbox,
		Button,
		Dialog,
		InputText
	},
	data() {
		return {
			displayModal: false,
			newOption: null
		};
	},
	computed: {
		// Find the union of value and options to account for other options which are user defined
		selectOptions: function() {
			if (this.value)
				return this.arrayUnion(this.value, this.options, this.areLabelsSame);
			else return this.options;
		}
	},
	methods: {
		openModal() {
			this.displayModal = true;
		},
		closeModal() {
			// Update new value
			if (this.newOption) {
				this.value.push({ label: this.newOption });
				this.$emit("input", this.value);
			}
			this.displayModal = false;
			this.newOption = null;
		},
		arrayUnion(arr1, arr2, equalityFunc) {
			var union = arr1.concat(arr2);

			for (var i = 0; i < union.length; i++) {
				for (var j = i + 1; j < union.length; j++) {
					if (equalityFunc(union[i], union[j])) {
						union.splice(j, 1);
						j--;
					}
				}
			}

			return union;
		},
		areLabelsSame(o1, o2) {
			return o1.label === o2.label;
		}
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
