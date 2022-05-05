<template>
	<div>
		<p>
			{{ selectRandom(["We performed a"]) }}
			{{
				data.trialType == "other"
					? checkString(data.trialTypeOther)
					: checkString(data.trialType)
			}}
			trial.
			{{ selectRandom(["The study power of the trial was"]) }}
			{{
				data.studyPower == "other"
					? checkString(data.studyPowerOther)
					: checkString(data.studyPower)
			}}
			{{ selectRandom(["and the level of significance was"]) }}
			{{
				data.levelOfSignificance == "other"
					? checkString(data.levelOfSignificanceOther)
					: checkString(data.levelOfSignificance)
			}}.
			{{ selectRandom(["We used a sample size of"]) }}
			{{ checkString(data.sampleSize) }}.
			{{ selectRandom(["The study was powered for"]) }}
			{{ checkString(data.effectSize) }}.
			{{
				selectRandom([
					"The expected proportion of participant drop-outs in the trial was"
				])
			}}
			{{ checkString(data.participantDropOuts) }}.
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputSampleSize",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>
