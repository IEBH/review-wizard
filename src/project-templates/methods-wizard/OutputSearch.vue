<template>
	<div>
		<p>
			<span v-if="data.components ? data.components.length : data.components">
				{{
					selectRandom([
						"The following components were included in the search string ",
						"We included the following in the search string "
					])
				}}
				
				{{ joinArrayWithAnd(formatSelectMulti(data.components)).toLowerCase() }}
			</span>
			<span v-if="data.specialist ? data.specialist.length : data.specialist">
				{{
					selectRandom([
						"This search string was constructed by [a/an] ",
						"The search was designed by [a/an] "
					])
				}}
				{{
					joinArrayWithAnd(formatSelectMulti(data.specialist)).toLowerCase()
				}}.
			</span>
			<span v-if="data.helper ? data.helper.length : data.helper">
				[A/An]
				{{ joinArrayWithAnd(formatSelectMulti(data.helper)).toLowerCase() }}
				helped in the design of the search.
			</span>
			<span
				v-if="data.peerReviewer ? data.peerReviewer.length : data.peerReviewer"
			>
				The search strategy was peer-reviewed by [a/an]
				{{
					joinArrayWithAnd(formatSelectMulti(data.peerReviewer)).toLowerCase()
				}}
				according to PRESS guidelines.
			</span>
			<span
				v-if="data.searchAutomationTools ? data.searchAutomationTools.length : data.searchAutomationTools"
			>
				The following automation tools were used to design the search.
				{{
					joinArrayWithAnd(data.searchAutomationTools.map(tool => `${tool.label} (${tool.url})`)).toLowerCase()
				}}
			</span>
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
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
