<template>
	<div>
		<p v-if="data.isCommittee">
			{{
				selectRandom([
					"To monitor the progress of the study, a data monitoring committee (DMC) was set up at the initiation of the study to"
				])
			}}
			{{ data.committeeDetails ? data.committeeDetails : "BLANK" }}.
			{{
				data.committeeReporting ? capitalize(data.committeeReporting) : "BLANK"
			}}.
			{{ selectRandom(["The committee comprised"]) }}
			{{ data.committeeComposition ? data.committeeComposition : "BLANK" }}.
			{{ selectRandom(["Further details can be found at"]) }}
			{{ data.committeeLink ? data.committeeLink : "BLANK" }}.
		</p>

		<p v-if="!data.isCommittee">
			{{
				selectRandom([
					"A data monitoring committee (DMC) was not set up for this study because"
				])
			}}
			{{
				data.committeeNotSetUpReasons ? data.committeeNotSetUpReasons : "BLANK"
			}}.
		</p>

		<p v-if="data.isInterimAnalysis">
			{{ selectRandom(["Interim analysis was planned to be conducted at"]) }}
			{{
				data.interimAnalysisTimePoints
					? data.interimAnalysisTimePoints
					: "BLANK"
			}}.
			{{
				selectRandom([
					"Results from the interim analysis were made available to the"
				])
			}}
			{{ joinArrayWithAnd(formatSelectMulti(interimResultsAvailable)) }}.
			{{ selectRandom(["The study could be stopped if"]) }}
			{{ data.earlyStop ? data.earlyStop : "BLANK" }}.
			{{
				selectRandom([
					"A final decision on terminating the study was to be made by the"
				])
			}}
			{{ joinArrayWithOr(formatSelectMulti(data.finalDecisionOnTermination)) }}.
		</p>

		<p v-if="!data.isInterimAnalysis">
			{{ selectRandom(["Interim analysis was not planned because"]) }}
			{{
				data.interimNotConductedReasons
					? data.interimNotConductedReasons
					: "BLANK"
			}}.
		</p>

		<p>
			{{ selectRandom(["Adverse events were monitored"]) }}
			{{ data.adverseEventsMonitored ? data.adverseEventsMonitored : "BLANK" }}.
		</p>

		<p>
			{{ selectRandom(["Trial auditing was planned"]) }}
			{{ data.trialAuditing ? data.trialAuditing : "BLANK" }}.
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputInterventions",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>
