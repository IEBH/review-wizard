<template>
	<div>
		<div v-if="$tera.state.conAuthors && outputData.length > 0">
			<span
				v-if="
					(element = findElement('Study conceptualization')) &&
						Object.keys(element).length != 0
				"
			>
				{{ formatAuthors(element.authors) }}
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
						` Authors ${formatAuthors(
							element.authors
						)} helped in study design.`,
						`${formatAuthors(element.authors)} designed the study.`
					])
				}}
			</span>
			<span
				v-if="
					(element = findElement('Designing the search strategy')) &&
						Object.keys(element).length != 0
				"
			>
				{{ formatAuthors(element.authors) }} designed the search strategy.
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
							`Co-authors ${formatAuthors(
								element.authors
							)} assessed study eligibility`,
							`${formatAuthors(element.authors)} assessed study eligibility.`
						])
					}}
					{{ selectRandom([", ", " and "]) }}
					{{ formatAuthors(anotherElement.authors) }} extracted data.
				</span>
				<span v-else>
					{{
						selectRandom([
							`Co-authors ${formatAuthors(
								element.authors
							)} assessed study eligibility.`,
							`${formatAuthors(element.authors)} assessed study eligibility.`
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
					{{ formatAuthors(element.authors) }}
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
					{{ formatAuthors(element.authors) }}
					analyzed the data
					{{
						selectRandom([
							` and authors ${formatAuthors(
								anotherElement.authors
							)} wrote the first draft of the manuscript.`,
							` and ${formatAuthors(
								anotherElement.authors
							)} drafted the manuscript.`,
							` and ${formatAuthors(
								anotherElement.authors
							)} drafted the original manuscript.`
						])
					}}
				</span>
				<span v-else>
					{{ formatAuthors(element.authors) }}
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
							` Authors ${formatAuthors(
								element.authors
							)} wrote the first draft of the manuscript.`,
							` ${formatAuthors(element.authors)} drafted the manuscript.`,
							` ${formatAuthors(
								element.authors
							)} drafted the original manuscript.`
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
						`${formatAuthors(element.authors)} revised the paper.`,
						`${formatAuthors(
							element.authors
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
					Also, {{ formatAuthors(element.authors) }}
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
	props: {
		//data: Object,
		contributionOptions: Array
	},
	data() {
		return {
			extractUnion: false,
			draftUnion: false
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
		formatAuthors(authors) {
			return authors.map(el => this.nameToInitials(el)).join(", ");
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
