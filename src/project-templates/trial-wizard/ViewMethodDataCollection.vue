<template>
	<div>
		<h1>Data Collection, Management and Analysis</h1>



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
