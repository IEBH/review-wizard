<template>
	<div>
		<p>
			{{
				selectRandom([
					"Eligible participants were ",
					"The participant characteristics are "
				])
			}}
			{{ joinArrayWithOr(formatSelectMulti(data.conditions)).toLowerCase() }}
			{{ joinArrayWithOr(formatSelectMulti(data.sexes)).toLowerCase() }}
			{{ joinArrayWithOr(formatSelectMulti(data.ages)).toLowerCase()
			}}{{
				data.others && data.others.length
					? " who where ".concat(formatSelectMulti(data.others)).toLowerCase()
					: ""
			}}.
		</p>
		<p>
			{{
				selectRandom([
					"At baseline, for all participants we measured ",
					"We measured the following baseline characteristics "
				])
			}}
			{{
				joinArrayWithAnd(
					formatSelectMulti(data.baselineMeasurements)
				).toLowerCase()
			}}.
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputEligibilityCriteria",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>
