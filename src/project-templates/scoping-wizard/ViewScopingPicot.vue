<template>
	<div>
		<h1>Eligibility Criteria (PCCTT)</h1>
		
		<InputTable
			question="What are the participants/population, or problems (P), of your scoping review (e.g. older people)."
			v-model="$tera.state.population"
			columnHeader="Population"
			:isSelectButton="true"
			:inclusion="true"
			:type="false"
			:description="false"
			:examples="true"
			mainPlaceholder="e.g. participants of any age, sex etc"
		/>
		<!-- I -->
		<InputTable
			question="What are the concepts (C) of your scoping review (e.g. overuse of medication)."
			v-model="$tera.state.concept"
			columnHeader="Concept"
			:isSelectButton="true"
			:inclusion="true"
			:type="false"
			:description="false"
			:examples="true"
			mainPlaceholder="e.g. overuse of medication"
		/>
		<!-- C -->
		<InputTable
			question="What is the context (C) of your scoping review (e.g. lower/middle income countries)."
			v-model="$tera.state.context"
			columnHeader="Context"
			:isSelectButton="true"
			:inclusion="true"
			:type="false"
			:description="false"
			:examples="true"
			mainPlaceholder="e.g lower/middle income countries"
			examplePlaceholder="e.g. low and middle-income countries (LMICs) where health expenditure in relation to gross domestic product is significantly lower"
		/>
		<!-- O -->
		<InputTable
			question="What are the themes (T) you will be looking for (e.g. drivers of overuse, complications, solutions)."
			v-model="$tera.state.theme"
			columnHeader="Theme"
			:isSelectButton="false"
			:inclusion="true"
			:type="true"
			:description="true"
			:examples="true"
			mainPlaceholder="e.g. drivers of overuse"
		/>
		<!-- T -->
		<InputSelectMulti
			question="What study types (T) will be included"
			v-model="$tera.state.types"
			:options="typesOptions"
		/>

        <InputSelectMulti
		    question="What grey literature, if any, will be included?"
			v-model="$tera.state.greyLiteraturesSelected" 
            :options = "greyLiteratureOptions"/>

		<BasePreviewOutput :component="outputComponent" />
	</div>
</template>

<script>
import OutputPicot from "./OutputPicot.vue";

export default {
	name: "ViewScopingPicot",
	data() {
		return {
			typesOptions: [
				{ label: "all study types"},
				{ label: "randomized controlled trials" },
				{ label: "observational studies (all types)" },
				{ label: "cohort (longitudinal) studies" },
				{ label: "cohort studies" },
				{ label: "case-control studies" },
				{ label: "before-after studies" },
				{ label: "cross-sectional studies" },
				{ label: "qualitative studies"},
				{ label: "surveys" }
			],
            greyLiteratureOptions: [
                { label: "no grey literature"},
                { label: "government reports"},
                { label: "news articles"},
                { label: "conference abstracts"},
                { label: "thesis and dissertations"},
				{ label: "registered trials"},
				{ label: "social media posts"}
            ],
			outputComponent: OutputPicot
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>