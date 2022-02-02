<template>
	<div>
		<h1>Search Strings for Bibliographic Databases</h1>

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

		<template v-for="(database, index) of search.databases">
			<InputTextMultiSyntax
				:key="index"
				:question="
					`Database ${index + 1} (e.g. ${
						database.label
					}) copy and paste your full search string.`
				"
				:value="database.string"
				@input="updateDatabaseString(index, $event)"
				:placeholder="placeholder"
			/>
		</template>

		<PreviewOutput :component="outputComponent" :data="search" />
		<PreviewOutput :component="outputComponentAppendix" :data="search" />
	</div>
</template>

<script>
import OutputSearchDatabases from "./OutputSearchDatabases.vue";
import OutputSearchDatabasesAppendix from "./OutputSearchDatabasesAppendix.vue";
import PreviewOutput from "../PreviewOutput.vue";
import InputTextMultiSyntax from "../InputTextMultiSyntax";

import deepstreamMixin from "../../mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearchDatabases",
	mixins: [deepstreamMixin("search")],
	components: {
		InputTextMultiSyntax,
		PreviewOutput
	},
	methods: {
		updateDatabaseString(index, value) {
			var newDatabase = this.search.databases;
			newDatabase[index].string = value;
			this.updateField("databases", newDatabase);
		}
	},
	data() {
		return {
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
			outputComponent: OutputSearchDatabases,
			outputComponentAppendix: OutputSearchDatabasesAppendix,
			placeholder: `e.g.("Acne Vulgaris"[Mesh] OR Acne[tiab] OR Blackheads[tiab] OR Whiteheads[tiab] OR Pimples[tiab]) AND ("Phototherapy"[Mesh] OR "Blue light"[tiab] OR Phototherapy[tiab] OR Phototherapies[tiab] OR "Photoradiation therapy"[tiab] OR "Photoradiation Therapies"[tiab] OR "Light Therapy"[tiab] OR "Light Therapies"[tiab]) AND (Randomized controlled trial[pt] OR controlled clinical trial[pt] OR randomized[tiab] OR randomised[tiab] OR placebo[tiab] OR "drug therapy"[sh] OR randomly[tiab] OR trial[tiab] OR groups[tiab]) NOT (Animals[Mesh] not (Animals[Mesh] and Humans[Mesh]))`
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
