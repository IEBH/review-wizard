<template>
	<div>
		<p v-html="data.intro"></p>
	</div>
</template>
<script>
import deepstreamMixin from "@/mixins/DeepstreamMixin";
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputIntroduction",
	mixins: [OutputMixin, deepstreamMixin("introduction")],
	props: {
		data: Object
	}
};
</script>
