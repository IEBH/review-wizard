<template>
    <div>
        <h1>Ethics and Dissemination</h1>
        <InputTextMultiLine
			question="Is there a need to obtain research ethics approval? If so when and how?"
			v-model="$tera.state.researchEthicsApproval"
            placeholder="e.g. Ethics will be obtained via Bond University Human Ethics Committee"
		/>
        <InputTextMultiLine
			question="What plans will be used if amendments are made to the study protocol?"
			v-model="$tera.state.plansUsed"
            placeholder="e.g. Plans for communicating important protocol modifications (eg, changes to eligibility criteria, outcomes, analyses) to relevant parties (eg, investigators, trial participants, trial registries and the ethics committee)"
		/>
        <InputSelectMulti
                question="Who was responsible for getting consent and/or assent be obtained"
                :options="options.consentResponsibility"
                v-model="$tera.state.consentResponsibility"
        />
        <InputTextMultiLine
			question="How were consent and/or assent be obtained?"
			v-model="$tera.state.consentOrAscent"
            placeholder="e.g. Researchers will obtain informed consent from trial participants via written informed consent. 
Additional consent provisions for collection and use of participant data and biological specimens will also be collected. Additional consent will be obtained for participants undergoing Oral Food Challenge."
		/>

        <InputTextMultiLine
			question="How will confidentiality and study blinding be maintained?"
			v-model="$tera.state.confidentialityAndStudyBinding"
            placeholder="e.g. Data collected from participants as part of this research study will be stored on password protected institutional computers that are only accessible to the study’s statistician and data collection personnel and study data collected will be kept for at least 5 years from the date of first publication. The study investigators and clinical staff will not be able to access the patient-level study data throughout the duration of the trial. To prevent participant identification, all collection materials will be coded using ID (deidentifed format)."
		/>
        <InputTextMultiLine
			question="Declarations of interests"
			v-model="$tera.state.declarationOfInterests"
            placeholder="e.g. Financial and other competing interests for principal investigators for the overall trial and each study site"
		/>
        <InputTextMultiLine
			question="Where and how will data be stored?"
			v-model="$tera.state.dataStorage"
            placeholder="e.g. Statement of who will have access to the final trial dataset, and disclosure of contractual agreements that limit such access for investigators"
		/>
        <InputTextSingleLine
			question="Consent form and other related documentation given to participants and authorised surrogates"
			v-model="$tera.state.consentForm"
            placeholder="a consent form was given to the participants to sign"
		/>
        <InputTextMultiLine
			question="How will ancillary and post-trial care be arranged?"
			v-model="$tera.state.ancillaryAndPostTrial"
            placeholder="e.g. Participants who require long-term care/ those who do not respond to either intervention will be referred to their GP for alternative treatment options."
		/>
        <InputTextMultiLine
			question="What are the plans for presentation, publication, and dissemination?"
			v-model="$tera.state.presentationPlans"
            placeholder="e.g. Research findings from the trial will be disseminated through journal submissions, oral and poster presentations, and conference abstracts. 
Plans for investigators to communicate trial results to participants, healthcare professionals, the public, media press release/s, and other relevant groups (e.g., thrpugh publication, reporting in results databases, or other data sharing arrangements), including any publication restrictions. Authorship eligibility guidelines, as well as any intended use of professional writers. Plans for granting public access to the full protocol via a not-for-profit online platform, where patients and their health providers can  collaborate on the food intervention."
		/>

        <InputTextMultiLine
			question="Authorship eligibility guidelines and any intended use of professional writers"
			v-model="$tera.state.authorshipEligibilityGuidelines"
            placeholder="e.g. the opinions expressed are those of the authors and not necessarily of the NIH or any other organization."
		/>
        <InputTextMultiLine
			question="What are the plans for presentation, publication, and dissemination?"
			v-model="$tera.state.presentationPublicationDisseminationPlans"
            placeholder="e.g. the full protocol, data and statistical code is available on request"
		/>
    </div>
</template>
<script>
import InputTextMultiLine from "@/components/InputTextMultiLine.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
export default {
    name: "ViewAuditEthicsAndDissemination",
    components: {
        InputTextMultiLine,
        InputSelectMulti,
        InputTextSingleLine
    },
    data() {
		return {
			options: {
                consentResponsibility: [
                    { label: "researcher" },
                    { label: "doctor" },
                    { label: "nurse" },
                    { label: "other" }
                ]
            }
		};
	}
}
</script>
<style scoped></style>