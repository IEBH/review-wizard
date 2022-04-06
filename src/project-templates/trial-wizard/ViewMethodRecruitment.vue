<template>
	<div>
		<h1>Recruitment</h1>

		<i>
			Strategies for achieving adequate participant enrolment to reach target
			sample size
		</i>

		<InputTextSingleLine
			question="Strategies implemented to achieve adequate participant enrolment were"
			placeholder="Text describing recruitment strategies"
			:value="recruitment.recruitment"
			@input="updateField('recruitment', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="recruitment" />
	</div>
</template>

<script>
import OutputRecruitment from "./OutputRecruitment.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("recruitment")],
	data() {
		return {
			outputComponent: OutputRecruitment
		};
	}
};
</script>
