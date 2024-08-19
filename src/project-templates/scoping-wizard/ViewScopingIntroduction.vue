<template>
	<div>
		<h1>Introduction</h1>
		<InputTextSingleLine
			question="Where is the protocol registered OR Where do you intend to register it?"
			v-model="$tera.state.introprotocol"
			placeholder="https://www.crd.york.ac.uk/prospero/, https://osf.io/"
		/>
		<InputEditorMultiline
			:question="question"
			:placeholder="placeholder"
			v-model="$tera.state.intro"
		/>
	</div>
</template>
<script>
import InputEditorMultiline from "@/components/InputEditorMultiline.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";

export default {
	name: "ViewScopingIntroduction",
	components: {
		InputEditorMultiline,
		InputTextSingleLine
	},
	data() {
		return {
			// outputComponent: OutputIntroduction,
			question: `<p>Usually two to five paragraphs</p>
			<p>Rationale: Describe the rationale for the review.<p>
			<p>Describe the problem being addressed and why it is important</p>
			<ul>
			<li>Describe the current state of knowledge and its uncertainties.</li>
			<li>Briefly describe how the intervention(s) or tests examined might work.</li>
			<li>If other systematic reviews addressing the same (or a largely similar) question are available, explain why the current review was considered necessary (for example, previous reviews are out of date or have discordant results; new review methods are available to address the review question; existing reviews are methodologically flawed; or the current review was commissioned to inform a guideline or policy for a particular organisation).</li>
			</ul>

			<p>Objectives: Provide an explicit statement of the objective(s) or question(s) the review addresses.<br>

			TIP: Use the Population, Concepts, Context, Themes, Types (PCCTT) to describe the questions that will be addressed.<p>`,
			placeholder: `e.g. Overdiagnosis and medical overuse threaten the health of individuals and the sustainability of healthcare systems. Overdiagnosis and overuse, also described as being part of the wider problem of low-value care, provide limited or no benefit while bringing direct harms to both individuals (e.g. adverse events, the burden of unnecessary interventions, psychosocial impacts of labelling) and health systems (e.g. consumes scarce resources which could be spent addressing underuse and underdiagnosis, which indirectly harms patients).

			As healthcare spending increases worldwide, with a low correlation between increased costs and improved health, there is a growing recognition that a substantial proportion of spending is unnecessary and might be better spent on genuine need. The OECD estimates 20% of healthcare spending may be wasted. Tackling the issues of overdiagnosis and overuse could potentially reduce harm and prevent waste, making our health systems more sustainable and beneficial for individuals and societies. The problems of overdiagnosis and overuse are especially important in low and middle-income countries (LMICs) where health expenditure in relation to gross domestic product is significantly lower and such waste threatens both population health and the viability of public budgets. Further, addressing the problems of overdiagnosis and overuse of health services may assist in supporting the efforts to achieve sustainability, fairness, and equity of health systems worldwide, including universal health coverage as a central part of the UN Sustainable Development Goals.

			Overuse is defined as the provision of healthcare services for which the potential for harm exceeds the potential for benefit and is increasingly recognised around the world. Overdiagnosis happens when people receive a diagnostic label that causes them more harm than good, for example, when someone is diagnosed with cancer that would never go on to cause harm. The problems of overuse and overdiagnosis in LMIC settings are attracting increasing attention. Choosing Wisely, a clinician-led campaign aiming to reduce unnecessary tests, treatments and procedures, is growing internationally, and now many countries around the world, including LMICs, are adapting and implementing the campaign. A workshop at the 2019 international Preventing Overdiagnosis scientific conference called for more research and action on the problem in LMICs, country-specific scoping reviews are emerging, and there are plans to build a global network focussed on tackling overdiagnosis and overuse in LMICs. Against the backdrop of the pandemic, there are increasing calls to tackle the harm and waste of unneeded care in the post-COVID-19 recovery.

			In order to inform future agendas for research and action, identify gaps in knowledge, and help build a global network, a broad scoping of the relevant evidence is needed. Initial consultations with a small team of researchers, including those from LMIC settings, and preliminary searches of the literature, identified a potentially large amount of evidence. To our knowledge, there are no relevant scoping reviews that have previously mapped and summarised this evidence. To address this gap, we aim to conduct a series of scoping reviews of relevant evidence on overuse and overdiagnosis in LMICs.`
		};
	}
};
</script>
