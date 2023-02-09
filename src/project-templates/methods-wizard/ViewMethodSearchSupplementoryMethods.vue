<template>
	<div>
		<h1>Supplementary Searches</h1>

		<InputSelectMulti
			question="Who conducted the supplementary searches?"
			:value="search.conductSSearchAuthors"
			@input="updateField('conductSSearchAuthors', $event)"
			:options="this.csAuthors"
		/>

		<InputSelectMulti
			question="Did you conduct any of the following methods to supplement your search results?"
			:options="supplementoryMethodsOptions"
			:value="search.supplementoryMethods"
			@input="updateField('supplementoryMethods', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="search" />
	</div>
</template>

<script>
import OutputSearchSupplementoryMethods from "./OutputSearchSupplementoryMethods.vue";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearchDatabases",
	mixins: [
		deepstreamMixin("researchplan"),
		deepstreamMixin("titlepage"),
		deepstreamMixin("search")
	],
	components: {
		InputSelectMulti,
		BasePreviewOutput
	},
	data() {
		return {
			csAuthors: [], //--conduct supplementary searches
			supplementoryMethodsOptions: [
				// eslint-disable-next-line prettier/prettier
				{
					label: "Manually checked the reference lists of the included studies"
				},
				{ label: "Performed a backwards citation analysis" },
				{ label: "Performed a forwards citation analysis" },
				{ label: "Contacted experts" },
				{ label: "Used the similar articles feature of a database" }
			],
			outputComponent: OutputSearchSupplementoryMethods
		};
	},
	mounted() {
		this.csAuthors = this.titlepage.authors.map(el => {
			return { label: el };
		});
		this.researchplan.planTable.rows.forEach(el => {
			if (el.tasks == "13. Citation search" && el.peopleInvolved != "") {
				this.csAuthors = el.peopleInvolved;
			}
		});
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
