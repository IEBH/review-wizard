<template>
	<div>
		<p>
			Eligible participants were
			{{ joinArrayWithOr(formatSelectMulti(data.conditions)).toLowerCase() }}
			{{ joinArrayWithOr(formatSelectMulti(data.sexes)).toLowerCase() }}
			{{ joinArrayWithOr(formatSelectMulti(data.ages)).toLowerCase()
			}}{{
				data.others.length
					? " who where ".concat(formatSelectMulti(data.others)).toLowerCase()
					: ""
			}}.
		</p>
		<p>
			At baseline, for all participants we measured
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
