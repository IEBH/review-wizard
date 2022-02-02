<template>
	<div>
		<h1>Dealing with Missing Data</h1>

		<InputSelectYesNo
			question="We contacted investigators or study sponsors to provide missing data"
			:value="missingData.isContactedInvestigators"
			@input="updateField('isContactedInvestigators', $event)"
			:options="numberOptions"
		/>

		<PreviewOutput :component="outputComponent" :data="missingData" />
	</div>
</template>

<script>
import OutputDealingWithMissingData from "./OutputDealingWithMissingData.vue";
import PreviewOutput from "../PreviewOutput.vue";

import deepstreamMixin from "../../mixins/DeepstreamMixin";

export default {
	name: "ViewMethodDealingWithMissingData",
	mixins: [deepstreamMixin("missingData")],
	components: {
		PreviewOutput
	},
	data() {
		return {
			numberOptions: ["1", "2", "3", "4", "5", "6"],
			outputComponent: OutputDealingWithMissingData
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
