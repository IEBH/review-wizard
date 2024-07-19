<template>
	<div>
		<h1>Search Strings</h1>

		<InputSelectMulti
			question="Which databases did you search for your systematic review?"
			:options="engineOptions"
			v-model="$tera.state.databases"
		/>

		<!--
			:value="
				$tera.state.dateOfSearch 
					? new Date($tera.state.dateOfSearch)
					: null
			"
		-->
		<InputDate
			question="What date did you run your search on?"
			v-model="$tera.state.dateOfSearch"
		/>

		<!--
			:value="
				$tera.state.dateSearchedUntil
					? new Date($tera.state.dateSearchedUntil)
					: null
			"
		-->
		<InputDate
			question="Did you have a date you ran the search back to, or did you run the search from the inception of the database? (leave blank if from inception)"
			v-model="$tera.state.dateSearchedUntil"
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
			v-model="$tera.state.registries"
		/>

		<!--
			:value="
				$tera.state.registryDateOfSearch
					? new Date($tera.state.registryDateOfSearch)
					: null
			"
		-->
		<InputDate
			question="What date did you run your search on?"
			v-model="$tera.state.registryDateOfSearch"
		/>

		<!--
			:value="
				$tera.state.registryDateSearchedUntil
					? new Date($tera.state.registryDateSearchedUntil)
					: null
			"
		-->
		<InputDate
			question="Did you have a date you ran the search back to, or did you run the search from the inception of the database? (leave blank if from inception)"
			v-model="$tera.state.registryDateSearchedUntil"
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
import InputDate from "@/components/InputDate";
import InputTextMultiSyntax from "@/components/InputTextMultiSyntax";
import InputTabsMulti from "@/components/InputTabsMulti";
//Search Strings for Trial Registries

import OutputSearchStrings from "./OutputSearchStrings.vue";

export default {
	name: "ViewMethodSearchStrings",

	components: {
		InputSelectMulti,
		InputTextMultiSyntax,
		InputTabsMulti,
		PreviewOutput,
		InputDate
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
				{ label: "Clinical Trials Registry - India", string: "" },
				{ label: "Cochrane CENTRAL", string: "" }
			],
			defalutEngines:[
				{
				key: "PubMed abbreviation",
				label: "PubMed",
                muanualVersion: "", //manual SearchString version
				polyglotVersion: ""
			},
			{
				key: "Ovid MEDLINE",
				label: "Ovid MEDLINE",
                muanualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Cochrane Library",
				label: "Cochrane Library",
                muanualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Embase (Elsevier)",
				label: "Embase (Elsevier)",
                muanualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Ovid MEDLINE",
				label: "Embase (Ovid)",
                muanualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "CINAHL (Ebsco)",
				label: "CINAHL (Ebsco)",
                muanualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Web of Science",
				label: "Web of Science",
                muanualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "WoS Advanced",
				label: "WoS Advanced",
                muanualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Scopus (basic search)",
				label: "Scopus (basic search)",
                muanualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "Scopus (advanced search)",
				label: "Scopus (advanced search)",
                muanualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "PsycInfo (Ovid)",
				label: "PsycInfo (Ovid)",
                muanualVersion: "",
				polyglotVersion: ""
			},
			{
				key: "PsycInfo (Ebsco)",
				label: "PsycInfo (Ebsco)",
                muanualVersion: "",
				polyglotVersion: ""
			}
			],
			outputComponent: OutputSearchStrings,
			//outputComponentAppendix: OutputSearchStringsAppendix,
			placeholder1: "e.g. Acne AND Phototherapy OR Acne AND Light",
			placeholder2: `e.g.("Acne Vulgaris"[Mesh] OR Acne[tiab] OR Blackheads[tiab] OR Whiteheads[tiab] OR Pimples[tiab]) AND ("Phototherapy"[Mesh] OR "Blue light"[tiab] OR Phototherapy[tiab] OR Phototherapies[tiab] OR "Photoradiation therapy"[tiab] OR "Photoradiation Therapies"[tiab] OR "Light Therapy"[tiab] OR "Light Therapies"[tiab]) AND (Randomized controlled trial[pt] OR controlled clinical trial[pt] OR randomized[tiab] OR randomised[tiab] OR placebo[tiab] OR "drug therapy"[sh] OR randomly[tiab] OR trial[tiab] OR groups[tiab]) NOT (Animals[Mesh] not (Animals[Mesh] and Humans[Mesh]))`
		};
	},
	computed:{
		engineOptions(){
			if(this.$tera.state.polyglot==undefined){
				return this.defalutEngines;
			}
			return this.$tera.state.polyglot.engines;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
