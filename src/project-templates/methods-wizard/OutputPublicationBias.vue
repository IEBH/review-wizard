<template>
	<div>
		<p>
			<span v-if="data.isMeasuredPublicationBias">
				{{
					selectRandom([
						"We assessed publication bias / small studies effect using",
						"Publication bias / small studies effect was assessed using:"
					])
				}}
				{{
					data.biasMeasurement == "Other"
						? data.biasMeasurementOther
						: data.biasMeasurement
						? data.biasMeasurement
						: "BLANK"
				}}.
			</span>
			<span v-else>
				We did not assess publication bias / small studies effect because
				{{ data.didNotMeasure ? data.didNotMeasure : "BLANK" }}.
			</span>
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputPublicationBias",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
