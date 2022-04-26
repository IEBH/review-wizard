<template>
	<div>
		<p>
			{{ selectRandom(["The primary ", "The study primary "]) }}
			{{
				data.primary && data.primary.length > 1
					? "outcomes were"
					: "outcome was"
			}}
			{{ joinArrayWithOr(mapArray(data.primary, "name")) }}
			{{ selectRandom([" assessed by ", " analysed by "]) }}
			{{ joinArrayWithOr(mapArray(data.primary, "assessed")) }}
			{{
				selectRandom([
					"at the following time points: ",
					"at the following periods in the trial: "
				])
			}}
			{{ joinArrayWithAnd(mapArray(data.primary, "time")) }}.
		</p>
		<p>
			{{ selectRandom(["The secondary ", "The study secondary "]) }}
			{{
				data.secondary && data.secondary.length > 1
					? "outcomes were"
					: "outcome was"
			}}
			{{ joinArrayWithOr(mapArray(data.secondary, "name")) }}
			{{ selectRandom([" assessed by ", " analysed by "]) }}
			{{ joinArrayWithOr(mapArray(data.secondary, "assessed")) }}
			{{
				selectRandom([
					"at the following time points: ",
					"at the following periods in the trial: "
				])
			}}
			{{ joinArrayWithAnd(mapArray(data.secondary, "time")) }}.
		</p>
		<p>
			{{
				selectRandom([
					"Adverse events of particular interest were ",
					"The following Adverse events were recorded "
				])
			}}
			{{ joinArrayWithOr(mapArray(data.adverse, "name")) }}
			{{
				selectRandom([
					". Adverse events were assessed by ",
					". The assessment of adverse events was done by "
				])
			}}
			{{ joinArrayWithOr(mapArray(data.adverse, "assessed")) }}
			{{
				selectRandom([
					"at the following time points: ",
					"at the following periods in the trial: "
				])
			}}
			{{ joinArrayWithAnd(mapArray(data.adverse, "time")) }}.
		</p>
		<p>
			{{
				selectRandom([
					"The clinical relevance of the chosen efficacy and harm outcomes is supported by ",
					"The importance, efficacy and associated harms of the outcomes is supported by "
				])
			}}
			{{ data.clinicalRelevance }}.
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputOutcomes",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>
