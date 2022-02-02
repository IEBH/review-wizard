<template>
	<div>
		<h1>Search Strings for Trial Registries</h1>

		<InputSelectMulti
			question="Which registries did you search?"
			:options="registryOptions"
			:value="search.registries"
			@input="updateField('registries', $event)"
		/>

		<InputDate
			question="What date did you run your search on?"
			:value="
				search.registryDateOfSearch
					? new Date(search.registryDateOfSearch)
					: null
			"
			@input="updateField('registryDateOfSearch', $event)"
		/>

		<InputDate
			question="Did you have a date you ran the search back to, or did you run the search from the inception of the database? (leave blank if from inception)"
			:value="
				search.registryDateSearchedUntil
					? new Date(search.registryDateSearchedUntil)
					: null
			"
			@input="updateField('registryDateSearchedUntil', $event)"
		/>

		<template v-for="(registry, index) of search.registries">
			<InputTextMultiSyntax
				:key="index"
				:question="
					`Registry ${index + 1} (e.g. ${
						registry.label
					}) copy and paste your full search string.`
				"
				:value="registry.string"
				@input="updateRegisteryString(index, $event)"
				:placeholder="placeholder"
			/>
		</template>

		<BasePreviewOutput :component="outputComponent" :data="search" />
		<BasePreviewOutput :component="outputComponentAppendix" :data="search" />
	</div>
</template>

<script>
import OutputSearchRegistries from "./OutputSearchRegistries.vue";
import OutputSearchRegistriesAppendix from "./OutputSearchRegistriesAppendix.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearchRegistries",
	mixins: [deepstreamMixin("search")],
	methods: {
		updateRegisteryString(index, value) {
			var newregistry = this.search.registries;
			newregistry[index].string = value;
			this.updateField("registries", newregistry);
		}
	},
	data() {
		return {
			registryOptions: [
				// eslint-disable-next-line prettier/prettier
				{
					label:
						"World Health Organization – International Clinical Trials Registry Platform (ICTRP)",
					string: ""
				},
				{ label: "ClinicalTrials.gov", string: "" },
				{ label: "Health Canada Clinical Trial Database", string: "" },
				{ label: "EU Clinical Trials Register", string: "" },
				{ label: "German Clinical Trials Register", string: "" },
				{ label: "Netherlands Trial Register (Dutch)", string: "" },
				{ label: "Swiss National Clinical Trials Portal", string: "" },
				{ label: "ISRCTN", string: "" },
				// eslint-disable-next-line prettier/prettier
				{
					label: "Australian New Zealand Clinical Trials Registry",
					string: ""
				},
				{ label: "Chinese Clinical Trial Registry", string: "" },
				{ label: "Clinical Trials Registry – India", string: "" },
				{ label: "Cochrane CENTRAL", string: "" }
			],
			outputComponent: OutputSearchRegistries,
			outputComponentAppendix: OutputSearchRegistriesAppendix,
			placeholder: "e.g. Acne AND Phototherapy OR Acne AND Light"
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
