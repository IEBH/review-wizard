<template>
	<div>
		<p>
			<span v-if="$tera.state.plannedSampleSize && $tera.state.plannedSampleSize.length">
				{{
					selectRandom([
						"The planned sample size is ",
						"The sample size planned is ",
						"The projected sample size is ",
						"The sample size for this study is "
					])
				}}
			</span>
			<span v-if="$tera.state.plannedSampleSize && $tera.state.plannedSampleSize.length">
                {{ $tera.state.plannedSampleSize + "."}}
            </span>
			
		</p>
    	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputAuditSampleSize",
	mixins: [OutputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
