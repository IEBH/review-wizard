<template>
	<div>
		<h1>Sample Size</h1>

		<i>
			Estimated number of participants needed to achieve study objectives and
			how it was determined, including clinical and statistical assumptions
			supporting any sample size calculations
		</i>

		<InputSelectDropdown
			question="What trial type did you perform?"
			:options="trialTypeOptions"
			:value="sampleSize.trialType"
			@input="updateField('trialType', $event)"
		/>

		<i v-if="sampleSize.trialType != 'non-inferiority'">
			To calculate the sample size we suggest using Power and copying the text
			it provides.
			<a href="https://vbiostatps.app.vumc.org/ps/" target="_blank"
				>https://vbiostatps.app.vumc.org/ps/</a
			>
		</i>

		<i v-if="sampleSize.trialType == 'non-inferiority'">
			For non-inferiority trials, we recommend using:
			<a href="https://www.sealedenvelope.com/" target="_blank"
				>Sealed Envelope | Randomisation (randomization) and online databases
				for clinical trials</a
			>
		</i>

		<InputTextSingleLine
			v-if="sampleSize.trialType == 'other'"
			question="What is the trial type?"
			placeholder=""
			:value="sampleSize.trialTypeOther"
			@input="updateField('trialTypeOther', $event)"
		/>

		<!--New added-->
		<InputSelectDropdown
			question="Description of trial design including type of trial"
			:options="trialDesignOptions"
			:value="sampleSize.trialDesign"
			@input="updateField('trialDesign', $event)"
		/>

		<InputSelectDropdown
			question="What is the study power of the trial?"
			:options="studyPowerOptions"
			:value="sampleSize.studyPower"
			@input="updateField('studyPower', $event)"
		/>

		<InputTextSingleLine
			v-if="sampleSize.studyPower == 'other'"
			question="What is the study power?"
			placeholder=""
			:value="sampleSize.studyPowerOther"
			@input="updateField('studyPowerOther', $event)"
		/>

		<InputSelectDropdown
			question="What is the level of significance?"
			:options="levelOfSignificanceOptions"
			:value="sampleSize.levelOfSignificance"
			@input="updateField('levelOfSignificance', $event)"
		/>

		<InputTextSingleLine
			v-if="sampleSize.levelOfSignificance == 'other'"
			question="What is the level of significance?"
			placeholder=""
			:value="sampleSize.levelOfSignificanceOther"
			@input="updateField('levelOfSignificanceOther', $event)"
		/>

		<InputTextSingleLine
			question="What was the sample size?"
			placeholder="e.g.1000"
			:value="sampleSize.sampleSize"
			@input="updateField('sampleSize', $event)"
		/>

		<InputTextSingleLine
			question="What effect size is the study powered for?"
			placeholder="e.g. medium effect size"
			:value="sampleSize.effectSize"
			@input="updateField('effectSize', $event)"
		/>

		<InputTextSingleLine
			question="What proportion of participant drop-outs are you expecting?"
			placeholder="e.g. 10%"
			:value="sampleSize.participantDropOuts"
			@input="updateField('participantDropOuts', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="sampleSize" />
	</div>
</template>

<script>
import OutputSampleSize from "./OutputSampleSize.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("sampleSize")],
	data() {
		return {
			outputComponent: OutputSampleSize,
			trialTypeOptions: [
				"non-inferiority",
				"equivalence",
				"superiority",
				"other"
			],
			studyPowerOptions: ["80%", "90%", "other"],
			levelOfSignificanceOptions: ["5%", "1%", "other"],
			//new added
			trialDesignOptions: [
				"parallel group",
				"crossover",
				"factorial",
				"single group",
				"allocation ratio",
				"framework",
				"other"
			]
		};
	}
};
</script>
