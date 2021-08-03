<template>
	<div>
		<p>
			{{
				selectRandom([
					""
						.concat(data.numberOfAuthors ? data.numberOfAuthors : "BLANK ")
						.concat(" review authors")
						.concat(data.isIndependent ? " independently " : " ")
						.concat("assessed the risk of bias for each study using the ")
						.concat(joinArrayWithAnd(formatSelectMulti(data.toolUsed)))
						.concat("."),
					"Risk of bias was assessed using the "
						.concat(joinArrayWithAnd(formatSelectMulti(data.toolUsed)))
						.concat(". ")
						.concat(data.numberOfAuthors ? data.numberOfAuthors : "BLANK ")
						.concat(" authors")
						.concat(data.isIndependent ? " independently " : " ")
						.concat("assessed risk of bias for each study.")
				])
			}}
		</p>
	</div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
	name: "OutputAssessmentOfTheRiskOfBias",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
