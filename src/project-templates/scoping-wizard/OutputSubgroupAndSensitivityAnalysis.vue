<template>
	<div>
		<p>
			<span v-if="$tera.state.isSubgroupAnalysis">
				{{
					selectRandom([
						"We conducted the following subgroup analyses:",
						"The following subgroup analyses were planned:",
						"Planned subgroup analyses were:",
						"We conducted subgroup analyses on the following:"
					])
				}}
				{{
					joinArrayWithAnd($tera.state.subgroupAnalysis)
						? joinArrayWithAnd($tera.state.subgroupAnalysis).toLowerCase()
						: "BLANK"
				}}.
			</span>
			<span v-else> {{ $tera.state.whyNotSubgroupAnalysis }}. </span>
			
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputSubgroupAndSensitivityAnalysis",
	mixins: [OutputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
