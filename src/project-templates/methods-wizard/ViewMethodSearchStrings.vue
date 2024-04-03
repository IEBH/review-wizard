<template>
	<div>
		<h1>Search Strings</h1>

		<InputSelectMulti
			question="Which databases did you search for your systematic review?"
			:options="databaseOptions"
			:value="$tera.state.databases"
		/>

		<InputDateTable
			question="What date did you run your search on?"
			:value="$tera.state.dateOfSearch"
		/>

		<!--
			:value="
				$tera.state.dateSearchedUntil
					? new Date($tera.state.dateSearchedUntil)
					: null
			"
		-->
		<InputDateTable
			question="Did you have a date you ran the search back to, or did you run the search from the inception of the database? (leave blank if from inception)"
			:value="$tera.state.dateSearchedUntil"
		/>

		<div
			v-for="(database, index) of $tera.state.databases"
			:key="database.label"
		>
			<InputTabsMulti
				:question="`Database ${index + 1} (e.g. ${database.label})`"
				:value="database"
				:placeholder="placeholder2"
			/>
		</div>

		<InputSelectMulti
			question="Which registries did you search?"
			:options="registryOptions"
			:value="$tera.state.registries"
		/>

		<!--
			:value="
				$tera.state.registryDateOfSearch
					? new Date($tera.state.registryDateOfSearch)
					: null
			"
		-->
		<InputDateTable
			question="What date did you run your search on?"
			:value="$tera.state.registryDateOfSearch"
		/>

		<!--
			:value="
				$tera.state.registryDateSearchedUntil
					? new Date($tera.state.registryDateSearchedUntil)
					: null
			"
		-->
		<InputDateTable
			question="Did you have a date you ran the search back to, or did you run the search from the inception of the database? (leave blank if from inception)"
			:value="$tera.state.registryDateSearchedUntil"
		/>

		<div
			v-for="(registry, index) of $tera.state.registries"
			:key="registry.label"
		>
			<InputTextMultiSyntax
				:question="
					`Registry ${index + 1} (e.g. ${
						registry.label
					}) copy and paste your full search string.`
				"
				:value="registry.string"
				:placeholder="placeholder1"
			/>
		</div>

		<PreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
//Search Strings for Bibliographic Databases
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputDateTable from "@/components/InputDateTable.vue";
//import InputDate from "@/components/InputDate";
import InputTextMultiSyntax from "@/components/InputTextMultiSyntax";
import InputTabsMulti from "@/components/InputTabsMulti";
//Search Strings for Trial Registries

import OutputSearchStrings from "./OutputSearchStrings.vue";
//import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearchStrings",

	components: {
		InputSelectMulti,
		InputDateTable,
		InputTextMultiSyntax,
		InputTabsMulti,
		PreviewOutput
		//InputDate
	},
	/*methods: {
		//Search Strings for Bibliographic Databases
		updateDatabaseString(index, value) {
			var newDatabase = this.search.databases;
			newDatabase[index] = value;
			this.updateField("databases", newDatabase);
		},
		//Search Strings for Trial Registries
		updateRegisteryString(index, value) {
			var newregistry = this.search.registries;
			newregistry[index].string = value;
			this.updateField("registries", newregistry);
		}
	},*/
	data() {
		return {
			//Search Strings for Bibliographic Databases
			databaseOptions: [
				{
					label: "PubMed",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "MEDLINE via Ovid",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "MEDLINE via Ebsco",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "The Cochrane Library for Cochrane Reviews",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				// eslint-disable-next-line prettier/prettier
				{
					label: "The Cochrane Library for clinical trials in CENTRAL",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "Embase via Elsevier",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "Embase via Ovid",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "CINAHL via Ebsco",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "PsycINFO via Ovid",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "PsycINFO via APA",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "Web of Science",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "Scopus",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				},
				{
					label: "LILACs",
					method: "polyglotVersion",
					muanualVersion: "",
					polyglotVersion: ""
				}
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
