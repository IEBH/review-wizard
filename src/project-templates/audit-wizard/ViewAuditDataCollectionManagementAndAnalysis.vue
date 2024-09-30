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
    
        <InputTextSingleLine
			question="What statistical estimate will be used for primary audit analysis?"
			v-model="$tera.state.statisticalEstimate"
            placeholder="relative risk using a Chi-squared test"
		/>
        <BasePreviewOutput :component="outputComponent" />
    </div>
</template>
<script>
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
import OutputAuditDataCollectionManagementAndAnalysis from "./OutputAuditDataCollectionManagementAndAnalysis.vue";

export default {
    name: "ViewAuditDataCollectionManagementAndAnalysis",
    components: {
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
            },
            outputComponent: OutputAuditDataCollectionManagementAndAnalysis
		};
	}
}
</script>
<style scoped></style>