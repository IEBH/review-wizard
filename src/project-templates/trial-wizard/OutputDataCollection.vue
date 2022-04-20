<template>
	<div>
		<p>
			{{ selectRandom(["We collected data by ", "Data was collected by "]) }}
			{{
				data.dataCollection
					? data.assignmentOfInterventions.sequenceGen
					: "BLANK"
			}}

			{{ selectRandom(["We managed the data by ", "Data was managed by "]) }}
			{{
				data.dataCollection
					? data.assignmentOfInterventions.sequenceGen
					: "BLANK"
			}}

			{{ selectRandom(["We analysed the data by ", "Data was analysed by "]) }}
			{{
				data.dataCollection
					? data.assignmentOfInterventions.sequenceGen
					: "BLANK"
			}}
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
