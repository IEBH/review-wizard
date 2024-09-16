<template>
    <div>
        <h1>Monitoring</h1>
        <InputSelectYesNo
			question="Will a data monitoring committee be set up?"
			v-model="$tera.state.isDataMonitoringCommittee" />

        <InputTextSingleLine
			v-if="$tera.state.isDataMonitoringCommittee"
			question="Provide details of the role the committee had"
			v-model="$tera.state.roleDetails"
            placeholder="the committee had oversight of whether the trial could be ended early due to an unacceptable number of adverse events"
		/>
        <InputTextSingleLine
			v-if="$tera.state.isDataMonitoringCommittee"
			question="Provide details of the reporting structure of the committee"
			v-model="$tera.state.reportingStructureDetails"
            placeholder="the committee reported directly to the ethics board of the primary trial hospital"
		/>
        <InputTextSingleLine
			v-if="$tera.state.isDataMonitoringCommittee"
			question="Provide details of the composition of the committee"
			v-model="$tera.state.compositionDetails"
            placeholder="the committee was comprised of the director of the hospital, the head of the ethics committee and an external adverse effects consultant"
		/>
        <InputTextSingleLine
			v-if="$tera.state.isDataMonitoringCommittee"
			question="Further details about the committee can be found at the following link"
			v-model="$tera.state.committeeDetailsLink"
		/>
        <InputTextSingleLine
			v-if="!$tera.state.isDataMonitoringCommittee"
			question="List the reason(s) why a committee was not set up for this study"
			v-model="$tera.state.reasonCommitteeNotSetUp"
            placeholder="no committee was set up for this trial as the participant numbers were so small"
		/>
        <InputSelectYesNo
			question="Will an interim analysis be conducted?"
			v-model="$tera.state.isInterimAnalysis" />
        
        <InputTextSingleLine
			v-if="$tera.state.isInterimAnalysis"
			question="What time-points was the interim analysis conducted at"
			v-model="$tera.state.interimAnalysisTimePoints"
            placeholder="the beginning and end of the trial"
		/>
        <InputSelectMulti
                v-if="$tera.state.isInterimAnalysis"
                question="Interim analysis results were made available to:"
                :options="options.interimAnalysisResults"
                v-model="$tera.state.interimAnalysisResults"
        />
        <InputTextSingleLine
			v-if="$tera.state.isInterimAnalysis"
			question="The study could be stopped if..."
			v-model="$tera.state.conditionStoppingStudy"
            placeholder="more than 10% of participants experienced severe adverse reactions"
		/>
        <InputSelectMulti
                v-if="$tera.state.isInterimAnalysis"
                question="Who made the finial decision on study termination?"
                :options="options.studyTerminationFinalDecision"
                v-model="$tera.state.studyTerminationFinalDecision"
        />
        <InputTextSingleLine
			v-if="!$tera.state.isInterimAnalysis"
			question="List the reason(s) why an interim analysis was not planned"
			v-model="$tera.state.interimAnalysisNotPlannedReason"
            placeholder="no committee was set up for this trial as the participant numbers were so small"
		/>
        <InputTextSingleLine
			question="How were adverse effects monitored?"
			v-model="$tera.state.adverseEffectsMonitoring"
            placeholder="by weekly check-ups with a GP to monitor blood-pressure and general health"
		/>
        <InputTextSingleLine
			question="Provide frequency and procedures for auditing trial conduct, if any, and whether the process will be independent from investigators and the sponsor"
			v-model="$tera.state.proceduresAuditingTrial"
            placeholder="weekly through an independent consultant"
		/>
    </div>
</template>
<script>
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
export default {
    name: "ViewAuditMonitoring",
    components: {
        InputSelectYesNo,
        InputTextSingleLine,
        InputSelectMulti
    },
    data() {
		return {
			options: {
				interimAnalysisResults: [
                    { label: "DMC" }
                ],
                studyTerminationFinalDecision: [
                    { label: "study investigators" }
                ]
            }
		};
	}
}
</script>
<style scoped></style>