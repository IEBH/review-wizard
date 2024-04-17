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
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputHeterogeneity",
	mixins: [OutputMixin],
	methods: {
		getHeterogeneityMeasurement() {
			if (this.$tera.state.heterogeneityMeasurement == "Other") {
				return this.$tera.state.heterogeneityMeasurementOther
					? this.$tera.state.heterogeneityMeasurementOther
					: "BLANK";
			} else if (
				this.$tera.state.heterogeneityMeasurement == "I squared statistic"
			) {
				return "I<sup>2</sup> statistic";
			} else if (
				this.$tera.state.heterogeneityMeasurement == "H squared statistic"
			) {
				return "H<sup>2</sup> statistic";
			} else if (
				this.$tera.state.heterogeneityMeasurement == "R squared statistic"
			) {
				return "R<sup>2</sup> statistic";
			} else if (
				this.$tera.state.heterogeneityMeasurement == "Tau squared statistic"
			) {
				return "&tau;<sup>2</sup> statistic";
			} else if (this.$tera.state.heterogeneityMeasurement == "HM2 statistic") {
				return "HM<sub>2</sub> statistic";
			} else if (this.$tera.state.heterogeneityMeasurement) {
				return this.$tera.state.heterogeneityMeasurement;
			} else {
				return "BLANK";
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
