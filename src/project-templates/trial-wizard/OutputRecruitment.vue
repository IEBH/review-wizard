<template>
	<div>
		<p>

			{{
					selectRandom([
						"We recruited participants by ",
						"Participants were recruited by "

					])
			}}	
			{{ data.recruitment }}.

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
