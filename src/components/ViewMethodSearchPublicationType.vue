<template>
	<div>
		<h1>Restrictions on Publication Type</h1>

		<InputSelectYesNo
			question="Were the search results restricted by publication type?"
			:value="search.isRestrictedByPublicationType"
			@input="updateField('isRestrictedByPublicationType', $event)"
		/>

		<InputSelectMulti
			v-if="search.isRestrictedByPublicationType"
			question="What publication types did you exclude?"
			:options="publicationTypesOptions"
			:value="search.excludedPublicationTypes"
			@input="updateField('excludedPublicationTypes', $event)"
		/>

		<InputSelectYesNo
			question="Were the search results restricted by language?"
			:value="search.isRestrictedByLanguage"
			@input="updateField('isRestrictedByLanguage', $event)"
		/>

		<InputSelectMulti
			v-if="search.isRestrictedByLanguage"
			question="What languages did you include?"
			:options="languageOptions"
			:value="search.includedLanguages"
			@input="updateField('includedLanguages', $event)"
		/>

		<PreviewOutput :component="outputComponent" :data="search" />
	</div>
</template>

<script>
import OutputSearchPublicationType from "./OutputSearchPublicationType.vue";
import PreviewOutput from "./PreviewOutput.vue";
import InputSelectYesNo from "./InputSelectYesNo.vue";
import InputSelectMulti from "./InputSelectMulti.vue";

import deepstreamMixin from "../mixins/DeepstreamMixin";

export default {
	name: "ViewMethodSearchDatabases",
	mixins: [deepstreamMixin("search")],
	components: {
		InputSelectYesNo,
		InputSelectMulti,
		PreviewOutput
	},
	data() {
		return {
			publicationTypesOptions: [
				{ label: "Conference abstracts" },
				{ label: "Theses" },
				{ label: "Articles in press" },
				{ label: "Books or book chapters" }
			],
			languageOptions: [
				{ label: "English" },
				{ label: "German" },
				{ label: "French" },
				{ label: "Italian" },
				{ label: "Spanish" },
				{ label: "Portuguese" },
				{ label: "Chinese" },
				{ label: "Japanese" },
				{ label: "Arabic" },
				{ label: "Swahili" },
				{ label: "Hindi" },
				{ label: "Dutch" },
				{ label: "Swiss" },
				{ label: "Norwegian" },
				{ label: "Swedish" }
			],
			outputComponent: OutputSearchPublicationType
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
