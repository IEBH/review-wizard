<template>
	<div class="p-mb-6">
		<p>
			<b>{{ question }}</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<div class="p-inputgroup">
			<Textarea v-bind:value="value" v-on:change="$emit('input', $event.target.value)" :placeholder="placeholder"
				:autoResize="true" rows="7" cols="60" />
		</div>
		<div class="p-mt-2">
			<Button v-if="value == '' && placeholder" label="Keep Example" @click="fillWithPlaceholder()" />
		</div>
		<div style="text-align: center;">
			<Button v-if="value != ''" label="Clear" class="btsyle" @click="clearInput()" />
		</div>
	</div>
</template>

<script>
import Textarea from "primevue/textarea";
import Button from "primevue/button";

export default {
	name: "InputTextMultiLine",
	props: {
		question: String,
		placeholder: String,
		value: String
	},
	components: {
		Textarea,
		Button
	},
	methods: {
		fillWithPlaceholder() {
			this.$emit("input", this.placeholder);
		},
		clearInput() {
			this.$emit("input", "");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btsyle {
	margin: 10px;
	/* width: 100px; */
	background-color: #f4a8a2;
	border-radius: 20px;
	/* box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px; */
	color: #c03e34;
	cursor: pointer;
	display: inline-block;
	font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
	padding: 7px 20px;
	text-align: center;
	text-decoration: none;
	/* transition: all 250ms; */
	border: 0;
	font-size: 16px;

	&:hover {
		/* box-shadow: 0 0 10px 0 #28a745 inset, 0 0 10px 4px #28a745; */
		background-color: #ba4a41 !important;
		border: 2px solid #e49164 !important;
	}
}
</style>
