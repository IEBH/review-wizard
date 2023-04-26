<template>
	<div>
		<p>
			{{
				selectRandom([
					""
						.concat(`${numberOfAuthors}`)
						.concat(" review authors")
						.concat(` (${assessedRobAuthorsInitials}) `)
						.concat(data.isIndependent ? " independently " : " ")
						.concat("assessed the risk of bias for each study using the ")
						.concat(joinArrayWithAnd(formatSelectMulti(data.toolUsed)))
						.concat("."),
					"Risk of bias was assessed using the "
						.concat(joinArrayWithAnd(formatSelectMulti(data.toolUsed)))
						.concat(". ")
						.concat(`${numberOfAuthors}`)
						.concat(" authors")
						.concat(` (${assessedRobAuthorsInitials}) `)
						.concat(data.isIndependent ? " independently " : " ")
						.concat("assessed risk of bias for each study.")
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
	props: {
		data: Object
	},
	computed: {
		assessedRobAuthorsInitials: function() {
			return this.formatSelectMulti(this.data.assessedRobAuthors)
				.map(el => this.nameToInitials(el))
				.join(", ");
		},
		numberOfAuthors() {
			return this.data.assessedRobAuthors?.length;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
