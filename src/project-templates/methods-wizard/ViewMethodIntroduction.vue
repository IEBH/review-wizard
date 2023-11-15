<template>
	<div>
		<h1>Introduction</h1>
		<!-- question="What is the Introduction?" -->
		<InputEditorMultiline :question="question" :placeholder="placeholder" :value="introduction.intro"
			@input="updateField('intro', $event)" />
	</div>
</template>
<script>
import deepstreamMixin from "@/mixins/DeepstreamMixin";
import OutputIntroduction from "./OutputIntroduction.vue";
import InputEditorMultiline from "@/components/InputEditorMultiline.vue";

export default {
	mixins: [deepstreamMixin("introduction")],
	components: {
		InputEditorMultiline
	},
	data() {
		return {
			outputComponent: OutputIntroduction,
			question: `<p>Usually Two to Five paragraphs</p>
			<p>Rationale: Describe the rationale for the review.<p>
			<p>Describe the problem being addressed and why it is important</p>
			<ul>
			<li>Describe the current state of knowledge and its uncertainties.</li>
			<li>Briefly describe how the intervention(s) or tests examined might work.</li>
			<li>If other systematic reviews addressing the same (or a largely similar) question are available, explain why the current review was considered necessary (for example, previous reviews are out of date or have discordant results; new review methods are available to address the review question; existing reviews are methodologically flawed; or the current review was commissioned to inform a guideline or policy for a particular organisation).</li>
			</ul>

			<p>Objectives: Provide an explicit statement of the objective(s) or question(s) the review addresses.<br>

			TIP: Use the Population, Intervention, Comparator, Outcome (PICO) framework or one of its variants (PO, PECO, etc) to describe the questions that will be addressed.<p>`,
			placeholder: `e.g. Blue-Light Therapy for Acne Vulgaris: A Systematic Review and Meta-Analysis
 
			Approximately 50 million Americans have acne vulgaris; it is the eighth most prevalent disease globally2 and one of the most common reasons for clinical consultations, including among primary care physicians and general practitioners (GPs). Among respondents to the James Lind Alliance’s Acne Priority Setting Partnership survey, for example, 65% reported having sought help for acne from their GP or family doctor (higher than from a dermatologist, 45%; a pharmacist, 34%; or any other source).
			
			Several effective pharmacological treatments for acne exist, such as topical benzyl peroxide and topical or oral retinoids and antibiotics. With antibiotics, however, there is increasing concern about the global development of resistance from the use of topical and oral antibiotics. The incidence of resistance in Proprionibacterium acnes has been increasing: more than 50% of P acnes strains are resistant to erythromycin in Egypt, France, Greece, Italy, Spain, and the United Kingdom and to clindamycin in Egypt, Greece, Hong Kong, Italy, and Spain. This resistance not only reduces the effectiveness of antibiotic treatment for acne but also can spread to untreated contacts and hence affect greater population antibiotic resistance patterns.
			
			Alternatives to antibiotics for acne treatment are thus desirable. One recent option is the use of various forms of light therapy, particularly blue-light therapy. Light in the 407- to 420-nm wavelength range has been shown to have a bactericidal effect on P acnes. The proposed mechanism is the excitation of bacterial porphyrins (coproporphyrin III and protoporphyrin IX) leading to the release of singlet oxygen and reactive free radicals that exert bactericidal effects.
			
			The US Food and Drug Administration (FDA) has approved light-emitting diode (LED) devices (blue, red, and blue/red light devices) for at-home use, and the market for light therapy devices for acne is growing: the first device received FDA approval in 2009, and 35 devices are on the market now. Patient interest in these devices is correspondingly increasing, with “Which physical therapies, including lasers and other light-based treatments, are safe and effective in treating acne?” being the top acne treatment uncertainty identified by patients responding to the James Lind Alliance survey, at 35% of respondents. Given the increased availability over-the-counter treatments, patient interest, and decreasing price—as well as the concerns about adverse events and antibiotic resistance caused by present treatments—interest is likely to keep increasing.
			
			Application of blue light does require considerable commitment by the user, however, with typical at-home devices being used twice a day for 30 to 60 minutes for 4 to 5 weeks. Therefore, evidence of the size and sustainability of any effect would be important to potential users. A 2016 Cochrane review of all types of light therapy for acne found 71 trials, with little evidence for most, but low certainty of evidence for green or blue lights. Further trials of blue light have been published since, however. We therefore undertook a systematic review of randomized controlled trials examining the effects of blue-light therapy for acne compared with any other nonlight therapy, in people of any age, sex, and acne severity. The present systematic review will also underpin a proposed entry for blue-light therapies for acne in the Handbook of Non-Drug Interventions (HANDI), which aims to promote effective nondrug treatments for general practice or primary care.`
		};
	}
};
</script>
