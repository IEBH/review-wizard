<template>
    <div>
        <h1>Sample Size</h1>
        <InputSelectDropdown
			question="What trial type did you perform?"
			v-model="$tera.state.trialType"
			:options="trialTypes"
		/>
        <InputTextSingleLine
			v-if="$tera.state.trialType == 'other'"
			question="What is the trial type?"
			v-model="$tera.state.trialTypeOther"
		/>
        <InputSelectMulti
                question="Description of trial design including type of trial"
                :options="options.trialDesigns"
                v-model="$tera.state.conditionsTreatment"
        />
        <InputSelectDropdown
			question="What is the study power of the trial?"
			v-model="$tera.state.trialStudyPower"
			:options="trialStudyPowers"
		/>
        <InputTextSingleLine
			v-if="$tera.state.trialStudyPower == 'other'"
			question="What is the study power?"
			v-model="$tera.state.trialStudyPowerOther"
		/>
        <InputSelectDropdown
			question="What is the level of significance?"
			v-model="$tera.state.levelOfSignificance"
			:options="levelOfSignificance"
		/>
        <InputTextSingleLine
			v-if="$tera.state.levelOfSignificance == 'other'"
			question="What is the level of significance?"
			v-model="$tera.state.levelOfSignificanceOther"
		/>
        <InputTextSingleLine
			question="What is the planned sample size?"
			v-model="$tera.state.plannedSampleSize"
            placeholder="100 medical records (EMR based) or 100 clinical staff members (survey)"
		/>
        <InputTextSingleLine
			question="What effect size is the study powered for?"
			v-model="$tera.state.effectSize"
            placeholder="medium effect size"
		/>
        <InputTextSingleLine
			question="What proportion of participant drop-outs are you expecting?"
			v-model="$tera.state.participantDropout"
            placeholder="10%"
		/>
    </div>
</template>
<script>
import InputSelectDropdown from "@/components/InputSelectDropdown.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
export default {
    name: "ViewAuditSampleSize",
    components: {
        InputSelectDropdown,
        InputTextSingleLine,
        InputSelectMulti
    },
    data() {
		return {
			trialTypes: ["non-inferiority", "equivalence", "superiority", "other"],
            trialStudyPowers: ["80%", "90%", "other"],
            levelOfSignificance: ["5%", "1%", "other"],
            options: {
                trialDesigns:[
                    { label: "parallel group"},
                    { label: "crossover"},
                    { label: "factorial"},
                    { label: "single group"},
                    { label: "allocation ratio"},
                    { label: "framework"},
                    { label: "other" }
                ]}
            }
        }
    }
</script>
<style scoped></style>