<template>
	<div>
		<p v-if="data.components">
			<span v-if="data.components.length">
				The following components were included in the search string:
				{{ joinArrayWithAnd(formatSelectMulti(data.components)).toLowerCase() }}
			</span>
			<span v-if="data.specialist.length">
				This search string was constructed by [a/an]
				{{
					joinArrayWithAnd(formatSelectMulti(data.specialist)).toLowerCase()
				}}.
			</span>
			<span v-if="data.helper.length">
				[A/An]
				{{ joinArrayWithAnd(formatSelectMulti(data.helper)).toLowerCase() }}
				helped in the design of the search.
			</span>
			<span v-if="data.peerReviewer.length">
				The search strategy was peer-reviewed by [a/an]
				{{
					joinArrayWithAnd(formatSelectMulti(data.peerReviewer)).toLowerCase()
				}}
				according to PRESS guidelines.
			</span>
		</p>

		<p>
			{{ ` Authors (${designSearchStrategyAuthorsInitials}) ` }}
			designed and ran the statergy.
		</p>

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
				Restrictions were applied to the publication types.
				{{
					capitalize(
						joinArrayWithAnd(
							formatSelectMulti(data.excludedPublicationTypes)
						).toLowerCase()
					)
				}}
				were excluded from the search.
			</span>
			<span v-else>
				No publication type restrictions were applied.
			</span>
			<span v-if="data.isRestrictedByLanguage">
				We included studies in the following languages:
				{{ joinArrayWithAnd(formatSelectMulti(data.includedLanguages)) }}.
			</span>
			<span v-else>
				No restrictions on language were applied.
			</span>
		</p>

		<p>
			{{ ` Authors (${deduplicateResultsAuthorsInitials}) ` }}
			deduplicated the results.
		</p>

		<p>
			{{ selectRandom(["We also ", "Additionaly, we"]) }}
			{{
				joinArrayWithAnd(
					formatSelectMulti(data.supplementoryMethods)
				).toLowerCase()
			}}
		</p>

		<p>
			{{ ` Authors (${conductSSearchAuthorsInitials}) ` }}
			conducted the supplementary searches.
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputSearchStrategy",
	mixins: [OutputMixin],
	props: {
		data: Object
	},
	computed: {
		designSearchStrategyAuthorsInitials: function() {
			return this.formatSelectMulti(this.data.designSearchStrategyAuthors)
				.map(el => this.nameToInitials(el))
				.join(", ");
		},
		deduplicateResultsAuthorsInitials: function() {
			return this.formatSelectMulti(this.data.deduplicateResultsAuthors)
				.map(el => this.nameToInitials(el))
				.join(", ");
		},
		conductSSearchAuthorsInitials: function() {
			return this.formatSelectMulti(this.data.conductSSearchAuthors)
				.map(el => this.nameToInitials(el))
				.join(", ");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
