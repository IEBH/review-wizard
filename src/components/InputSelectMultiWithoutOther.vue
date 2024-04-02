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
			v-model="value"
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
	</div>
</template>

<script>
import Listbox from "primevue/listbox";

export default {
	name: "InputSelectMultiWithoutOthers",
	props: {
		question: String,
		options: Array,
		value: Array
	},
	components: {
		Listbox
	},
	data() {
		return {
			// displayModal: false,
			// newOption: null
		};
	},
	computed: {
		selectOptions: function() {
			// Find filter out any options that are blank
			const options = this.options ? this.options.filter(el => el.label) : [];
			// Find the union of value and options to account for other options which are user defined
			if (this.value) {
				return this.arrayUnion(this.value, options, this.areLabelsSame);
			} else return options;
		}
	},
	methods: {
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

	&:hover {
		/* box-shadow: 0 0 10px 0 #28a745 inset, 0 0 10px 4px #28a745; */
		background-color: #28a745 !important;
		border: 2px solid #4caf50 !important;
	}
}
</style>
