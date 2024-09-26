<template>
	<div>
		<p>
			<span v-if="$tera.state.plansForDataManagement && $tera.state.plansForDataManagement.length">
				{{
					selectRandom([
						"The data management plans include the following: ",
						"Data management plans consist of: ",
						"The plans for data management include: ",
						"Data management plans encompass the following: "
					])
				}}
			</span>
			<span v-if="$tera.state.plansForDataManagement && $tera.state.plansForDataManagement.length">
                {{ $tera.state.plansForDataManagement + "."}}
            </span>
            <span v-if="$tera.state.processesForDataQuality && $tera.state.processesForDataQuality.length">
				{{
					selectRandom([
						"The data quality was enhanced by: ",
						"The quality of the data was improved by: ",
						"The following measures improved data quality: ",
						"The quality of the data was increased by: "
					])
				}}
			</span>
			<span v-if="$tera.state.processesForDataQuality && $tera.state.processesForDataQuality.length">
                {{ $tera.state.processesForDataQuality + "."}}
            </span>
			<span v-if="$tera.state.statisticalEstimate && $tera.state.statisticalEstimate.length">
				{{
					selectRandom([
						"The statistical estimate that will be used for the primary audit analysis is ",
						"The primary audit analysis will use the statistical estimate of ",
						"The statistical estimate for the primary audit analysis is ",
						"For the primary audit analysis, the statistical estimate applied will be "
					])
				}}
			</span>
			<span v-if="$tera.state.statisticalEstimate && $tera.state.statisticalEstimate.length">
                {{ $tera.state.statisticalEstimate + "."}}
            </span>
		</p>
    	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputAuditDataCollectionManagementAndAnalysis",
	mixins: [OutputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
