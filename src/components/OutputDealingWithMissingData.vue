<template>
	<div>
		<p v-if="data.isContactedInvestigators">
			{{
				selectRandom([
					"We contacted investigators or study sponsors to provide missing data.",
					"Where data were missing, study investigators or sponsors were contacted."
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
import OutputMixin from "../mixins/OutputMixin.js";
export default {
	name: "OutputDealingWithMissingData",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
