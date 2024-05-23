<template>
	<div>
		<p v-html="forProtocol"></p>
		<p v-html="$tera.state.intro"></p>
	</div>
</template>
<script>
export default {
	name: "OutputIntroduction",
	data() {
		return {
			forProtocol: "The protocol is registed at: " + $tera.state.introprotocol
		}
	}
};
</script>
