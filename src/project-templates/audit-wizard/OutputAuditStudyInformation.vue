<template>
	<div>
		<p>
            <span v-if="$tera.state.stakeholder && $tera.state.stakeholder.length">
                {{
                    selectRandom([
                        "The relevant stakeholders are ",
                        "The key stakeholders are ",
                        "The identified stakeholders are: ",
                        "The important stakeholders include ",
                        "The following are the relevant stakeholders: "
                    ])
                }}
            </span>	
            <span v-if="$tera.state.stakeholder && $tera.state.stakeholder.length">
                {{ $tera.state.stakeholder + "."}}
            </span>

            <span v-if="$tera.state.stakeholderConsultation && $tera.state.stakeholderConsultation.length">
                {{
                    selectRandom([
                        "The stakeholders have been consulted by the following way: ",
                        "The following approach was used to consult the stakeholders: ",
                        "Stakeholders have been consulted using the following process: ",
                        "The following method was employed to consult the stakeholders: ",
                        "Consultation with the stakeholders was conducted in the following way: "
                    ])
                }}
            </span>	
            <span v-if="$tera.state.stakeholderConsultation && $tera.state.stakeholderConsultation.length">
                {{ $tera.state.stakeholderConsultation + "."}}
            </span>

            <span v-if="$tera.state.supervisor && $tera.state.supervisor.length">
                {{
                    selectRandom([
                        "The supervisor is ",
                        "The name of the supervisor is ",
                        "The supervisor in charge is ",
                        "The person responsible as supervisor is ",
                    ])
                }}
            </span>	
            <span v-if="$tera.state.supervisor && $tera.state.supervisor.length">
                {{ $tera.state.supervisor + "."}}
            </span>

            <span v-if="$tera.state.auditQuestionDescription && $tera.state.auditQuestionDescription.length">
                {{
                    selectRandom([
                        "Description of the audit question and justification for undertaking the audit, including summary of relevant guidelines or studies includes: ",
                        "The audit question and justification for conducting the audit, along with a summary of relevant guidelines or studies, includes: ",
                        "The audit question, along with the reasons for undertaking the audit and a summary of relevant guidelines or studies, includes: ",
                        "A summary of relevant guidelines or studies, along with the audit question and justification for undertaking the audit, includes: ",
                    ])
                }}
            </span>	
            <span v-if="$tera.state.auditQuestionDescription && $tera.state.auditQuestionDescription.length">
                {{ $tera.state.auditQuestionDescription + "."}}
            </span>

            <span v-if="$tera.state.auditObjective && $tera.state.auditObjective.length">
                {{
                    selectRandom([
                        "The specific objectives of this audit is: ",
                        "This audit’s specific objectives are: ",
                        "The specific goals of this audit are: ",
                        "The audit aims to achieve the following specific objectives: ",
                    ])
                }}
            </span>	
            <span v-if="$tera.state.auditObjective && $tera.state.auditObjective.length">
                {{ $tera.state.auditObjective + "."}}
            </span>

            <span v-if="$tera.state.dataCollectionMethod && $tera.state.dataCollectionMethod.length">
                {{
                    selectRandom([
                        "TThe data collection method is: ",
                        "This is the method used for data collection: ",
                        "The approach for collecting data is: ",
                        "Data will be collected using the following method: ",
                    ])
                }}
            </span>	
            <span v-if="$tera.state.dataCollectionMethod && $tera.state.dataCollectionMethod.length">
                {{ $tera.state.dataCollectionMethod + "."}}
            </span>
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputAuditStudyInformation",
	mixins: [OutputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
