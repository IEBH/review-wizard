<template>
	<div class="p-mb-6">
		<!-- <p>
			<b>{{ question }}</b>
		</p> -->
		<div v-html="question"></div>
		<!-- editorStyle="{Width:100%}" 
			 @text-change="$emit('input', $event.htmlValue)"
		-->
		<div>
			<Editor
				:value="value"
				:placeholder="placeholder" 
				style="height: 800px !important;"
				><template v-slot:toolbar>
					<span>
						<button class="ql-bold" v-tooltip.bottom="'Bold'"></button>
						<button class="ql-italic" v-tooltip.bottom="'Italic'"></button>
					</span> </template
			></Editor>
		</div>
		<div class="p-mt-2">
			<Button
				v-if="value != ''"
				label="Clear"
				class="p-button-danger"
				@click="clearInput()"
			/>
		</div>
	</div>
</template>

<script>
import Button from "primevue/button";
import Editor from "primevue/editor";

export default {
	name: "InputEditorMultiline",
	props: {
		question: String,
		placeholder: String,
		value: String
	},
	components: {
		Editor,
		Button
	},
	methods: {
		clearInput() {
			//this.$emit("input", "");
			this.value="";
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
