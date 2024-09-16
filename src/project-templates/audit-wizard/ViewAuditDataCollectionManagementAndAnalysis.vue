<template>
    <div>
        <h1>Data Collection, Management and Analysis</h1>
        <InputTextSingleLine
			question="Plans for data entry, coding, security and storage"
			v-model="$tera.state.plansForDataManagement"
            placeholder="entry of data by Nurses onto iPads"
		/>
        <InputTextSingleLine
			question="Processes to promote data quality"
			v-model="$tera.state.processesForDataQuality"
            placeholder="double entry by two independent researchers"
		/>
        <InputSelectMulti
                question="Further details are provided in the..."
                :options="options.furtherDetails"
                v-model="$tera.state.furtherDetails"
        />
        <InputTextSingleLine
			question="What statistical estimate will be used for primary audit analysis?"
			v-model="$tera.state.statisticalEstimate"
            placeholder="relative risk using a Chi-squared test"
		/>
        <InputTextSingleLine
			question="What statistical measure and/or test will be used for secondary outcome analysis"
			v-model="$tera.state.statisticalMeasure"
            placeholder="mean difference using a two-sample t-test"
		/>
        <InputTextSingleLine
			question="How were adverse events analysed?"
			v-model="$tera.state.adverseEventsAnalysis"
            placeholder="reporting the frequency and percentage of all common reported adverse events"
		/>
        <InputTextSingleLine
			question="How were subgroups categorised?"
			v-model="$tera.state.subgroupsCategorization"
            placeholder="age groups"
		/>
        <InputTextSingleLine
			question="How will subgroup analyses be performed?"
			v-model="$tera.state.subgroupAnalysisPerformed"
            placeholder="ineraction terms in regression models"
		/>
        <InputTextSingleLine
			question="Adjusted analysis was performed for the primary outcome by"
			v-model="$tera.state.adjustedAnalysis"
            placeholder="regression analysis"
		/>
        <InputSelectMulti
                question="Efficacy comparisons were performed based on the..."
                :options="options.efficacyComparisons"
                v-model="$tera.state.efficacyComparisons"
        />
        <InputTextSingleLine
			question="What population was the efficacy comparisons performed?"
			v-model="$tera.state.populationEfficacyComparison"
            placeholder="all eligible participants who were randomised to a study group"
		/>
        <InputTextSingleLine
			question="What was the safety population defined as"
			v-model="$tera.state.safetyPopulation"
            placeholder="all participants who received at least one dose of the study intervention"
		/>
        <InputSelectMulti
                question="Missing data was ..."
                :options="options.missingDataStates"
                v-model="$tera.state.missingDataStates"
        />
        <InputTextSingleLine
			question="This approach to missing data was used because..."
			v-model="$tera.state.missingDataApproachReason"
		/>
        <InputTextSingleLine
			question="List the type of planned sensitivity analyses"
			v-model="$tera.state.plannedSensitivityAnalyses"
            placeholder="analysis population (per-protocol)"
		/>
    </div>
</template>
<script>
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
export default {
    name: "ViewAuditDataCollectionManagementAndAnalysis",
    components: {
        InputSelectMulti,
        InputTextSingleLine
    },
    data() {
		return {
			options: {
				furtherDetails: [
                    { label: "statistical analysis plan"}
                ],
                efficacyComparisons: [
                    { label: "intention-to-treat" },
                    { label: "modified intention-to-treat"}
                ],
                missingDataStates: [
                    { label: "ignored" },
                    { label: "addressed using multiple imputation" }
                ]
            }
		};
	}
}
</script>
<style scoped></style>