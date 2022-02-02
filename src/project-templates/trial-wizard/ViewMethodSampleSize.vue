<template>
	<div>
		<h1>Sample Size</h1>
		Under construction
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
