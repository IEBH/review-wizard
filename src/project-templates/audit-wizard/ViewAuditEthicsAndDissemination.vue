<template>
    <div>
        <h1>Ethics and Dissemination</h1>
        <InputTextMultiLine
			question="Is there a need to obtain research ethics approval? If so when and how?"
			v-model="$tera.state.researchEthicsApproval"
            placeholder="e.g. Ethics will be obtained via Bond University Human Ethics Committee"
		/>
        <InputTextMultiLine
			question="Where and how will data be stored?"
			v-model="$tera.state.dataStorage"
            placeholder="e.g. Statement of who will have access to the final trial dataset, and disclosure of contractual agreements that limit such access for investigators"
		/>
        <InputTextMultiLine
			question="What are the plans for presentation, publication, and dissemination?"
			v-model="$tera.state.presentationPlans"
            placeholder="e.g. Research findings from the trial will be disseminated through journal submissions, oral and poster presentations, and conference abstracts. 
Plans for investigators to communicate trial results to participants, healthcare professionals, the public, media press release/s, and other relevant groups (e.g., thrpugh publication, reporting in results databases, or other data sharing arrangements), including any publication restrictions. Authorship eligibility guidelines, as well as any intended use of professional writers. Plans for granting public access to the full protocol via a not-for-profit online platform, where patients and their health providers can  collaborate on the food intervention."
		/>
        <BasePreviewOutput :component="outputComponent" />
    </div>
</template>
<script>
import InputTextMultiLine from "@/components/InputTextMultiLine.vue";
import OutputAuditEthicsAndDissemination from "./OutputAuditEthicsAndDissemination.vue";
export default {
    name: "ViewAuditEthicsAndDissemination",
    components: {
        InputTextMultiLine
    },
    data() {
		return {
			outputComponent: OutputAuditEthicsAndDissemination
		};
	}
}
</script>
<style scoped></style>