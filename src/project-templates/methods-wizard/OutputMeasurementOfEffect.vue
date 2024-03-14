<template>
	<div>
		<p>
			{{
				selectRandom([
					""
						.concat(joinArrayWithAnd(formatSelectMulti($tera.state.toolUsed)))
						.concat(" was used to calculate the treatment effect."),
					"Overall intervention effect was calculated using "
						.concat(joinArrayWithAnd(formatSelectMulti($tera.state.toolUsed)))
						.concat("."),
					"Treatment/intervention effect was measured by "
						.concat(joinArrayWithAnd(formatSelectMulti($tera.state.toolUsed)))
						.concat("."),
					"Treatment/intervention effect was measured in "
						.concat(joinArrayWithAnd(formatSelectMulti($tera.state.toolUsed)))
						.concat(".")
				])
			}}
		</p>
		<p>
			{{
				selectRandom([
					"We used "
						.concat(
							$tera.state.dichotomousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti($tera.state.dichotomousOutcomes)
								  ).toLowerCase()
								: "BLANK"
						)
						.concat(" for dichotomous outcomes."),
					"For dichotomous outcomes, treatment/intervention effect was calculated using "
						.concat(
							$tera.state.dichotomousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti($tera.state.dichotomousOutcomes)
								  ).toLowerCase()
								: "BLANK"
						)
						.concat("."),
					"Effect of the intervention on dichotomous outcomes was expressed as "
						.concat(
							$tera.state.dichotomousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti($tera.state.dichotomousOutcomes)
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
							$tera.state.continuousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti($tera.state.continuousOutcomes)
								  ).toLowerCase()
								: "BLANK"
						)
						.concat(" for continuous outcomes."),
					"For continuous outcomes, treatment/intervention effect was calculated using "
						.concat(
							$tera.state.continuousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti($tera.state.continuousOutcomes)
								  ).toLowerCase()
								: "BLANK"
						)
						.concat("."),
					"Effect of the intervention on continuous outcomes was expressed as "
						.concat(
							$tera.state.continuousOutcomes
								? joinArrayWithAnd(
										formatSelectMulti($tera.state.continuousOutcomes)
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
				$tera.state.otherOutcomes
					? joinArrayWithAnd(
							formatSelectMulti($tera.state.otherOutcomes)
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
							$tera.state.metaAnalysisThreshold
								? $tera.state.metaAnalysisThreshold
								: "BLANK"
						)
						.concat(
							" studies or comparisons reported the same outcome. We used a "
						)
						.concat(
							$tera.state.metaAnalysisModelUsed
								? $tera.state.metaAnalysisModelUsed.toLowerCase()
								: "BLANK"
						)
						.concat(" model."),
					"We planned to do meta-analysis using a "
						.concat(
							$tera.state.metaAnalysisModelUsed
								? $tera.state.metaAnalysisModelUsed.toLowerCase()
								: "BLANK"
						)
						.concat(" model if there were ")
						.concat(
							$tera.state.metaAnalysisThreshold
								? $tera.state.metaAnalysisThreshold
								: "BLANK"
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
		//data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
