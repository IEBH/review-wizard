<template>
	<div>
		<h1>Eligibility Criteria (PICOST)</h1>
		<!-- P -->
		<InputTable
			question="What are the population/s, or problem/s (P), of your systematic review, (e.g. older people with diabetes)."
			v-model="$tera.state.population"
			columnHeader="Population"
			:isSelectButton="true"
			:inclusion="true"
			:type="false"
			:description="false"
			:examples="true"
			mainPlaceholder="e.g. participants of any age, sex, and severity of acne"
		/>

		<!-- I -->
		<InputTable
			question="What are the intervention/s (I) of your systematic review, (e.g. metformin)."
			v-model="$tera.state.intervention"
			columnHeader="Intervention"
			:isSelectButton="true"
			:inclusion="true"
			:type="false"
			:description="false"
			:examples="true"
			mainPlaceholder="e.g. light treatment of restricted wavelength, in which blue light was a major component"
		/>

		<!-- C -->
		<InputTable
			question="What are the comparators (C) that the intervention will be compared against (e.g. no treatment)"
			v-model="$tera.state.comparator"
			columnHeader="Comparator"
			:isSelectButton="true"
			:inclusion="true"
			:type="false"
			:description="false"
			:examples="true"
			mainPlaceholder="e.g any intervention other than light"
			examplePlaceholder="e.g. placebo; topical agents such as retinoids, benzoyl peroxide, or antibiotics; or oral antibiotics or isotretinoin"
		/>

		<!-- O -->
		<InputTable
			question="What are the outcomes (O) you will be looking for (e.g. reduced hospitalization, improved quality of life, mortality)"
			v-model="$tera.state.outcomes"
			columnHeader="Outcome"
			:isSelectButton="false"
			:inclusion="true"
			:type="true"
			:description="true"
			:examples="true"
			mainPlaceholder="e.g. investigator-assessed change in acne severity"
		/>

		<!-- S -->
		<InputTable
			question="What is the setting (S) you require the research to be conducted in (optional)"
			v-model="$tera.state.setting"
			columnHeader="Setting"
			:isSelectButton="true"
			:inclusion="true"
			:type="false"
			:description="false"
			:examples="true"
			mainPlaceholder="e.g. the emergency department"
		/>

		<!-- T -->
		<InputSelectMulti
			question="What study types (T) will be included"
			:options="typesOptions"
			v-model="$tera.state.types"
		/>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputPicot from "./OutputPicot.vue";

import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "ViewMethodPicot",
	mixins: [deepstreamMixin("picot")],
	data() {
		return {
			typesOptions: [
				{ label: "Randomized Controlled Trials" },
				{ label: "Observational Studies (all types)" },
				{ label: "Cohort (longitudinal) Studies" },
				{ label: "Cohort Studies" },
				{ label: "Case-Control Studies" },
				{ label: "Before After Studies" },
				{ label: "Cross Sectional Studies" },
				{ label: "Surveys" },
				{ label: "Systematic Reviews (for scoping or umbrella reviews)" }
			],
			outputComponent: OutputPicot
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
