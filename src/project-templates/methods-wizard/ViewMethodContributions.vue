<template>
	<div>
		<h1>Contributions</h1>
		<InputConSelectMulti
			v-for="(author, index) in this.$tera.state.author"
			:key="index"
			:question="ackAuthor(author)"
			v-model="$tera.state.conAuthors"
			:contributors="$tera.state.author"
			:index="index"
			:author="author"
			:options="contributionOptions"
		/>
		<BasePreviewOutput
			:component="outputComponent"
		/>
	</div>
</template>
<script>
import InputConSelectMulti from "@/components/InputConSelectMulti";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import OutputContributions from "./OutputContributions.vue";
export default {
	name: "ViewMethodContributions",
	components: {
		InputConSelectMulti,
		BasePreviewOutput
	},
	data() {
		return {
			outputComponent: OutputContributions,
			contributionOptions: [
				{ label: "Study conceptualization" },
				{ label: "Designing the study" },
				{ label: "Designing the search strategy" },
				{ label: "Assessing study eligibility" },
				{ label: "Extracting the data" },
				{ label: "Analyzing the data" },
				{ label: "Drafting the manuscript" },
				{ label: "Revising the manuscript" }
			]
		};
	},
	methods: {
		ackAuthor(author) {
			return "What contributions of " + author + "?";
		}
	}
};
</script>
<style></style>
