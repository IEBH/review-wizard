<template>
	<div>
		<p>
			<!-- Screeners -->
			{{
				selectRandom([
					capitalize(numberToWord(data.numberOfTitleAbstractScreeners)) +
						" review authors (" +
						formatSelectMulti(data.titleAbstractScreeners)
							.map(el => nameToInitials(el))
							.join(", ") +
						") independently screened the titles and abstracts against the inclusion criteria.",
					"Screening by title and abstract was conducted by " +
						numberToWord(data.numberOfTitleAbstractScreeners) +
						" authors independently.",
					"Screening by title and abstract was conducted by " +
						joinArrayWithAnd(
							formatSelectMulti(data.titleAbstractScreeners).map(el =>
								nameToInitials(el)
							)
						) +
						" independently.",
					"Articles were screened by title and abstract, by " +
						numberToWord(data.numberOfTitleAbstractScreeners) +
						" authors independently.",
					"Search results were screened for eligibility by " +
						numberToWord(data.numberOfTitleAbstractScreeners) +
						" authors independently."
				])
			}}
			{{
				selectRandom([
					"One review author (" +
						nameToInitials(data.fullTextRetrivalAuthor) +
						") retrieved full-text, and " +
						numberToWord(data.numberOfFullTextScreeners) +
						" authors (" +
						formatSelectMulti(data.fullTextScreeners)
							.map(el => nameToInitials(el))
							.join(", ") +
						") screened the full-texts for inclusion.",
					"For articles eligible after screening, full texts were retrieved by " +
						nameToInitials(data.fullTextRetrivalAuthor) +
						", which were reviewed by " +
						joinArrayWithAnd(
							formatSelectMulti(data.fullTextScreeners).map(el =>
								nameToInitials(el)
							)
						) +
						".",
					"After title and abstract screening, full texts were retrieved for the remaining articles. " +
						capitalize(numberToWord(data.numberOfFullTextScreeners)) +
						" authors (" +
						formatSelectMulti(data.fullTextScreeners)
							.map(el => nameToInitials(el))
							.join(", ") +
						") reviewed the full texts against the inclusion criteria."
				])
			}}
			<!-- Discrepancies -->
			Discrepancies were resolved
			{{
				data.disputeResolution
					? joinArrayWithOr(
							formatSelectMulti(data.disputeResolution)
					  ).toLowerCase()
					: "BLANK"
			}}.
			<!-- PRISMA -->
			{{
				data.isPrismaFlowDiagram
					? selectRandom([
							"The selection process was recorded in sufficient detail to complete a PRISMA flow diagram (see Figure X)".concat(
								data.isExcludedFullTextInAppendix
									? " and a list of excluded (full-text) studies with reasons for exclusions (see Appendix A)."
									: "."
							),
							selectRandom([
								"The screening and inclusion process is shown in Figure X. ",
								"The screening process is summarised in Figure X. ",
								"Figure X shows the PRISMA flow diagram for the selection process. "
							]).concat(
								data.isExcludedFullTextInAppendix
									? "Excluded articles and reasons for exclusion are listed in Appendix A."
									: ""
							)
					  ])
					: ""
			}}
		</p>
	</div>
</template>

<script>
import OutputMixin from "../../mixins/OutputMixin.js";
export default {
	name: "OutputScreening",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
