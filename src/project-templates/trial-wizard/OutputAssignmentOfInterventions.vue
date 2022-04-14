<template>
	<div>
		<p>
			{{ selectRandom(["Eligible participants were randomly assigned"]) }}
			{{ data.ratioRandomization ? data.ratioRandomization : "BLANK" }}
			{{ selectRandom(["to the"]) }}
			<!-- TODO: Use intervention/control data -->
			<!-- {{ data.ratioRandomization ? data.ratioRandomization : "BLANK" }} -->
			{{ selectRandom(["group using"]) }}
			{{ joinArrayWithAnd(formatSelectMulti(data.sequenceGen)) }}.
			{{ selectRandom(["Allocation of concealment was achieved by"]) }}
			{{ data.concealment ? data.concealment : "BLANK" }}.
		</p>
		<p>
			{{ selectRandom(["Treatment assignment was blinded for"]) }}
			{{ joinArrayWithAnd(formatSelectMulti(data.blindedPeople)) }}
			{{ selectRandom(["throughout the duration of the study."]) }}
			{{ selectRandom(["Blinding was achieved by"]) }}
			{{ data.blindedMethod ? data.blindedMethod : "BLANK" }}.
			{{
				selectRandom(["Participants were unblinded for the following reasons:"])
			}}
			{{ joinArrayWithOr(formatSelectMulti(data.unblinding)) }}.
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
