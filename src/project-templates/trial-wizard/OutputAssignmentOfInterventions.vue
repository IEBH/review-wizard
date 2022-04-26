<template>
	<div>
		<p>
			{{ selectRandom(["Eligible participants were randomly assigned"]) }}
			{{ data.ratioRandomization ? data.ratioRandomization : "BLANK" }}
			{{ selectRandom(["to the"]) }}
			{{ interventionAndControl }},
			{{ selectRandom(["using"]) }}
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
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "OutputAssignmentOfInterventions",
	mixins: [OutputMixin, deepstreamMixin("interventions")],
	computed: {
		interventionAndControl() {
			if (
				(!this.interventions.interventions ||
					this.interventions.interventions.length < 1) &&
				(!this.interventions.control || this.interventions.control.length < 1)
			) {
				return "BLANK";
			}
			let array = this.mapGroupNames(this.interventions.interventions).concat(
				this.mapGroupNames(this.interventions.control)
			);
			return this.joinArrayWithAnd(array);
		}
	},
	methods: {
		mapGroupNames(groups) {
			if (!groups || groups.length < 1) {
				return [];
			}
			return groups.map(group => `${group.name} group`);
		}
	},
	props: {
		data: Object
	}
};
</script>
