<template>
	<div>
		<p>
			<span v-if="$tera.state.isMeasuredPublicationBias">
				{{
					selectRandom([
						"We assessed publication bias / small studies effect using",
						"Publication bias / small studies effect was assessed using:"
					])
				}}
				{{
					$tera.state.biasMeasurement == "Other"
						? $tera.state.biasMeasurementOther
						: $tera.state.biasMeasurement
						? $tera.state.biasMeasurement
						: "BLANK"
				}}.
			</span>
			<span v-else>
				We did not assess publication bias / small studies effect because
				{{ $tera.state.didNotMeasure ? $tera.state.didNotMeasure : "BLANK" }}.
			</span>
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputPublicationBias",
	mixins: [OutputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
