<template>
	<div>
		<p>

			{{
					selectRandom([
						"We obtained research ethics approval by ",
						"Research ethics approval was obtained by "

					])
			}}	
			{{ ethicsAndDissemination.approval }}.

			{{
					selectRandom([
						"If the protocol changed we ",
						"If changes were made to the study protocol we "

					])
			}}	
			{{ ethicsAndDissemination.protocol }}.

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
