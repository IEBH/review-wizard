<template>
	<div>
		<h1>Data Collection, Management and Analysis</h1>

		<InputTextSingleLine
			question="Plans for data entry, coding, security and storage"
			placeholder="entry of data by Nurses onto iPads"
			:value="dataCollection.dataManagement"
			@input="updateField('dataManagement', $event)"
		/>

		<InputTextSingleLine
			question="Processes to promote data quality"
			placeholder="double entry by two independent researchers"
			:value="dataCollection.dataQuality"
			@input="updateField('dataQuality', $event)"
		/>

		<InputSelectMulti
			question="Further details are provided in the..."
			:options="furtherDetailsOptions"
			:value="dataCollection.furtherDetails"
			@input="updateField('furtherDetails', $event)"
		/>

		<InputTextSingleLine
			question="What statistical measure and/or test will be used for primary outcome analysis"
			placeholder="relative risk using a Chi-squared test"
			:value="dataCollection.primaryMeasure"
			@input="updateField('primaryMeasure', $event)"
		/>

		<InputTextSingleLine
			question="What statistical measure and/or test will be used for secondary outcome analysis"
			placeholder="mean difference using a two-sample T-test"
			:value="dataCollection.secondaryMeasure"
			@input="updateField('secondaryMeasure', $event)"
		/>

		<InputTextSingleLine
			question="How were adverse events analysed"
			placeholder="reporting the frequency and percentage of all common reported adverse events"
			:value="dataCollection.adverseEventMeasure"
			@input="updateField('adverseEventMeasure', $event)"
		/>

		<InputTextSingleLine
			question="How were subgroups categorised"
			placeholder="age groups"
			:value="dataCollection.subgroupAnalysis"
			@input="updateField('subgroupAnalysis', $event)"
		/>

		<InputTextSingleLine
			question="How will subgroup analyses be performed"
			placeholder="interaction terms in regression models"
			:value="dataCollection.subgroupComparison"
			@input="updateField('subgroupComparison', $event)"
		/>

		<InputTextSingleLine
			question="Adjusted analysis was performed for the primary outcome by..."
			placeholder="regression analysis"
			:value="dataCollection.subgroupMethod"
			@input="updateField('subgroupMethod', $event)"
		/>

		<InputSelectMulti
			question="Efficacy comparisons were performed based on the..."
			:options="efficacyComparisonsOptions"
			:value="dataCollection.efficacyComparisons"
			@input="updateField('efficacyComparisons', $event)"
		/>

		<InputTextSingleLine
			question="What population was the efficacy comparisons performed"
			placeholder="all eligible participants who were randomized to a study group"
			:value="dataCollection.efficacyPopulation"
			@input="updateField('efficacyPopulation', $event)"
		/>

		<InputTextSingleLine
			question="What was the safety population defined as"
			placeholder="all participants who received at least one dose of the study intervention"
			:value="dataCollection.safetyPopulation"
			@input="updateField('safetyPopulation', $event)"
		/>

		<InputSelectMulti
			question="Missing data was ..."
			:options="missingDataOptions"
			:value="dataCollection.missingData"
			@input="updateField('missingData', $event)"
		/>

		<InputTextSingleLine
			question="This approach to missing data was used because..."
			placeholder=""
			:value="dataCollection.missingDataWhy"
			@input="updateField('missingDataWhy', $event)"
		/>

		<InputTextSingleLine
			question="List the type of planned sensitivity analyses"
			placeholder="analysis population (per-protocol)"
			:value="dataCollection.sensitivityAnalyses"
			@input="updateField('sensitivityAnalyses', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="dataCollection" />
	</div>
</template>

<script>
import OutputDataCollection from "./OutputDataCollection.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("dataCollection")],
	data() {
		return {
			outputComponent: OutputDataCollection,
			furtherDetailsOptions: [{ label: "statistical analysis plan" }],
			efficacyComparisonsOptions: [
				{ label: "intention-to-treat" },
				{ label: "modified intention-to-treat" }
			],
			missingDataOptions: [
				{ label: "ignored" },
				{ label: "addressed using multiple imputation" }
			]
		};
	}
};
</script>
