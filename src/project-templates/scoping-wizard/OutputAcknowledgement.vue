<template>
	<div>
		<p>
			<!-- We would like to thank,.toLowerCase() -->
			{{
				selectRandom([
					"We would like to thank,",
					"We wish to express our gratitude to ",
					"Our sincere thanks go to ",
					"We appreciate the efforts of ",
					"We extend our thanks to ",
					" We would like to convey our gratitude towards ",
					"Heartfelt thanks to "
				])
			}}
			<span v-if="$tera.state.designhelp && $tera.state.designhelp.length">
				{{ joinArrayWithAnd(formatSelectMulti($tera.state.designhelp)) }}
				for help designing the search strategy
			</span>
			<span v-if="$tera.state.statistical && $tera.state.statistical.length">
				,
			</span>
			<span v-if="$tera.state.statistical && $tera.state.statistical.length">
				{{ joinArrayWithAnd(formatSelectMulti($tera.state.statistical)) }}
				for help with the statistical analysis
			</span>
			<span v-if="$tera.state.manuscript && $tera.state.manuscript.length">
				,
			</span>
			<span v-if="$tera.state.manuscript && $tera.state.manuscript.length">
				and {{ joinArrayWithAnd(formatSelectMulti($tera.state.manuscript)) }}
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
	name: "OutputScopingAcknowledgement",
	mixins: [OutputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
