<template>
	<div>
		<p>
			There are {{ data.interventions.length }} intervention arms: the
			{{ joinArrayWithAnd(data.interventions.map(el => el.name + " group")) }}
		</p>
		<p v-for="(intervention, index) of data.interventions" :key="index">
			Participants in the {{ intervention.name }} group recieved
			{{ intervention.materials }}.
			<span v-if="intervention.instructions"
				>They were instructed to {{ intervention.instructions }}.</span
			>
		</p>
		<p>
			Treatment was discontinued or modified if
			{{ joinArrayWithOr(formatSelectMulti(data.discontinued)) }} occured.
		</p>
		<p>
			Adherence to intervention protocols were maintained by
			{{ data.adherenceMaintained }}. Adherence was monitored by
			{{ joinArrayWithAnd(formatSelectMulti(data.adherenceMonitored)) }}.
		</p>
		<p>
			Both groups received {{ data.allInstructions }}. Interventions such as:
			{{ data.prohibitedInterventions }} were not allowed for the duration of
			the study.
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
