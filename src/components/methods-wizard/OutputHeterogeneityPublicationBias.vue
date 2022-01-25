<template>
	<div>
		<p>
			<span
				v-html="
					selectRandom([
						'We used the '
							.concat(getHeterogeneityMeasurement())
							.concat(' to measure heterogeneity among the included trials.'),
						'Heterogeneity was assessed using the '
							.concat(getHeterogeneityMeasurement())
							.concat('.')
					])
				"
			>
			</span>
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
import OutputMixin from "../../mixins/OutputMixin.js";
export default {
	name: "OutputHeterogeneityPublicationBias",
	mixins: [OutputMixin],
	props: {
		data: Object
	},
	methods: {
		getHeterogeneityMeasurement() {
			if (this.data.heterogeneityMeasurement == "Other") {
				return this.data.heterogeneityMeasurementOther
					? this.data.heterogeneityMeasurementOther
					: "BLANK";
			} else if (this.data.heterogeneityMeasurement == "I squared statistic") {
				return "I<sup>2</sup> statistic";
			} else if (this.data.heterogeneityMeasurement == "H squared statistic") {
				return "H<sup>2</sup> statistic";
			} else if (this.data.heterogeneityMeasurement == "R squared statistic") {
				return "R<sup>2</sup> statistic";
			} else if (
				this.data.heterogeneityMeasurement == "Tau squared statistic"
			) {
				return "&tau;<sup>2</sup> statistic";
			} else if (this.data.heterogeneityMeasurement == "HM2 statistic") {
				return "HM<sub>2</sub> statistic";
			} else if (this.data.heterogeneityMeasurement) {
				return this.data.heterogeneityMeasurement;
			} else {
				return "BLANK";
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
