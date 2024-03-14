<template>
	<div>
		<h1>Dealing with Missing Data</h1>

		<InputSelectYesNo
			question="We contacted investigators or study sponsors to provide missing data"
			:value="$tera.state.isContactedInvestigators"
			:options="numberOptions"
		/>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputDealingWithMissingData from "./OutputDealingWithMissingData.vue";

//import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodDealingWithMissingData",

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
