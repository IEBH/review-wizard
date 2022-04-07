<template>
	<div>
		<p>
			{{ selectRandom(["We performed a"]) }}
			{{ checkString(data.trialType) }} trial.
			{{ selectRandom(["The study power of the trial was"]) }}
			{{ checkString(data.studyPower) }}
			{{ selectRandom(["and the level of significance was"]) }}
			{{ checkString(data.levelOfSignificance) }}.
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
