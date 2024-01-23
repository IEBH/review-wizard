<template>
	<div>
		<h1>Contributions</h1>
		<InputConSelectMulti
			v-for="(author, index) in this.titlepage.acknowledgements"
			:key="index"
			:question="ackAuthor(author)"
			:value="contribution.conAuthors"
			:index="index"
			:author="author"
			:options="contributionOptions"
			@input="updateField('conAuthors', $event)"
		/>
		<PreviewOutput :component="outputComponent" :data="contribution" />
	</div>
</template>
<script>
import InputConSelectMulti from "@/components/InputConSelectMulti";
import deepstreamMixin from "@/mixins/DeepstreamMixin";
import PreviewOutput from "@/components/BasePreviewOutput.vue";
import OutputContributions from "./OutputContributions.vue";
export default {
	name: "ViewMethodContributions",
	mixins: [deepstreamMixin("titlepage"), deepstreamMixin("contribution")],
	components: {
		InputConSelectMulti,
		PreviewOutput
	},
	data() {
		return {
			outputComponent: OutputContributions,
			contributionOptions: [
				{ label: "Study conceptualization" },
				{ label: "Designing the study" },
				{ label: "Designing the search strategy" },
				{ label: "Assessed study eligibility" },
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
