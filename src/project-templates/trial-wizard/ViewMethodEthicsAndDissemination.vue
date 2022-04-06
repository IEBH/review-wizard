<template>
	<div>
		<h1>Ethics And Dissemination</h1>

		<InputTextSingleLine
			question="What plans are there to obtain research ethics approval "
			placeholder="Plans for seeking research ethics committee/institutional review board (REC/IRB) approval"
			:value="ethicsAndDissemination.approval"
			@input="updateField('approval', $event)"
		/>
			<br>
		
		<InputTextSingleLine
			question="What plans will be used if amendments are made to the study protocol "
			placeholder="Plans for communicating important protocol modifications (eg, changes to eligibility criteria, outcomes, analyses) to relevant parties (eg, investigators, REC/IRBs, trial participants, trial registries, journals, regulators)"
			:value="ethicsAndDissemination.protocol"
			@input="updateField('protocol', $event)"
		/>
			<br>
	
		<InputTextSingleLine
			question="How will consent and/or assent be obtained "
			placeholder="Who will obtain informed consent or assent from potential trial participants or authorised surrogates, and how. Additional consent provisions for collection and use of participant data and biological specimens in ancillary studies, if applicable. "
			:value="ethicsAndDissemination.consent"
			@input="updateField('consent', $event)"
		/>
			<br>
		
		<InputTextSingleLine
			question="How will confidentiality be be maintained "
			placeholder="How personal information about potential and enrolled participants will be collected, shared, and maintained in order to protect confidentiality before, during, and after the trial. "
			:value="ethicsAndDissemination.confidentiality"
			@input="updateField('confidentiality', $event)"
		/>	
			<br>

		<InputTextSingleLine
			question="Are any declarations of interests needed "
			placeholder="Financial and other competing interests for principal investigators for the overall trial and each study site "
			:value="ethicsAndDissemination.consent"
			@input="updateField('consent', $event)"
		/>	
			<br>
	
		<InputTextSingleLine
			question="How will access to study data be controlled "
			placeholder="Statement of who will have access to the final trial dataset, and disclosure of contractual agreements that limit such access for investigators "
			:value="ethicsAndDissemination.access"
			@input="updateField('access', $event)"
		/>	
			<br>
	
		<InputTextSingleLine
			question="How will ancillary and post-trial care be arranged "
			placeholder="Provisions, if any, for ancillary and post-trial care, and for compensation to those who suffer harm from trial participation "
			:value="ethicsAndDissemination.care"
			@input="updateField('care', $event)"
		/>	
			<br>
	
		<InputTextSingleLine
			question="What is the dissemination policy for the trial "
			placeholder="Plans for investigators and sponsor to communicate trial results to participants, healthcare professionals, the public, and other relevant groups (eg, via publication, reporting in results databases, or other data sharing arrangements), including any publication restrictions. Authorship eligibility guidelines and any intended use of professional writers. Plans, if any, for granting public access to the full protocol, participant-level dataset, and statistical code. "
			:value="ethicsAndDissemination.dissemination"
			@input="updateField('dissemination', $event)"
		/>	
		

		<BasePreviewOutput
			:component="outputComponent"
			:data="ethicsAndDissemination"
		/>
	</div>
</template>

<script>
import OutputEthicsAndDissemination from "./OutputEthicsAndDissemination.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("ethicsAndDissemination")],
	data() {
		return {
			outputComponent: OutputEthicsAndDissemination
		};
	}
};
</script>
