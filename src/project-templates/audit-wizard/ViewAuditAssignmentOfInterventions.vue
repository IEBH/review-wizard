<template>
    <div>
        <h1>Assignment of Interventions</h1>
        <InputSelectMulti
                question="What was the ratio of randomization between groups?"
                :options="options.ratios"
                v-model="$tera.state.ratio"
        />
        <InputSelectMulti
                question="How was the sequence of participant allocation generated?"
                :options="options.participantAllocation"
                v-model="$tera.state.participantAllocation"
        />
        <InputTextSingleLine
			question="How was the allocation of participants concealed?"
			v-model="$tera.state.allocationOfParticipants"
            placeholder="centralised randomisation via telephone by an independent consultant"
		/>
        <InputSelectMulti
                question="What was the mechanism of implementing the allocation sequence?"
                :options="options.allocationSequenceMechanisms"
                v-model="$tera.state.allocationSequenceMechanisms"
        />
        <InputTextSingleLine
			question="Describe any steps to conceal the sequence until interventions are assigned"
			v-model="$tera.state.concealSequence"
            placeholder="The laboratory technician performing the assay was blinded to all personal and medical characteristics of the patient"
		/>
        <InputSelectMulti
                question="The following people were blinded after assignment to interventions"
                :options="options.people"
                v-model="$tera.state.blindedPeople"
        />
        <InputTextSingleLine
			question="People were blinded using the following method"
			v-model="$tera.state.methodBlindedPeople"
            placeholder="the placebo being identical in shape and color to the intervention pill"
		/>
        <InputSelectMulti
                question="Unblinding was permissible under the following circumstances"
                :options="options.circumstancesUnblinding"
                v-model="$tera.state.circumstancesUnblinding"
        />
    </div>
</template>
<script>
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
export default {
    name: "ViewAuditAssignmentOfInterventions",
    components: {
        InputSelectMulti,
        InputTextSingleLine
    },
    data() {
		return {
            options: {
                ratios:[
                    { label: "1:1"},
                    { label: "2:1"},
                    { label: "3:1"},
                    { label: "other"}
                ],
                participantAllocation: [
                    { label: "blocking" },
                    { label: "minimization" },
                    { label: "stratification"}
                ],
                allocationSequenceMechanisms: [
                    { label: "central telephone" },
                    { label: "sequentially numbered" },
                    { label: "opaque" },
                    { label: "sealed enevelopes" },
                    { label: "other"}
                ],
                people: [
                    { label: "trail participants" },
                    { label: "care providers" },
                    { label: "data analysts" }, 
                    { label: "outcome assessors" }
                ],
                circumstancesUnblinding: [
                    { label: "serious adverse event" },
                    { label: "physician request"}
                ]}
                }
            }
        }
    
</script>
<style scoped></style>