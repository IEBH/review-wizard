<template>
	<div>
		<p v-html="$tera.state.introprotocol"></p>
		<p v-html="$tera.state.intro"></p>
	</div>
</template>
<script>
export default {
	name: "OutputIntroduction"
};
</script>
