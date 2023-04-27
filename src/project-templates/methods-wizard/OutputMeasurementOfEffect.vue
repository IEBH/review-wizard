<template>
	<div>
		<p>
			{{
				selectRandom([
					""
						.concat(joinArrayWithAnd(formatSelectMulti(data.toolUsed)))
						.concat(" was used to calculate the treatment effect."),
					"Overall intervention effect was calculated using "
						.concat(joinArrayWithAnd(formatSelectMulti(data.toolUsed)))
						.concat("."),
					"Treatment/intervention effect was measured by "
						.concat(joinArrayWithAnd(formatSelectMulti(data.toolUsed)))
						.concat("."),
					"Treatment/intervention effect was measured in "
						.concat(joinArrayWithAnd(formatSelectMulti(data.toolUsed)))
						.concat(".")
				])
			}}
		</p>
		<p>
			{{
				selectRandom([
					"We used "
						.concat(
							data.dichotomousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti(data.dichotomousOutcomes)
								  ).toLowerCase()
								: "BLANK"
						)
						.concat(" for dichotomous outcomes."),
					"For dichotomous outcomes, treatment/intervention effect was calculated using "
						.concat(
							data.dichotomousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti(data.dichotomousOutcomes)
								  ).toLowerCase()
								: "BLANK"
						)
						.concat("."),
					"Effect of the intervention on dichotomous outcomes was expressed as "
						.concat(
							data.dichotomousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti(data.dichotomousOutcomes)
								  ).toLowerCase()
								: "BLANK"
						)
						.concat(".")
				])
			}}
		</p>
		<p>
			{{
				selectRandom([
					"We used "
						.concat(
							data.continuousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti(data.continuousOutcomes)
								  ).toLowerCase()
								: "BLANK"
						)
						.concat(" for continuous outcomes."),
					"For continuous outcomes, treatment/intervention effect was calculated using "
						.concat(
							data.continuousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti(data.continuousOutcomes)
								  ).toLowerCase()
								: "BLANK"
						)
						.concat("."),
					"Effect of the intervention on continuous outcomes was expressed as "
						.concat(
							data.continuousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti(data.continuousOutcomes)
								  ).toLowerCase()
								: "BLANK"
						)
						.concat(".")
				])
			}}
		</p>
		<p>
			We used
			{{
				data.otherOutcomes
					? joinArrayWithAnd(
							formatSelectMulti(data.otherOutcomes)
					  ).toLowerCase()
					: "BLANK"
			}}
			to calculate treatement effect for other outcomes
		</p>
		<p>
			{{
				selectRandom([
					"We undertook meta-analyses when "
						.concat(
							data.metaAnalysisThreshold ? data.metaAnalysisThreshold : "BLANK"
						)
						.concat(
							" studies or comparisons reported the same outcome. We used a "
						)
						.concat(
							data.metaAnalysisModelUsed
								? data.metaAnalysisModelUsed.toLowerCase()
								: "BLANK"
						)
						.concat(" model."),
					"We planned to do meta-analysis using a "
						.concat(
							data.metaAnalysisModelUsed
								? data.metaAnalysisModelUsed.toLowerCase()
								: "BLANK"
						)
						.concat(" model if there were ")
						.concat(
							data.metaAnalysisThreshold ? data.metaAnalysisThreshold : "BLANK"
						)
						.concat(" or more studies with the same outcome.")
				])
			}}
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputMeasurementOfEffect",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
