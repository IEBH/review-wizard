<template>
	<div>
		<h1>Ethics And Dissemination</h1>

		<InputTextMultiLine
			question="What plans are there to obtain research ethics approval?"
			placeholder="Plans for seeking research ethics committee/institutional review board (REC/IRB) approval"
			:value="ethicsAndDissemination.approval"
			@input="updateField('approval', $event)"
		/>

		<InputTextMultiLine
			question="What plans will be used if amendments are made to the study protocol?"
			placeholder="Plans for communicating important protocol modifications (eg, changes to eligibility criteria, outcomes, analyses) to relevant parties (eg, investigators, REC/IRBs, trial participants, trial registries, journals, regulators)"
			:value="ethicsAndDissemination.protocol"
			@input="updateField('protocol', $event)"
		/>

		<InputTextMultiLine
			question="How will consent and/or assent be obtained "
			placeholder="Who will obtain informed consent or assent from potential trial participants or authorised surrogates, and how. Additional consent provisions for collection and use of participant data and biological specimens in ancillary studies, if applicable. "
			:value="ethicsAndDissemination.consent"
			@input="updateField('consent', $event)"
		/>

		<InputTextMultiLine
			question="How will confidentiality and study blinding be be maintained"
			placeholder="Example: We planned to keep our data on password protected institutional computers that are only accessible to the study’s statistician and data collection personnel and will delete all study data 5 years after the study has been completed. The study investigators and clinical staff will not be able to access the patient-level study data throughout the duration of the trial. All collection materials will be coded by ID only to prevent participant identification."
			:value="ethicsAndDissemination.confidentiality"
			@input="updateField('confidentiality', $event)"
		/>

		<i
			>All authors will need to fill out a
			<a href="https://www.icmje.org/disclosure-of-interest/"
				>declaration of interest</a
			>
			in preparation for submission for publication.</i
		>
		<InputTextMultiLine
			question="Declarations of interests "
			placeholder="Financial and other competing interests for principal investigators for the overall trial and each study site "
			:value="ethicsAndDissemination.declaration"
			@input="updateField('declaration', $event)"
		/>

		<InputTextMultiLine
			question="How will access to study data be controlled "
			placeholder="Statement of who will have access to the final trial dataset, and disclosure of contractual agreements that limit such access for investigators "
			:value="ethicsAndDissemination.access"
			@input="updateField('access', $event)"
		/>

		<InputTextMultiLine
			question="How will ancillary and post-trial care be arranged "
			placeholder="Provisions, if any, for ancillary and post-trial care, and for compensation to those who suffer harm from trial participation. Write a statement of how participants who require post study care will be managed. (e.g. Long term adverse event, ongoing treatment, effective treatment being offered to control participants)"
			:value="ethicsAndDissemination.care"
			@input="updateField('care', $event)"
		/>

		<InputTextMultiLine
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
