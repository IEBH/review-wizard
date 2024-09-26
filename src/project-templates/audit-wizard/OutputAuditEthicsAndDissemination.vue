<template>
	<div>
		<p>
            <span v-if="$tera.state.researchEthicsApproval && $tera.state.researchEthicsApproval.length">
				{{
					selectRandom([
						"Ethics will be obtained via ",
						"Ethics will be acquired through ",
						"Approval for ethics will be obtained through ",
						"Ethics will be approved through "
					])
				}}
			</span>
			<span v-if="$tera.state.researchEthicsApproval && $tera.state.researchEthicsApproval.length">
                {{ $tera.state.researchEthicsApproval + "."}}
            </span>

            <span v-if="$tera.state.dataStorage && $tera.state.dataStorage.length">
				{{
					selectRandom([
						"The data will be safely stored in ",
						"Secure storage of the data will take place in ",
						"The storage of the data will be done securely in ",
						"The data is planned to be securely stored within "
					])
				}}
			</span>
			<span v-if="$tera.state.dataStorage && $tera.state.dataStorage.length">
                {{ $tera.state.dataStorage + "."}}
            </span>

			<span v-if="$tera.state.presentationPlans && $tera.state.presentationPlans.length">
				{{
					selectRandom([
						"The plans for presentation, publication, and dissemination include ",
						"The presentation, publication, and dissemination plans consist of ",
						"The presentation, publication, and dissemination plans include the following: ",
						"The strategy for presentation, publication, and dissemination involves "
					])
				}}
			</span>
			<span v-if="$tera.state.presentationPlans && $tera.state.presentationPlans.length">
                {{ $tera.state.presentationPlans + "."}}
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
