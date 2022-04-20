<template>
	<div>
		<p>
			{{ selectRandom(["Data management plans included"]) }}
			{{ data.dataManagement ? data.dataManagement : "BLANK" }}.
			{{ selectRandom(["Data quality was enhanced by"]) }}
			{{ data.dataQuality ? data.dataQuality : "BLANK" }}.
			{{ selectRandom(["Further details are provided in the"]) }}
			{{ joinArrayWithAnd(formatSelectMulti(data.furtherDetails)) }}.
		</p>
		<p>
			{{
				selectRandom([
					"The primary outcome analysis compared the groups using a"
				])
			}}
			{{ data.primaryMeasure ? data.primaryMeasure : "BLANK" }}.
			{{
				selectRandom([
					"The secondary outcomes were compared between groups using a"
				])
			}}
			{{ data.secondaryMeasure ? data.secondaryMeasure : "BLANK" }}.
			{{ selectRandom(["Adverse events were assessed by"]) }}
			{{ data.adverseEventMeasure ? data.adverseEventMeasure : "BLANK" }}.
		</p>
		<p>
			{{ selectRandom(["Prespecified subgroups for"]) }}
			{{ data.subgroupAnalysis ? data.subgroupAnalysis : "BLANK" }}
			{{ selectRandom(["were compared using"]) }}
			{{ data.subgroupComparison ? data.subgroupComparison : "BLANK" }}.
			{{
				selectRandom([
					"Adjusted analysis was performed for the primary outcome by "
				])
			}}
			{{ data.subgroupMethod ? data.subgroupMethod : "BLANK" }}.
		</p>
		<p>
			{{ selectRandom(["Efficacy comparisons were performed based on the"]) }}
			{{ joinArrayWithAnd(formatSelectMulti(data.efficacyComparisons)) }}
			{{ selectRandom(["population defined as"]) }}
			{{ data.efficacyPopulation ? data.efficacyPopulation : "BLANK" }}.
			{{
				selectRandom([
					"Adverse events were compared using the safety population, defined as"
				])
			}}
			{{ data.safetyPopulation ? data.safetyPopulation : "BLANK" }}.
		</p>
		<p>
			{{ selectRandom(["Missing data was"]) }}
			{{ joinArrayWithOr(formatSelectMulti(data.missingData)) }}.
			{{ selectRandom(["This approach was used because"]) }}
			{{ data.missingDataWhy ? data.missingDataWhy : "BLANK" }}.
			{{
				selectRandom([
					"Sensitivity analyses were performed to assess the effect of"
				])
			}}
			{{ data.sensitivityAnalyses ? data.sensitivityAnalyses : "BLANK" }}.
			{{ selectRandom(["on the robustness of the results"]) }}
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
