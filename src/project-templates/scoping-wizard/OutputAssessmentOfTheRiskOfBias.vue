<template>
	<div>
		<p v-if="$tera.state.riskOfBiasOptional">
			{{
				selectRandom([
					""
						.concat(`${numberOfAuthors}`)
						.concat(" review author/s")
						.concat(` (${assessedRobAuthorsInitials}) `)
						.concat($tera.state.isIndependent ? " independently " : " ")
						.concat("assessed the risk of bias for each study")
						.concat(".")
                        .concat(`Risk of bias was determined using the following: ${determinationOfRiskOfBias}`),
					"Risk of bias was"
						.concat($tera.state.isIndependent ? " independently " : " ")
						.concat("assessed for each study")
						.concat(` by ${numberOfAuthors}`)
						.concat(" author/s")
						.concat(` (${assessedRobAuthorsInitials}) `)
                        .concat(`. Determination of risk of bias was done using the following: ${determinationOfRiskOfBias}`)
				])
			}}
		</p>
		<p v-else> 
			{{
				selectRandom([
					"Assessment of the risk of bias/quality was not done for this review.",
					"The risk of bias/quality assessment was not conducted for this review."
				])
			}}

		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputAssessmentOfTheRiskOfBias",
	mixins: [OutputMixin],
	computed: {
		assessedRobAuthorsInitials: function() {
			return this.formatSelectMulti(this.$tera.state.assessedRobAuthors)
				.map(el => this.nameToInitials(el))
				.join(", ");
		},
		numberOfAuthors() {
			return this.$tera.state.assessedRobAuthors?.length;
		},
        determinationOfRiskOfBias: function() {
			return this.formatSelectMulti(this.$tera.state.riskOfBiasToolUsed)
				.join(", ")
				.toLowerCase();
		},
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
