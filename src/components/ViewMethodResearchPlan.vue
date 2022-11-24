<template>
	<div>
		<h1>Research Plan</h1>
		<InputSrTableCustom
			question="What is your Research Plan?"
			:value="researchplan.planTable"
			:titlePageAuthors="Authors"
			@input="updateField('planTable', $event)"
		></InputSrTableCustom>
	</div>
</template>
<script>
import InputSrTableCustom from "../components/InputSrTableCustom.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";
export default {
	mixins: [deepstreamMixin("titlepage"), deepstreamMixin("researchplan")],
	components: {
		InputSrTableCustom
	},
	data() {
		return {
			Authors: null
		};
	},
	mounted() {
		this.Authors = this.titlepage.authors.map(el => {
			return { label: el };
		});
	}
};
</script>
