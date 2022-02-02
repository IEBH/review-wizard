<template>
	<div>
		<h1>Recruitment</h1>
		Under construction
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
