<template>
	<div>
		<p>
			The primary
			{{ data.primary.length > 1 ? "outcomes were" : "outcome was" }}
			{{ joinArrayWithOr(data.primary.map(outcome => outcome.name)) }} assessed
			by {{ joinArrayWithOr(data.primary.map(outcome => outcome.assessed)) }} at
			the following time-points:
			{{ joinArrayWithAnd(data.primary.map(outcome => outcome.time)) }}.
		</p>
		<p>
			The secondary
			{{ data.secondary.length > 1 ? "outcomes were" : "outcome was" }}
			{{ joinArrayWithOr(data.secondary.map(outcome => outcome.name)) }}
			assessed by
			{{ joinArrayWithOr(data.secondary.map(outcome => outcome.assessed)) }} at
			the following time-points:
			{{ joinArrayWithAnd(data.secondary.map(outcome => outcome.time)) }}.
		</p>
		<p>
			Adverse events of particular interest were
			{{ joinArrayWithOr(data.adverse.map(outcome => outcome.name)) }}
			. Adverse events were assessed by
			{{ joinArrayWithOr(data.adverse.map(outcome => outcome.assessed)) }} at
			the following time-points:
			{{ joinArrayWithAnd(data.adverse.map(outcome => outcome.time)) }}.
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
