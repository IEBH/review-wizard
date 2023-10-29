<template>
	<div>
		<h1>Search Strings</h1>

		<InputSelectMulti
			question="Which databases did you search for your systematic review?"
			:options="databaseOptions"
			:value="search.databases"
			@input="updateField('databases', $event)"
		/>

		<InputDate
			question="What date did you run your search on?"
			:value="search.dateOfSearch ? new Date(search.dateOfSearch) : null"
			@input="updateField('dateOfSearch', $event)"
		/>

		<InputDate
			question="Did you have a date you ran the search back to, or did you run the search from the inception of the database? (leave blank if from inception)"
			:value="
				search.dateSearchedUntil ? new Date(search.dateSearchedUntil) : null
			"
			@input="updateField('dateSearchedUntil', $event)"
		/>

		<div v-for="(database, index) of search.databases" :key="database.label">
			<InputTextMultiSyntax
				:question="
					`Database ${index + 1} (e.g. ${
						database.label
					}) copy and paste your full search string.`
				"
				:value="database.string"
				@input="updateDatabaseString(index, $event)"
				:placeholder="placeholder2"
			/>
		</div>

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

		<div v-for="(registry, index) of search.registries" :key="registry.label">
			<InputTextMultiSyntax
				:question="
					`Registry ${index + 1} (e.g. ${
						registry.label
					}) copy and paste your full search string.`
				"
				:value="registry.string"
				@input="updateRegisteryString(index, $event)"
				:placeholder="placeholder1"
			/>
		</div>

		<PreviewOutput :component="outputComponent" :data="search" />
	</div>
</template>

<script>
//Search Strings for Bibliographic Databases
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputDate from "@/components/InputDate.vue";
import InputTextMultiSyntax from "@/components/InputTextMultiSyntax.vue";
//Search Strings for Trial Registries

import OutputSearchStrings from "./OutputSearchStrings.vue";
//import OutputSearchStringsAppendix from "./OutputSearchStringsAppendix.vue";
//import OutputSearchRegistries from "./OutputSearchRegistries.vue";
//import OutputSearchRegistriesAppendix from "./OutputSearchRegistriesAppendix.vue";
//import OutputSearchDatabases from "./OutputSearchDatabases.vue";
//import OutputSearchDatabasesAppendix from "./OutputSearchDatabasesAppendix.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearchStrings",
	mixins: [deepstreamMixin("search")],
	components: {
		InputSelectMulti,
		InputDate,
		InputTextMultiSyntax,
		PreviewOutput
	},
	methods: {
		//Search Strings for Bibliographic Databases
		updateDatabaseString(index, value) {
			var newDatabase = this.search.databases;
			newDatabase[index].string = value;
			this.updateField("databases", newDatabase);
		},
		//Search Strings for Trial Registries
		updateRegisteryString(index, value) {
			var newregistry = this.search.registries;
			newregistry[index].string = value;
			this.updateField("registries", newregistry);
		}
	},
	data() {
		return {
			//Search Strings for Bibliographic Databases
			databaseOptions: [
				{ label: "PubMed", string: "" },
				{ label: "MEDLINE via Ovid", string: "" },
				{ label: "MEDLINE via Ebsco", string: "" },
				{ label: "The Cochrane Library for Cochrane Reviews", string: "" },
				// eslint-disable-next-line prettier/prettier
				{
					label: "The Cochrane Library for clinical trials in CENTRAL",
					string: ""
				},
				{ label: "Embase via Elsevier", string: "" },
				{ label: "Embase via Ovid", string: "" },
				{ label: "CINAHL via Ebsco", string: "" },
				{ label: "PsycINFO via Ovid", string: "" },
				{ label: "PsycINFO via APA", string: "" },
				{ label: "Web of Science", string: "" },
				{ label: "Scopus", string: "" },
				{ label: "LILACs", string: "" }
			],
			//Search Strings for Trial Registries
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
			outputComponent: OutputSearchStrings,
			//outputComponentAppendix: OutputSearchStringsAppendix,
			placeholder1: "e.g. Acne AND Phototherapy OR Acne AND Light",
			placeholder2: `e.g.("Acne Vulgaris"[Mesh] OR Acne[tiab] OR Blackheads[tiab] OR Whiteheads[tiab] OR Pimples[tiab]) AND ("Phototherapy"[Mesh] OR "Blue light"[tiab] OR Phototherapy[tiab] OR Phototherapies[tiab] OR "Photoradiation therapy"[tiab] OR "Photoradiation Therapies"[tiab] OR "Light Therapy"[tiab] OR "Light Therapies"[tiab]) AND (Randomized controlled trial[pt] OR controlled clinical trial[pt] OR randomized[tiab] OR randomised[tiab] OR placebo[tiab] OR "drug therapy"[sh] OR randomly[tiab] OR trial[tiab] OR groups[tiab]) NOT (Animals[Mesh] not (Animals[Mesh] and Humans[Mesh]))`
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
