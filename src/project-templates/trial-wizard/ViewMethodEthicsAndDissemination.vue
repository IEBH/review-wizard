<template>
	<div>
		<h1>Ethics And Dissemination</h1>
		Under construction
		<BasePreviewOutput
			:component="outputComponent"
			:data="ethicsAndDissemination"
		/>
	</div>
</template>

<script>
import OutputEthicsAndDissemination from "./OutputEthicsAndDissemination.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("ethicsAndDissemination")],
	data() {
		return {
			outputComponent: OutputEthicsAndDissemination
		};
	}
};
</script>
