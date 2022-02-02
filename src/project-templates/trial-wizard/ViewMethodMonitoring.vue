<template>
	<div>
		<h1>Monitoring</h1>
		Under construction
		<BasePreviewOutput :component="outputComponent" :data="monitoring" />
	</div>
</template>

<script>
import OutputMonitoring from "./OutputMonitoring.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("monitoring")],
	data() {
		return {
			outputComponent: OutputMonitoring
		};
	}
};
</script>
