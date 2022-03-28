<template>
	<div>
		<p>

			{{
					selectRandom([
						"We used Power and Sample Size (PS) to conduct the calculations ",
						"We did the calculations using used Power and Sample Size (PS) from Vanderbilt University "

					])
			}}	
			{{ data.calculation }}.

		</p>

				<p>

			{{
					selectRandom([
						"We used Sealed envelope to conduct the calculations ",
						"We did the calculations using Sealed Envelope used Power and Sample Size (PS) from Vanderbilt University "

					])
			}}	
			{{ data.nonInf }}.

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
