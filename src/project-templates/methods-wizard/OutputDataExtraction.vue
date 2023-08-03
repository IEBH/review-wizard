<template>
	<!-- eslint-disable prettier/prettier -->
	<div>
		<p>
			<!-- Generic output -->
			<span v-if="!data.optionalDetail">
				{{
					selectRandom([
						"A standardised form (initially piloted on "
							.concat(data.numberOfStudies ? numberToWord(data.numberOfStudies) : "BLANK")
							.concat(
								" included studies) was used for data extraction of characteristics of studies, outcomes and risk of bias."
							),
						"Study characteristics and outcomes data from each study were recorded in a data extraction form, which was initially piloted on "
							.concat(data.numberOfStudies ? numberToWord(data.numberOfStudies) : "BLANK")
							.concat(" studies.")
					])
				}}
			</span>
			<!-- If user is specifying more detail -->
			<span v-else>
				{{
					selectRandom([
						"We used a data extraction form for study characteristics and outcome data, which was piloted on "
							.concat(data.numberOfStudies ? capitalize(numberToWord(data.numberOfStudies)) : "BLANK")
							.concat(" studies in the review."),
						"A standardised form (initially piloted on "
							.concat(data.numberOfStudies ? numberToWord(data.numberOfStudies) : "BLANK")
							.concat(" included studies) was used for data extraction of characteristics of studies, outcomes and risk of bias.")
					])
				}}
			</span>
			<span>
				{{
					selectRandom([
						""
							.concat(numberOfExtractors ? capitalize(numberToWord(numberOfExtractors)) : "BLANK")
							.concat(
								` study authors (${extractionAuthorInitials}) extracted the following data from included studies:`
							),
						"Data extraction was conducted by "
							.concat(numberOfExtractors ? numberToWord(numberOfExtractors) : "BLANK")
							.concat(` authors (${extractionAuthorInitials}). `)
							.concat(
								"The following data for study characteristics and outcomes were extracted from each included study:"
							)
					])
				}}
			</span>
		</p>
		<!-- Optional Details -->
		<p v-if="data.optionalDetail">
			<ul v-if="randomNumber < 0.5">
				<li>types: {{types}}</li>
				<li>methods: {{methods}}</li>
				<li>participants: {{participants}}</li>
				<li>interventions and comparators: {{interventions}}, type of comparator, {{comparators}}</li>
				<li>outcomes: {{primaryOutcomes}}, {{secondaryOutcomes}}</li>
			</ul>
			<ul v-else>
				<li>Types of studies: {{types}}</li>
				<li>Methods that the study used: {{methods}}</li>
				<li>The intervention/s of interest: {{interventions}} and the comparator/s used: {{comparators}}</li>
				<li>Characteristics of the participants studies included: {{participants}}</li>
				<li>Any reported outcomes of interest, such as: {{primaryOutcomes}}, {{secondaryOutcomes}}</li>
			</ul>
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputDataExtraction",
	mixins: [OutputMixin],
	props: {
		data: Object
	},
	computed: {
		numberOfExtractors(){
			return this.data.extractionAuthors?.length;
		},
		randomNumber: function() {
			return Math.random();
		},
		extractionAuthorInitials: function() {
			return this.formatSelectMulti(this.data.extractionAuthors)
				.map(el => this.nameToInitials(el))
				.join(", ");
		},
		methods: function() {
			return this.formatSelectMulti(this.data.methods)
				.join(", ")
				.toLowerCase();
		},
		participants: function() {
			return this.formatSelectMulti(this.data.participants)
				.join(", ")
				.toLowerCase();
		},
		interventions: function() {
			return this.formatSelectMulti(this.data.interventions)
				.join(", ")
				.toLowerCase();
		},
		comparators: function() {
			return this.formatSelectMulti(this.data.comparators)
				.join(", ")
				.toLowerCase();
		},
		primaryOutcomes: function() {
			return this.listOutcomesWithExample(
				this.data.outcomes,
				true
			);
		},
		secondaryOutcomes: function() {
			return this.listOutcomesWithExample(
				this.data.outcomes,
				false
			);
		},
		types: function() {
			return this.formatSelectMulti(this.data.types)
				.join(", ")
				.toLowerCase();
		},
	},
	methods: {
		listOutcomesWithExample(data, primary = true) {
			if (data) {
				const filteredArray = primary
					? data.filter(el => el.type)
					: data.filter(el => !el.type);
				// If there is at least one main input specified
				if (filteredArray.some(el => el.main)) {
					const mappedArray = filteredArray.map(el => {
						if (el.main) {
							return (
								el.main.trim() +
								(el.description ? `; ${el.description.trim()}` : "") +
								(el.examples ? ` (e.g. ${el.examples.trim()})` : "") +
								(primary ? " (primary outcome)" : " (secondary outcome)")
							);
						}
					});
					return this.joinArrayWithOr(mappedArray);
				} else {
					return "BLANK";
				}
			} else {
				return "BLANK";
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
