<template>
	<div>
		<p>
			<span v-if="data.components.length">
				The following components were included in the search string:
				{{ joinArrayWithAnd(formatSelectMulti(data.components)).toLowerCase() }}
			</span>
			<span v-if="data.specialist.length">
				This search string was constructed by [a/an]
				{{
					joinArrayWithAnd(formatSelectMulti(data.specialist)).toLowerCase()
				}}.
			</span>
			<span v-if="data.helper.length">
				[A/An]
				{{ joinArrayWithAnd(formatSelectMulti(data.helper)).toLowerCase() }}
				helped in the design of the search.
			</span>
			<span v-if="data.peerReviewer.length">
				The search strategy was peer-reviewed by [a/an]
				{{
					joinArrayWithAnd(formatSelectMulti(data.peerReviewer)).toLowerCase()
				}}
				according to PRESS guidelines.
			</span>
		</p>
	</div>
</template>

<script>
import OutputMixin from "../mixins/OutputMixin.js";
export default {
	name: "OutputSearch",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
