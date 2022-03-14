<template>
	<div>
		<p>
					
			{{
					selectRandom([
						"The following diagram shows the flow of particpants through the trial. ",
						"The flow of particpants through the trial will follow the diagram shown below. "
					])
			}}	
			{{ data.participantTimeline }}.
		
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
