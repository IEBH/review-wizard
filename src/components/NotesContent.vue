<template>
	<div class="container-notes">
		<Textarea
			type="text"
			class="textarea-notes"
			v-model="row[thead.name]"
			:autoResize="true"
			rows="8"
		/>
	</div>
</template>
<script>
import Textarea from "primevue/textarea";
export default {
	components: {
		Textarea
	},
	props: {
		row: {},
		thead: {}
	},
	computed: {
		charNum() {
			return this.row[this.thead.name].length;
		}
	},
	data() {
		return {
			editshow: false
		};
	}
};
</script>
<style>
.container-notes {
	width: 350px;
}
</style>
