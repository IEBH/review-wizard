<template>
	<div>
		<h1>Ethics And Dissemination</h1>

		<!--Change: placeholder="Plans for seeking research ethics committee/institutional review board (REC/IRB) approval"-->
		<InputTextMultiLine
			question="What plans are there to obtain research ethics approval?"
			placeholder="e.g. Ethics will be obtained via Bond University Human Ethics Committee"
			:value="ethicsAndDissemination.approval"
			@input="updateField('approval', $event)"
		/>

		<!--Change: placeholder="...(eg, investigators, REC/IRBs, trial participants, trial registries, journals, regulators)"-->
		<InputTextMultiLine
			question="What plans will be used if amendments are made to the study protocol?"
			placeholder="e.g. Plans for communicating important protocol modifications (eg, changes to eligibility criteria, outcomes, analyses) to relevant parties (eg, investigators, trial participants, trial registries and the ethics committee)"
			:value="ethicsAndDissemination.protocol"
			@input="updateField('protocol', $event)"
		/>

		<!--New added-->
		<InputSelectDropdown
			question="Who was responsible for getting consent and/or assent be obtained?"
			:options="personOptions"
			:value="ethicsAndDissemination.responsiblePerson"
			@input="updateField('responsiblePerson', $event)"
		/>

		<!--<InputTextMultiLine
			question="How will consent and/or assent be obtained "
			placeholder="Who will obtain informed consent or assent from potential trial participants or authorised surrogates, and how. Additional consent provisions for collection and use of participant data and biological specimens in ancillary studies, if applicable. "
			:value="ethicsAndDissemination.consent"
			@input="updateField('consent', $event)"
		/>-->

		<InputTextMultiLine
			question="How were consent and/or assent be obtained?"
			placeholder="e.g. Researchers will obtain informed consent from trial participants via written informed consent. Additional consent provisions for collection and use of participant data and biological specimens will also be collected. Additional consent will be obtained for participants undergoing Oral Food Challenge."
			:value="ethicsAndDissemination.consent"
			@input="updateField('consent', $event)"
		/>

		<!--Change: placeholder="Example: We planned to keep our data on password protected institutional computers that are only accessible to the study's statistician and data collection personnel and will delete all study data 5 years after the study has been completed. The study investigators and clinical staff will not be able to access the patient-level study data throughout the duration of the trial. All collection materials will be coded by ID only to prevent participant identification."-->
		<InputTextMultiLine
			question="How will confidentiality and study blinding be be maintained"
			placeholder="e.g. Data collected from participants as part of this research study will be stored on password protected institutional computers that are only accessible to the study's statistician and data collection personnel and study data collected will be kept for at least 5 years from the date of first publication. The study investigators and clinical staff will not be able to access the patient-level study data throughout the duration of the trial. To prevent participant identification, all collection materials will be coded using ID (deidentifed format)."
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
			placeholder="e.g. Financial and other competing interests for principal investigators for the overall trial and each study site "
			:value="ethicsAndDissemination.declaration"
			@input="updateField('declaration', $event)"
		/>

		<InputTextMultiLine
			question="How will access to study data be controlled "
			placeholder="e.g. Statement of who will have access to the final trial dataset, and disclosure of contractual agreements that limit such access for investigators "
			:value="ethicsAndDissemination.access"
			@input="updateField('access', $event)"
		/>

		<!--New added-->
		<InputTextSingleLine
			question="Consent form and other related documentation given to participants and authorised surrogates"
			placeholder="e.g. a consent form was given to the participants to sign"
			:value="ethicsAndDissemination.relatedDoc"
			@input="updateField('relatedDoc', $event)"
		/>

		<!--Change: placeholder="Provisions, if any, for ancillary and post-trial care, and for compensation to those who suffer harm from trial participation. Write a statement of how participants who require post study care will be managed. (e.g. Long term adverse event, ongoing treatment, effective treatment being offered to control participants)"-->
		<InputTextMultiLine
			question="How will ancillary and post-trial care be arranged "
			placeholder="e.g. Participants who require long-term care/ those who do not respond to either intervention will be referred to their GP for alternative treatment options."
			:value="ethicsAndDissemination.care"
			@input="updateField('care', $event)"
		/>

		<!--placeholder="Plans for investigators and sponsor to communicate trial results to participants, healthcare professionals, the public, and other relevant groups (eg, via publication, reporting in results databases, or other data sharing arrangements), including any publication restrictions. Authorship eligibility guidelines and any intended use of professional writers. Plans, if any, for granting public access to the full protocol, participant-level dataset, and statistical code. "-->
		<InputTextMultiLine
			question="What is the dissemination policy for the trial "
			placeholder="e.g. Research findings from the trial will be disseminated through journal submissions, oral and poster presentations, and conference abstracts. 

			Plans for investigators to communicate trial results to participants, healthcare professionals, the public, media press release/s, and other relevant groups (e.g., thrpugh publication, reporting in results databases, or other data sharing arrangements), including any publication restrictions. Authorship eligibility guidelines, as well as any intended use of professional writers. Plans for granting public access to the full protocol via a not-for-profit online platform, where patients and their health providers can  collaborate on the food intervention. "
			:value="ethicsAndDissemination.dissemination"
			@input="updateField('dissemination', $event)"
		/>

		<!--New added-->
		<InputTextMultiLine
			question="Authorship eligibility guidelines and any intended use of professional writers"
			placeholder="e.g. the opinions expressed are those of the authors and not necessarily of the NIH or any other organization"
			:value="ethicsAndDissemination.guidelines"
			@input="updateField('guidelines', $event)"
		/>

		<InputTextMultiLine
			question="Specify the plans, if any, for granting public access to the full protocol, participant-level dataset, and statistical code "
			placeholder="e.g. the full protocol, data and statistical code is available on request"
			:value="ethicsAndDissemination.plans"
			@input="updateField('plans', $event)"
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
import InputTextMultiLine from "../../components/InputTextMultiLine.vue";

export default {
	components: { InputTextMultiLine },
	mixins: [deepstreamMixin("ethicsAndDissemination")],
	data() {
		return {
			outputComponent: OutputEthicsAndDissemination,
			personOptions: ["researcher", "doctor", "nurse", "other"]
		};
	}
};
</script>
