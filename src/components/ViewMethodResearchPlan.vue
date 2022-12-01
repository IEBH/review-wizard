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
			Authors: null,
			authorsArr: null
		};
	},
	mounted() {
		//--all people(authors and acknowledgements) involved
		this.authorsArr = this.titlepage.authors;
		this.titlepage.authors.forEach(el => {
			for (var i = 0; i < this.titlepage.acknowledgements.length; i++) {
				if (
					el != this.titlepage.acknowledgements[i] &&
					!this.authorsArr.includes(this.titlepage.acknowledgements[i])
				) {
					//alert(this.titlepage.acknowledgements[i]);
					this.authorsArr.push(this.titlepage.acknowledgements[i]);
				}
			}
		});
		//--convert arrylist to object list
		this.Authors = this.authorsArr.map(el => {
			return { label: el };
		});
	}
};
</script>
