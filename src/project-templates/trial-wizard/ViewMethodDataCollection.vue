<template>
	<div>
		<h1>Data Collection, Management and Analysis</h1>

			<i>Data collection methods: Plans for assessment and collection of outcome, baseline, and other trial data, including any related processes to promote data quality (eg, duplicate measurements, training of assessors) and a description of study instruments (eg, questionnaires, laboratory tests) along with their reliability and validity, if known. Reference to where data collection forms can be found, if not in the protocol. Plans to promote participant retention and complete follow-up, including list of any outcome data to be collected for participants who discontinue or deviate from intervention protocols.</i>

		<InputTableCustom
			question="How was data collected?"
			:columns="interventionColumns"
			:value="dataCollection.sequenceGen"
			@input="updateField('sequenceGen', $event)"
		/>

			<i>Data management: Plans for data entry, coding, security, and storage, including any related processes to promote data quality (eg, double data entry; range checks for data values). Reference to where details of data management procedures can be found, if not in the protocol.</i>

		<InputTableCustom
			question="How was the data managed?"
			:columns="interventionColumns"
			:value="dataCollection.sequenceGen"
			@input="updateField('sequenceGen', $event)"
		/>

			<i>Statistical methods: Statistical methods for analysing primary and secondary outcomes. Reference to where other details of the statistical analysis plan can be found, if not in the protocol. Methods for any additional analyses (eg, subgroup and adjusted analyses).</i>

		<InputTableCustom
			question="What statistical methods were used to analyse the outcomes?"
			:columns="interventionColumns"
			:value="dataCollection.sequenceGen"
			@input="updateField('sequenceGen', $event)"
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
			outputComponent: OutputDataCollection
		};
	}
};
</script>
