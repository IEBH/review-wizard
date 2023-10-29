<template>
	<div class="p-fluid p-mb-6">
		<p>
			<b>{{ question }}</b>
		</p>
		<!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
		<!-- <input
        v-bind:value="value"
        v-on:change="$emit('input', $event.target.value)"
      > -->
		<template v-for="(item, index) in value" :key="index">
			<InputText
				class="p-mb-2"
				type="text"
				:value="item"
				:ref="index"
				@input="update(index, $event)"
				:placeholder="placeholder"
			/>
		</template>
		<div class="p-ml-4">
			<Button
				icon="pi pi-minus"
				class="p-mr-2 p-d-inline p-button-rounded p-button-danger"
				@click="removeLastValue()"
			/>
			<Button
				icon="pi pi-plus"
				class="p-d-inline p-button-rounded p-button-success"
				@click="addNewValue()"
			/>
		</div>
	</div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
export default {
	name: "InputTextSingleLineMulti",
	props: {
		question: String,
		value: Array,
		placeholder: String
	},
	components: {
		InputText,
		Button
	},
	methods: {
		update: function(index, item) {
			this.value[index] = item;
			this.$emit("input", this.value);
		},
		removeLastValue: function() {
			this.value.pop();
			this.$emit("input", this.value);
		},
		addNewValue: function() {
			this.value.push("");
			this.$emit("input", this.value);
			const lastIndex = this.value.length - 1;
			// Wait until next tick so component is rendered
			this.$nextTick(() => {
				this.$refs[lastIndex][0].$el.focus();
			});
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
