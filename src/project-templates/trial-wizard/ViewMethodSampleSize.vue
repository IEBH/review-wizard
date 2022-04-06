<template>
	<div>
		<h1>Sample Size</h1>

		<i>
			Estimated number of participants needed to achieve study objectives and
			how it was determined, including clinical and statistical assumptions
			supporting any sample size calculations
		</i>

		<InputTextSingleLine
			question="To calculate the sample size we suggest using Power and Sample Size (PS) from Vanderbilt University and copying the text it provides: https://vbiostatps.app.vumc.org/ps/"
			placeholder="Sample size calculation"
			:value="sampleSize.calculation"
			@input="updateField('calculation', $event)"
		/>

		<InputTextSingleLine
			question="For non-inferiority trials use Sealed Envelope: https://www.sealedenvelope.com/"
			placeholder="Sample size calculation"
			:value="sampleSize.nonInf"
			@input="updateField('nonInf', $event)"
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
			outputComponent: OutputSampleSize
		};
	}
};
</script>
