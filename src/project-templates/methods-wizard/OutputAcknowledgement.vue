<template>
	<div>
		<p v-if="data">
			<!-- We would like to thank,.toLowerCase() -->
			{{ selectRandom(["We would like to thank,", "We wish to express our gratitude to ", "Our sincere thanks go to ",
				"We appreciate the efforts of ", "We extend our thanks to ", " We would like to convey our gratitude towards ",
				"Heartfelt thanks to "]) }}
			<span v-if="data.designhelp && data.designhelp.length">
				{{ joinArrayWithAnd(formatSelectMulti(data.designhelp)) }}
				for help designing the search strategy
				
			</span>
			<span v-if="data.statistical && data.statistical.length">
				,
			</span>
			<span v-if="data.statistical && data.statistical.length">
				{{ joinArrayWithAnd(formatSelectMulti(data.statistical)) }}
				for help with the statistical analysis
			</span>
			<span v-if="data.manuscript && data.manuscript.length">
				,
			</span>
			<span v-if="data.manuscript && data.manuscript.length">
				and {{ joinArrayWithAnd(formatSelectMulti(data.manuscript)) }}
				for providing feedback on the draft manuscript
			</span>
			<span>
				.
			</span>
		</p>


	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputAcknowledgement",
	mixins: [OutputMixin],
	props: {
		data: Object
	},
	computed: {
		designSearchStrategyAuthorsInitials: function () {
			return this.formatSelectMulti(this.data.designSearchStrategyAuthors)
				.map(el => this.nameToInitials(el))
				.join(", ");
		},
		deduplicateResultsAuthorsInitials: function () {
			return this.formatSelectMulti(this.data.deduplicateResultsAuthors)
				.map(el => this.nameToInitials(el))
				.join(", ");
		},
		conductSSearchAuthorsInitials: function () {
			return this.formatSelectMulti(this.data.conductSSearchAuthors)
				.map(el => this.nameToInitials(el))
				.join(", ");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
