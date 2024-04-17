<template>
	<div>
		<p v-if="$tera.state.isContactedInvestigators">
			{{
				selectRandom([
					"We contacted investigators or study sponsors to provide missing data.",
					"Where data were missing, study investigators or sponsors were contacted.",
					"We contacted the study authors for missing data.",
					"We contacted the study authors for missing or additional data.",
					"The investigators and/or study sponsors were contacted to supply missing data."
				])
			}}
		</p>
		<p v-else>
			We did not contact investigators or study sponsors to provide missing
			data.
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputDealingWithMissingData",
	mixins: [OutputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
