<template>
	<div>
		<h1>Study Information</h1>
		<i
			>General Information of the trial</i
		>
		<InputTextSingleLineMulti
			question="Who are the relevant stakeholders?"
			v-model="$tera.state.stakeholder"
			placeholder="e.g. The Emergency Department consultants"
		/>
		<InputTextMultiLine
			question="How have the stakeholders been consulted?"
			placeholder="The topic has been discussed with Dr A and Dr B, who agreed this was an important issue for the department."
			v-model="$tera.state.stakeholderConsultation"
		/>
		<InputTextMultiLine
			question="Who is the supervisor?"
			placeholder="Gerben Keijzers <Gerben.Keijzers@health.qld.gov.au>"
			v-model="$tera.state.supervisor"
		/>
		<InputTextMultiLine
			question="Description of the audit question and justification for undertaking the audit, including summary of relevant guidelines or studies."
			placeholder="Despite known improvements in patient care, significant variation in healthcare professionals’ knowledge and use of CDAs has been
reported, with many rules underutilised in clinical practice [REFERENCES]"
			v-model="$tera.state.auditQuestionDescription"
		/>
		<InputTextMultiLine
			question="What is the specific objectives of this audit?"
			placeholder="e.g. the aim of this study was to (i) determine clinicians’ knowledge, self-reported use and documentation of CDAs in a large ED in Australia, and (ii) to identify behavioural determinants influencing the implementation."
			v-model="$tera.state.auditObjective"
		/>
		<InputTextMultiLine
			question="What is the method of data collection?"
			placeholder="Interview
Questionnaire
Direct observation
Focus group
Patient records
Existing datasets
Other

Specify (for all above)"
			v-model="$tera.state.dataCollectionMethod"
		/>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>
<script>
import InputTextMultiLine from "@/components/InputTextMultiLine.vue";
import InputTextSingleLineMulti from "@/components/InputTextSingleLineMulti.vue";
import OutputAuditStudyInformation from "./OutputAuditStudyInformation.vue";

export default {
	name: "ViewAuditStudyInformation",
	components: {
		InputTextMultiLine,
		InputTextSingleLineMulti
	},
	data() {
		return {
            outputComponent: OutputAuditStudyInformation
		};
	}
	
};
</script>
