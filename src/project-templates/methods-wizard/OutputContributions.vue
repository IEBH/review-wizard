<template>
	<div>
		<div v-if="$tera.state.conAuthors && outputData.length > 0">
			<span
				v-if="
					(element = findElement('Study conceptualization')) &&
						Object.keys(element).length != 0
				"
			>
				{{
					joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))
				}}
				{{ selectRandom(["conceived the idea.", "conceptualized the study."]) }}
			</span>
			<span
				v-if="
					(element = findElement('Designing the study')) &&
						Object.keys(element).length != 0
				"
			>
				{{
					selectRandom([
						` Authors ( ${joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))}) helped in study design.`,
						`${joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))} designed the study.`
					])
				}}
			</span>
			<span
				v-if="
					(element = findElement('Designing the search strategy')) &&
						Object.keys(element).length != 0
				"
			>
				{{
					joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))
				}}
				designed the search strategy.
			</span>
			<span
				v-if="
					(element = findElement('Assessing study eligibility')) &&
						Object.keys(element).length != 0
				"
			>
				<span
					v-if="
						(anotherElement = findElement('Extracting the data')) &&
							Object.keys(anotherElement).length != 0
					"
				>
					{{
						selectRandom([
							`Co-authors (${joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))}) assessed study eligibility`,
							`${joinArrayWithAnd(
								element.authors.map(el => nameToInitials(el))
							)} assessed study eligibility.`
						])
					}}
					{{ selectRandom([", ", " and "]) }}
					{{
						joinArrayWithAnd(anotherElement.authors.map(el => nameToInitials(el)))
					}}
					extracted data.
				</span>
				<span v-else>
					{{
						selectRandom([
							`Co-authors (${joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))}) assessed study eligibility.`,
							`${joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))} assessed study eligibility.`
						])
					}}
				</span>
			</span>
			<span
				v-if="
					(element = findElement('Extracting the data')) &&
						Object.keys(element).length != 0
				"
			>
				<span
					v-if="
						Object.keys(findElement('Assessing study eligibility')).length == 0
					"
				>
					{{
						joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))
					}}
					{{ selectRandom(["extracted data.", "helped in extracting data"]) }}
				</span>
			</span>
			<span
				v-if="
					(element = findElement('Analyzing the data')) &&
						Object.keys(element).length != 0
				"
			>
				<span
					v-if="
						(anotherElement = findElement('Drafting the manuscript')) &&
							Object.keys(anotherElement).length != 0
					"
				>
					{{ joinArrayWithAnd(element.authors.map(el => nameToInitials(el))) }}
					analyzed the data
					{{
						selectRandom([
							` and authors ${joinArrayWithAnd(anotherElement.authors.map(el => nameToInitials(el)))} wrote the first draft of the manuscript.`,
							` and ${joinArrayWithAnd(anotherElement.authors.map(el => nameToInitials(el)))} drafted the manuscript.`,
							` and ${joinArrayWithAnd(anotherElement.authors.map(el => nameToInitials(el)))} drafted the original manuscript.`
						])
					}}
				</span>
				<span v-else>
					{{
						joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))
					}}
					analyzed the data.
				</span>
			</span>
			<span
				v-if="
					(element = findElement('Drafting the manuscript')) &&
						Object.keys(element).length != 0
				"
			>
				<span v-if="Object.keys(findElement('Analyzing the data')).length == 0">
					{{
						selectRandom([
							` Authors (${joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))}) wrote the first draft of the manuscript.`,
							` ${joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))} drafted the manuscript.`,
							` ${joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))} drafted the original manuscript.`
						])
					}}
				</span>
			</span>
			<span
				v-if="
					(element = findElement('Revising the manuscript')) &&
						Object.keys(element).length != 0
				"
			>
				{{
					selectRandom([
						`${joinArrayWithAnd(element.authors.map(el => nameToInitials(el)))} revised the paper.`,
						`${joinArrayWithAnd(
							element.authors.map(el => nameToInitials(el))
						)} contributed to the interpretation and subsequent edits of the manuscript.`
					])
				}}
			</span>
			<span v-for="(row, index) in newlyAddedContributions" :key="index">
				<span
					v-if="
						(element = findElement(row)) && Object.keys(element).length != 0
					"
				>
					Also,
					{{
						joinArrayWithAnd(
							element.authors.map(el => nameToInitials(el))
						)
					}}
					{{
						selectRandom([
							"contributed to ",
							"collabrated on ",
							"had an impact on "
						])
					}}
					{{ row }}.
				</span>
			</span>
		</div>
	</div>
</template>
<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputContributions",
	mixins: [OutputMixin],
	/*props: {
		//data: Object,
		contributionOptions: Array
	},*/
	data() {
		return {
			extractUnion: false,
			draftUnion: false,
			contributionOptions: [
				{ label: "Study conceptualization" },
				{ label: "Designing the study" },
				{ label: "Designing the search strategy" },
				{ label: "Assessing study eligibility" },
				{ label: "Extracting the data" },
				{ label: "Analyzing the data" },
				{ label: "Drafting the manuscript" },
				{ label: "Revising the manuscript" }
			]
		};
	},
	computed: {
		outputData() {
			let da = [];
			if (this.$tera.state.conAuthors.length > 0) {
				this.$tera.state.conAuthors.forEach(el => {
					if (el.author != "" && el.selectedOpt.length > 0) {
						da = this.dataBuild(da, el);
					}
				});
			}
			return da;
		},
		newlyAddedContributions() {
			let allLabels = [].concat(
				...this.$tera.state.conAuthors.map(item =>
					item.selectedOpt.map(opt => opt.label)
				)
			);
			let newlyAdded = allLabels.filter(
				labelA =>
					!this.contributionOptions.some(itemB => itemB.label === labelA)
					//!this.checkOptions(labelA)
			);
			return newlyAdded;
		}
	},
	methods: {
		/**
		 *
		 * @param {option : String, authors : Array} output
		 * @param {author : String, selectedOpt :Array} element
		 */
		dataBuild(output, element) {
			element.selectedOpt.forEach(opt => {
				let ifContains = false;
				if (output.length > 0) {
					output.forEach(op => {
						if (op.option == opt.label) {
							ifContains = true;
							op.authors.push(element.author);
						}
					});
				}
				if (ifContains == false) {
					output.push({ option: opt.label, authors: [element.author] });
				}
			});
			return output;
		},
		findElement(option) {
			let element = {};
			this.outputData.forEach(el => {
				if (el.option == option) {
					element = el;
				}
			});
			return element;
		}
	}
};
</script>
<style></style>
