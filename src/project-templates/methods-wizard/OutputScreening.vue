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
							formatSelectMulti($tera.state.titleAbstractScreeners).map(el =>
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
							formatSelectMulti($tera.state.titleAbstractScreeners).map(el =>
								nameToInitials(el)
							)
						) +
						". "
				])
			}}
			{{
				selectRandom([
					"One review author (" +
						formatSelectMulti($tera.state.fullTextRetrivalAuthor)
							.map(el => nameToInitials(el))
							.join(", ") +
						") retrieved full-text, and " +
						numberToWord(numberOfFullTextScreeners) +
						" authors (" +
						formatSelectMulti($tera.state.fullTextScreeners)
							.map(el => nameToInitials(el))
							.join(", ") +
						") screened the full-texts for inclusion.",
					"For articles eligible after screening, full texts were retrieved by " +
						joinArrayWithAnd(
							formatSelectMulti($tera.state.fullTextRetrivalAuthor).map(el =>
								nameToInitials(el)
							)
						) +
						", which were reviewed by " +
						joinArrayWithAnd(
							formatSelectMulti($tera.state.fullTextScreeners).map(el =>
								nameToInitials(el)
							)
						) +
						".",
					"After title and abstract screening, full texts were retrieved by " +
						joinArrayWithAnd(
							formatSelectMulti($tera.state.fullTextRetrivalAuthor).map(el =>
								nameToInitials(el)
							)
						) +
						" for the remaining articles. " +
						capitalize(numberToWord(numberOfFullTextScreeners)) +
						" authors (" +
						formatSelectMulti($tera.state.fullTextScreeners)
							.map(el => nameToInitials(el))
							.join(", ") +
						") reviewed the full texts against the inclusion criteria.",
					"Once the initial title/abstract screening was completed, the full texts of the included studies from that stage were reviewed by " +
						numberToWord(numberOfFullTextScreeners) +
						" authors (" +
						formatSelectMulti($tera.state.fullTextScreeners)
							.map(el => nameToInitials(el))
							.join(", ") +
						") to determine if they should be included."
				])
			}}
			<!--Citation search-->
			{{
				selectRandom([
					" After retrieving and screening full texts stage, authors (" +
						formatSelectMulti($tera.state.screenCitationSearchPeople)
							.map(el => nameToInitials(el))
							.join(", ") +
						") screened the citation search.",
					"The citation search is screened by " +
						joinArrayWithAnd(
							formatSelectMulti(
								$tera.state.screenCitationSearchPeople
							).map(el => nameToInitials(el))
						) +
						"."
				])
			}}
			<!--Trial registries-->
			{{
				selectRandom([
					"All the trial registries are screened by " +
						joinArrayWithAnd(
							formatSelectMulti($tera.state.screenTrialRegisPeople).map(el =>
								nameToInitials(el)
							)
						) +
						".",
					"Authors (" +
						formatSelectMulti($tera.state.screenTrialRegisPeople)
							.map(el => nameToInitials(el))
							.join(", ") +
						" ) screened trial registries."
				])
			}}
			<!-- Discrepancies -->
			Discrepancies were resolved
			{{
				$tera.state.disputeResolution
					? joinArrayWithOr(
							formatSelectMulti($tera.state.disputeResolution)
					  ).toLowerCase()
					: "BLANK"
			}}.
			<!-- Screening Tools -->
			<!-- Screening Tools -->
			<span v-if="$tera.state.screeningToolsSelected.length">
					{{
						selectRandom([
							`We used ${joinArrayWithAnd(formatSelectMulti($tera.state.screeningToolsSelected))} to help screen the studies.`,
							`${joinArrayWithAnd(formatSelectMulti($tera.state.screeningToolsSelected))} was used to help assess study eligibity.`
						])
					}}
			</span>
			<!-- Automation -->
			<span
				v-if="
					$tera.state.screenAutomationTools
						? $tera.state.screenAutomationTools.length
						: $tera.state.screenAutomationTools
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
						$tera.state.screenAutomationTools.map(
							tool => `${tool.label} (${tool.url})`
						)
					)
				}}.
			</span>
			<!-- PRISMA -->
			{{
				$tera.state.isPrismaFlowDiagram
					? selectRandom([
							"The selection process was recorded in sufficient detail to complete a PRISMA flow diagram (see Figure X)".concat(
								$tera.state.isExcludedFullTextInAppendix
									? " and a list of excluded (full-text) studies with reasons for exclusions (see Appendix A)."
									: "."
							),
							selectRandom([
								"The screening and inclusion process is shown in Figure X. ",
								"The screening process is summarised in Figure X. ",
								"Figure X shows the PRISMA flow diagram for the selection process. "
							]).concat(
								$tera.state.isExcludedFullTextInAppendix
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
	computed: {
		numberOfTitleAbstractScreeners() {
			return this.$tera.state.titleAbstractScreeners?.length;
		},
		numberOfFullTextScreeners() {
			return this.$tera.state.fullTextScreeners?.length;
		},
		titleAbstractScreenersInitials() {
			return this.formatSelectMulti(this.$tera.state.titleAbstractScreeners)
				.map(el => this.nameToInitials(el))
				.join(", ");
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
