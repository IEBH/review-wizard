<template>
	<div>
		<p>
			<span v-if="$tera.state.strategies.length">
				{{
					selectRandom([
						"Strategies implemented to achieve adequate participant enrolment were:",
						"The following strategies were implemented to achieve adequate participant enrolment:",
						"Various strategies were employed to ensure sufficient participant enrollment, which were:",
						"To secure adequate participant enrollment, multiple strategies were implemented: "
					])
				}}
				{{
					joinArrayWithAnd($tera.state.strategies)
						? joinArrayWithAnd(formatSelectMulti($tera.state.strategies)).toLowerCase()
						: "BLANK"
				}}.
			</span>
			<span v-else> {{ $tera.state.noRecruitment }}. </span>
			
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputAuditRecruitment",
	mixins: [OutputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
