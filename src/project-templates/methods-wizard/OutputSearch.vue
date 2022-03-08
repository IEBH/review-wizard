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
				{{
					selectRandom([
						"The search was designed with the help of [a/an] ",
						"Help to design the search was obtained from [a/an] "
					])
				}}
				{{ joinArrayWithAnd(formatSelectMulti(data.helper)).toLowerCase() }}
			</span>
			<span
				v-if="data.peerReviewer ? data.peerReviewer.length : data.peerReviewer"
			>
				{{
					selectRandom([
						"The search was peer-reviewed by [a/an] ",
						"A peer-review of the search was conducted by [a/an] "
					])
				}}
				{{
					joinArrayWithAnd(formatSelectMulti(data.peerReviewer)).toLowerCase()
				}}
			</span>
			<span
				v-if="data.searchAutomationTools ? data.searchAutomationTools.length : data.searchAutomationTools"
			>
				{{
					selectRandom([
						"The following automation tools were used in the design of the search ",
						"The search was designed with the aid of the following tools "
					])
				}}
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
