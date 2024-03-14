<template>
	<div>
		<p v-html="$tera.state.intro"></p>
	</div>
</template>
<script>
//import deepstreamMixin from "@/mixins/DeepstreamMixin";
export default {
	name: "OutputIntroduction",
	props: {
		//data: Object
	}
};
</script>
