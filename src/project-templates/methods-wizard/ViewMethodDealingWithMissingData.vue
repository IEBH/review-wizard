<template>
	<div>
		<h1>Dealing with Missing Data</h1>
		<!--:options="numberOptions"-->
		<InputSelectYesNo
			question="We contacted investigators or study sponsors to provide missing data"
			v-model="isContactedInvestigators"
		/>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputDealingWithMissingData from "./OutputDealingWithMissingData.vue";

export default {
	name: "ViewMethodDealingWithMissingData",
	data() {
		return {
			//numberOptions: ["1", "2", "3", "4", "5", "6"],
			outputComponent: OutputDealingWithMissingData
		};
	},
	computed: {
		isContactedInvestigators() {
			if (this.$tera.state.isContactedInvestigators == undefined) {
				this.$tera.setProjectStateDefaults("isContactedInvestigators", false);
			}
			return this.$tera.state.isContactedInvestigators;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
