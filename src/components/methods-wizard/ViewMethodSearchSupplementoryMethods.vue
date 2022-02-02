<template>
	<div>
		<h1>Supplementary Methods</h1>

		<InputSelectMulti
			question="Did you conduct any of the following methods to supplement your search results?"
			:options="supplementoryMethodsOptions"
			:value="search.supplementoryMethods"
			@input="updateField('supplementoryMethods', $event)"
		/>

		<PreviewOutput :component="outputComponent" :data="search" />
	</div>
</template>

<script>
import OutputSearchSupplementoryMethods from "./OutputSearchSupplementoryMethods.vue";
import PreviewOutput from "../PreviewOutput.vue";

import deepstreamMixin from "../../mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearchDatabases",
	mixins: [deepstreamMixin("search")],
	components: {
		PreviewOutput
	},
	data() {
		return {
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
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
