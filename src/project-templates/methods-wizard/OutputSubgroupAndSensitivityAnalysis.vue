<template>
	<div>
		<p>
			<span v-if="data.isSubgroupAnalysis">
				{{
					selectRandom([
						"We conducted the following subgroup analyses:",
						"The following subgroup analyses were planned:",
						"Planned subgroup analyses were:"
					])
				}}
				{{
					joinArrayWithAnd(data.subgroupAnalysis)
						? joinArrayWithAnd(data.subgroupAnalysis).toLowerCase()
						: "BLANK"
				}}.
			</span>
			<span v-else> {{ data.whyNotSubgroupAnalysis }}. </span>
			<span v-if="data.isSensitivityAnalysis">
				{{
					selectRandom([
						"We conducted the following sensitivity analyses:",
						"The following sensitivity analyses were planned:",
						"Planned sensitivity analyses were:"
					])
				}}
				{{
					joinArrayWithAnd(data.sensitivityAnalysis)
						? joinArrayWithAnd(data.sensitivityAnalysis).toLowerCase()
						: "BLANK"
				}}.
			</span>
			<span v-else> {{ data.whyNotSensitivityAnalysis }}. </span>
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputSubgroupAndSensitivityAnalysis",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
