<template>
	<div>
		<p
			v-if="!data.isRestrictedByPublicationType && !data.isRestrictedByLanguage"
		>
			{{
				selectRandom([
					"No publication type or language restrictions were applied.",
					"We did not apply restrictions to publication type or language.",
					"All publication types and languages were included in the search."
				])
			}}
		</p>
		<p v-else>
			<span v-if="data.isRestrictedByPublicationType">
			{{
				selectRandom([
					"Restrictions were applied to the publication types.",
					"We only included studies of specific publication types.",
					"We restricted our search to exclude certain publication types."
				])
			}}				
			{{
					capitalize(
						joinArrayWithAnd(
							formatSelectMulti(data.excludedPublicationTypes)
						).toLowerCase()
					)
			}}
			{{
				selectRandom([
					" were excluded from the search.",
					" were purposefully removed from the serch results.",
					" did not appear in our search results."
				])
			}}				
			</span>
			<span v-else>
			{{
				selectRandom([
					"No publication type restrictions were applied.",
					"We did not apply restrictions to publication type.",
					"All publication types were included in the search."
				])
			}}				
			</span>
			<span v-if="data.isRestrictedByLanguage">
			{{
				selectRandom([
					"Only the following languages were included: ",
					"We only included studies of in the following languages: ",
					"We restricted our search to only include the following languages: "
				])
			}}	
				{{ joinArrayWithAnd(formatSelectMulti(data.includedLanguages)) }}.
			</span>
			<span v-else>
			{{
				selectRandom([
					"No language restrictions were applied.",
					"We did not apply restrictions to the language studies were published in.",
					"All languages were included in the search."
				])
			}}
				No restrictions on language were applied.
			</span>
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputSearchPublicationType",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
