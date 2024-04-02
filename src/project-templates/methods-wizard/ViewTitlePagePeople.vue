<template>
	<div>
		<h1>People</h1>

		<InputTextSingleLineMulti
			question="Who are the authors in the study?"
			v-model="authors"
			placeholder="e.g. Justin Clark"
		/>

		<InputTextSingleLineMulti
			question="Who else helped with the study? (Acknowledgements)"
			v-model="acknowledgements"
			placeholder="e.g. Justin Clark"
		/>
	</div>
</template>
<script>
import InputTextSingleLineMulti from "@/components/InputTextSingleLineMulti.vue";
import { defaults } from "./settingdefaults";

export default {
	name: "ViewTitlePagePeople",

	components: {
		InputTextSingleLineMulti
	},
	data() {
		return {
			authors:
				this.$tera.state.author == undefined
					? this.$tera.setProjectStateDefaults(
							"author",
							defaults.titlepage.authors
					  )
					: this.$tera.state.author,
			acknowledgements:
				this.$tera.state.acknowledgements == undefined
					? this.$tera.setProjectStateDefaults(
							"acknowledgements",
							defaults.titlepage.acknowledgements
					  )
					: this.$tera.state.acknowledgements
		};
	}
	/*computed: {
		authors() {
			if (this.$tera.state.author == undefined) {
				this.$tera.setProjectStateDefaults(
					"author",
					defaults.titlepage.authors
				);
			}
			return this.$tera.state.author;
		},
		acknowledgements() {
			if (this.$tera.state.acknowledgements == undefined) {
				this.$tera.setProjectStateDefaults(
					"acknowledgements",
					defaults.titlepage.acknowledgements
				);
			}
			return this.$tera.state.acknowledgements;
		}
	}*/
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
