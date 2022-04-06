<template>
	<div>
		<p>

			{{
					selectRandom([
						"We obtained research ethics approval by ",
						"Research ethics approval was obtained by "

					])
			}}	
			{{ data.approval }}.

			{{
					selectRandom([
						"If the protocol changed we ",
						"If changes were made to the study protocol we "

					])
			}}	
			{{ data.protocol }}.

		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "ethicsAndDissemination",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>
