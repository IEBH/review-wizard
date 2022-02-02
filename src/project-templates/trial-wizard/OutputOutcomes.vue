<template>
	<div>
		<p>
			The primary
			{{
				data.primary && data.primary.length > 1
					? "outcomes were"
					: "outcome was"
			}}
			{{ joinArrayWithOr(mapArray(data.primary, "name")) }} assessed by
			{{ joinArrayWithOr(mapArray(data.primary, "assessed")) }} at the following
			time-points: {{ joinArrayWithAnd(mapArray(data.primary, "time")) }}.
		</p>
		<p>
			The secondary
			{{
				data.secondary && data.secondary.length > 1
					? "outcomes were"
					: "outcome was"
			}}
			{{ joinArrayWithOr(mapArray(data.secondary, "name")) }}
			assessed by
			{{ joinArrayWithOr(mapArray(data.secondary, "assessed")) }} at the
			following time-points:
			{{ joinArrayWithAnd(mapArray(data.secondary, "time")) }}.
		</p>
		<p>
			Adverse events of particular interest were
			{{ joinArrayWithOr(mapArray(data.adverse, "name")) }}
			. Adverse events were assessed by
			{{ joinArrayWithOr(mapArray(data.adverse, "assessed")) }} at the following
			time-points: {{ joinArrayWithAnd(mapArray(data.adverse, "time")) }}.
		</p>
		<p>
			The clinical relevance of the chosen efficacy and harm outcomes is
			supported by {{ data.clinicalRelevance }}.
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputInterventions",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>
