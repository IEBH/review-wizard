<template>
	<div>
		<p>
			<!-- Screeners -->
			{{
				selectRandom([
					capitalize(numberToWord(numberOfTitleAbstractScreeners)) +
						" review authors (" +
						titleAbstractScreenersInitials +
						") independently screened the titles and abstracts against the inclusion criteria.",

					"Screening by title and abstract was conducted by " +
						numberToWord(numberOfTitleAbstractScreeners) +
						" authors (" +
						titleAbstractScreenersInitials +
						") independently.",

					"Screening by title and abstract was conducted by " +
						joinArrayWithAnd(
							formatSelectMulti(data.titleAbstractScreeners).map(el =>
								nameToInitials(el)
							)
						) +
						" independently.",

					"Articles were screened by title and abstract, by " +
						numberToWord(numberOfTitleAbstractScreeners) +
						" authors (" +
						titleAbstractScreenersInitials +
						") independently.",

					"Search results were screened for eligibility by " +
						numberToWord(numberOfTitleAbstractScreeners) +
						" authors (" +
						titleAbstractScreenersInitials +
						") independently.",

					"References were screened independently against the eligibility criteria by " +
						joinArrayWithAnd(
							formatSelectMulti(data.titleAbstractScreeners).map(el =>
								nameToInitials(el)
							)
						) +
						". "
				])
			}}
			{{
				selectRandom([
					"One review author (" +
						formatSelectMulti(data.fullTextRetrivalAuthor)
							.map(el => nameToInitials(el))
							.join(", ") +
						") retrieved full-text, and " +
						numberToWord(numberOfFullTextScreeners) +
						" authors (" +
						formatSelectMulti(data.fullTextScreeners)
							.map(el => nameToInitials(el))
							.join(", ") +
						") screened the full-texts for inclusion.",
					"For articles eligible after screening, full texts were retrieved by " +
						joinArrayWithAnd(
							formatSelectMulti(data.fullTextRetrivalAuthor).map(el =>
								nameToInitials(el)
							)
						) +
						", which were reviewed by " +
						joinArrayWithAnd(
							formatSelectMulti(data.fullTextScreeners).map(el =>
								nameToInitials(el)
							)
						) +
						".",
					"After title and abstract screening, full texts were retrieved by " +
						joinArrayWithAnd(
							formatSelectMulti(data.fullTextRetrivalAuthor).map(el =>
								nameToInitials(el)
							)
						) +
						" for the remaining articles. " +
						capitalize(numberToWord(numberOfFullTextScreeners)) +
						" authors (" +
						formatSelectMulti(data.fullTextScreeners)
							.map(el => nameToInitials(el))
							.join(", ") +
						") reviewed the full texts against the inclusion criteria.",
					"Once the initial title/abstract screening was completed, the full texts of the included studies from that stage were reviewed by " +
						numberToWord(numberOfFullTextScreeners) +
						" authors (" +
						formatSelectMulti(data.fullTextScreeners)
							.map(el => nameToInitials(el))
							.join(", ") +
						") to determine if they should be included."
				])
			}}
			<!--Citation search-->
			{{
				selectRandom([
					" After retrieving and screening full texts stage, authors (" +
						formatSelectMulti(data.screenCitationSearchPeople)
							.map(el => nameToInitials(el))
							.join(", ") +
						") screened the citation search.",
					"The citation search is screened by " +
						joinArrayWithAnd(
							formatSelectMulti(data.screenCitationSearchPeople).map(el =>
								nameToInitials(el)
							)
						) +
						"."
				])
			}}
			<!--Trial registries-->
			{{
				selectRandom([
					"All the trial registries are screened by " +
						joinArrayWithAnd(
							formatSelectMulti(data.screenTrialRegisPeople).map(el =>
								nameToInitials(el)
							)
						) +
						".",
					"Authors (" +
						formatSelectMulti(data.screenTrialRegisPeople)
							.map(el => nameToInitials(el))
							.join(", ") +
						" ) screened trial registries."
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
			<!-- Automation -->
			<span
				v-if="
					data.screenAutomationTools
						? data.screenAutomationTools.length
						: data.screenAutomationTools
				"
			>
				{{
					selectRandom([
						"The following automation tools were used to screen articles ",
						"We used these automation tools to help with the screening of articles "
					])
				}}
				{{
					joinArrayWithAnd(
						data.screenAutomationTools.map(
							tool => `${tool.label} (${tool.url})`
						)
					)
				}}.
			</span>
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
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputScreening",
	mixins: [OutputMixin],
	props: {
		data: Object
	},
	computed: {
		numberOfTitleAbstractScreeners() {
			return this.data.titleAbstractScreeners?.length;
		},
		numberOfFullTextScreeners() {
			return this.data.fullTextScreeners?.length;
		},
		titleAbstractScreenersInitials() {
			return this.formatSelectMulti(this.data.titleAbstractScreeners)
				.map(el => this.nameToInitials(el))
				.join(", ");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
