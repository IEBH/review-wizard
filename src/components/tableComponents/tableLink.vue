<template>
	<div class="linkbox" v-if="params.data.toolLink.length > 0">
		<ElLink
			v-for="(tlink, index) in params.data.toolLink"
			:key="index"
			:href="tlink.link"
			target="_blank"
			:underline="false"
			>{{ tlink.name }}</ElLink
		>
	</div>
</template>

<script>
import ElLink from "element-ui/lib/link";
export default {
	name: "tableLink",
	components: {
		ElLink
	}
};
</script>

<style scoped>
.linkbox {
	display: flex;
	flex-direction: column;
}
</style>
