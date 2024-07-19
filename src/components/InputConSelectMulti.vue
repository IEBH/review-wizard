<template>
	<div class="input-select-multi p-mb-6">
		<p>
			<b>
				{{ question }}
			</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<Listbox
			id="multihighlight"
			v-if="selectOptions.length > 0"
			v-bind:value="authOpt"
			v-on:change="onChangeValue($event.value)"
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
		<!-- p-button-success -->
		<div>
			<Button
				label="Other"
				icon="pi pi-plus"
				class="btsyle"
				@click="openModal"
			/>
		</div>

		<!-- Modal to display other option -->
		<Dialog
			header="Add Option"
			:visible.sync="displayModal"
			:style="{ width: '50vw' }"
			:modal="true"
		>
			<div class="p-fluid p-jc-center">
				<p>Enter value of new option below</p>
				<InputText
					autofocus
					placeholder="e.g. designed and tested the data extraction form"
					v-model="newOption"
					class="p-mb-3"
				/>
				<br />
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
		value: Array,
		contributors: Array,
		author: String
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
			newOption: null,
			authOpt: []
		};
	},
	computed: {
		selectOptions: function() {
			// Find filter out any options that are blank
			const options = this.options ? this.options.filter(el => el.label) : [];
			// Find the union of value and options to account for other options which are user defined
			//this.optBuild();
			this.optBuild();
			if (this.authOpt) {
				let da = this.arrayUnion(this.authOpt, options, this.areLabelsSame);
				return da;
			} else {
				return options;
			}
		}
	},
	mounted() {
		this.initialize();
	},
	methods: {
		initialize() {
			if (this.value.length > 0) {
				this.value.forEach(el => {
					if (!this.contributors.includes(el.author)) {
						//console.log("element:" +JSON.stringify(el.author) +"contributors:" +this.contributors);
						//let index = this.value.indexOf(el);
						this.value.splice(this.value.indexOf(el), 1);
					}
				});
			}
		},
		optBuild() {
			console.log("initialized:" + JSON.stringify(this.value));
			let ifContains = false;
			if (this.value.length > 0) {
				this.value.forEach(el => {
					if (el.author == this.author) {
						ifContains = true;
						if (el.selectedOpt != []) {
							this.authOpt = el.selectedOpt;
						}
					}
				});
			}
			if (ifContains == false && this.author != "") {
				this.value.push({
					author: this.author,
					selectedOpt: this.authOpt
				});
			}
		},
		onChangeValue(event) {
			if (this.value.length > 0) {
				this.value.forEach(el => {
					if (el.author == this.author) {
						el.selectedOpt = event;
					}
				});
			} else {
				console.log("fatal error: should be built already");
			}
			this.$emit("input", this.value);
		},
		openModal() {
			this.displayModal = true;
		},
		closeModal() {
			// Update new value
			if (this.newOption) {
				this.authOpt.push({ label: this.newOption });
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
	/* background: #5a83ae !important; */
}

.p-highlight {
	background: #5a83ae !important;
	border: 1px solid #576da0 !important;
}

#multihighlight .p-highlight {
	font-weight: 800;
	color: white !important;
	font-family: sans-serif;
	background: #83bfed !important;
	/* background: #9abfe6 #83bfed !important; */
	border: 1px dashed #8694b3 !important;
	border-radius: 16px !important;
}

.btsyle {
	margin: 10px;
	/* width: 100px; */
	background-color: #c2fbd7;
	border-radius: 20px;
	/* box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px; */
	color: rgb(24, 112, 24);
	cursor: pointer;
	display: inline-block;
	font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
	padding: 7px 20px;
	text-align: center;
	text-decoration: none;
	/* transition: all 250ms; */
	border: 0;
	font-size: 16px;
}
</style>
