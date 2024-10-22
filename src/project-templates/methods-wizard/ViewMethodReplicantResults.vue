<template>
	<div>
		<h1>Results</h1>
		<!-- <div v-if="($tera.state.metaReplicant && $tera.state.metaReplicant.file)"> -->
		<div v-if="($tera.state.metaResult && $tera.state.metaResult.userChange)">
			<div style="float: right;">
				<i v-if="$tera.state.metaResult.locked" class="pi pi-check"
					style="margin-right: 0.5rem;margin-bottom: 0.6rem;color: green;font-weight: 700;"
					aria-hidden="true">
				</i>
				<span v-if="$tera.state.metaResult.locked"
					style="margin-right: 1rem;margin-bottom: 0.6rem;color: green;font-weight: 700;">
					Locked
				</span>
				<Button :label="$tera.state.metaResult.locked ? 'Unlock' : 'Lock'"
					:icon="$tera.state.metaResult.locked ? 'pi pi-lock-open' : 'pi pi-lock'" class="p-button-info"
					@click="onLockChange()" />
			</div>

			<InputEditorMultiline question="result" :placeholder="placeholder"
				v-model="$tera.state.metaResult.userChange" />
		</div>
		<!-- <button @click="refresh">Click Here</button> -->
		<!-- PrimeVue Dialog -->
		<Dialog :visible="confirmDialogVisible" modal header="Caution" :style="{ width: '32rem' }">
			<div class="flex">
				<Button icon="pi pi-exclamation-triangle" class="p-button-danger btnStyles" />
				<span icon="pi pi-exclamation-triangle" class="text-surface-500 dark:text-surface-400 block mb-8">This
					will override your changes. Do you wish
					to proceed?</span>
			</div>
			<div class="divStyle">
				<Button type="button" label="Cancel" class="p-button-info"
					@click="confirmDialogVisible = false"></Button>
				<Button type="button" label="Yes, Proceed" class="p-button-danger"
					@click="lockChangeConfirmed()"></Button>
			</div>
		</Dialog>
	</div>
</template>

<script>
import InputEditorMultiline from "@/components/InputEditorMultiline.vue";
import translations from '@/lang/en.json';
import Button from "primevue/button";
import Dialog from 'primevue/dialog';

export default {
	components: {
		InputEditorMultiline,
		Button,
		Dialog
	},
	data() {
		return {
			placeholder: 'Replicant Results',
			translations,
			confirmDialogVisible: false,
			regeneratedValue: ''
		};
	},
	mounted() {
		if (this.$tera.state.metaResult.locked == false || (this.$tera.state.metaResult.locked && this.$tera.state.metaResult.userChange == "")) {
			this.$tera.state.metaResult.userChange = "";
			console.log("Here", this.$tera.state.metaResult.locked, this.$tera.state.metaResult.userChange)
		}
		this.combinedContent();
	},
	watch: {
		'this.$tera.state.detable': {
			handler(newVal, oldVal) {
				console.log('Detable changed:', newVal, oldVal);
				this.combinedContent();
			},
			deep: true,
			immediate: true
		}
	},
	computed: {
		combinedContent_cal() {
			const fileContent = this.$tera.state.metaReplicant.file || '';
			const rows = this.$tera.state.detable?.rows || [];
			const groupedData = this.groupByHeaders(rows);

			const dynamicContent = this.generateDynamicContent(groupedData);

			const studyCharacteristicsSection = dynamicContent
				? `\n\n<h3>Study Characteristics</h3>\n${dynamicContent}`
				: '';

			return fileContent + studyCharacteristicsSection;
		}
	},
	methods: {
		combinedContent() {
			const fileContent = this.$tera.state.metaReplicant.file || '';
			const rows = this.$tera.state.detable?.rows || [];
			const groupedData = this.groupByHeaders(rows);

			const dynamicContent = this.generateDynamicContent(groupedData);

			const studyCharacteristicsSection = dynamicContent
				? `\n\n<h3>Study Characteristics</h3>\n${dynamicContent}`
				: '';
			this.regeneratedValue = "";
			this.regeneratedValue = fileContent + '' + studyCharacteristicsSection;
			if (!this.$tera.state.metaResult.locked) {
				this.$tera.state.metaResult.userChange = this.regeneratedValue;
			} else if (this.$tera.state.metaResult.locked && this.$tera.state.metaResult.userChange == "") {
				this.$tera.state.metaResult.userChange = this.regeneratedValue;
			}
			const updateChangeStyle = this.$tera.state.metaResult.userChange;
			this.$tera.state.metaResult.userChange = updateChangeStyle.replace(/(\.)(\s*<h3>)/g, '$1<br><br>$2');
			// console.log(this.$tera.state.metaResult.userChange)
		},
		buttonClick() {
			console.log(JSON.stringify(this.$tera.state.detable));
		},
		refresh() {
			// window.location.reload();
			this.combinedContent();
		},
		groupByHeaders(rows) {
			const grouped = {};
			rows.forEach(row => {
				Object.keys(row).forEach(key => {
					if (!grouped[key]) grouped[key] = [];
					grouped[key].push(row[key]);
				});
			});
			return grouped;
		},
		generateDynamicContent(groupedData) {
			const templates = this.translations.templates;
			//normalize values (e.g. : '900Ml', '900 ml' -> '900 ml')
			function normalizeValue(value) {
				if (!value) return '';
				const match = value.match(/^(\d+\.?\d*)\s*(\w*)$/i);
				if (match) {
					const numberPart = match[1];
					const unitPart = match[2].toLowerCase();
					return `${numberPart} ${unitPart}`;
				}
				return value;
			}
			// function handling Other keys-user added using Other button
			function handleDynamicKey(key, values) {
				const normalizedValues = values.map(normalizeValue);
				const valueCounts = {};
				normalizedValues.forEach(value => valueCounts[value] = (valueCounts[value] || 0) + 1);
				const entries = Object.entries(valueCounts);

				return entries.map(([value, count]) => {
					if (value) {
						if (count > 1) {
							return `In ${count} studies the ${key} was ${value}.`;
						} else {
							return `In 1 study the ${key} was ${value}.`;
						}
					}

				}).join(' ');
			}

			// Handling 'Placebo', 'Sham device', 'Usual care', 'No treatment'
			function handleComparisons(groupedData) {
				const comparisonKeys = ['Placebo', 'Sham device', 'Usual care', 'No treatment'];
				const filteredValues = comparisonKeys
					.filter(key => groupedData[key] && groupedData[key].some(value => value))
					.map(key => key);

				if (filteredValues.length === 0) return '';
				if (filteredValues.length === 1) {
					return `The comparison was ${filteredValues[0]}.`;
				}
				const allButLast = filteredValues.slice(0, -1).join(', ');
				const lastItem = filteredValues[filteredValues.length - 1];
				return `The comparisons were ${allButLast} or ${lastItem}.`;
			}

			let content = Object.keys(groupedData).map(key => {
				const values = groupedData[key];
				if (templates[key] === "NA" || values.length === 0) {
					return '';
				}

				switch (key) {
					case 'Year': {
						const uniqueValues = [...new Set(values)].filter(Boolean);
						if (uniqueValues.length === 1) {
							return templates[key][1].replace('{{year}}', uniqueValues[0]);
						}
						const startYear = Math.min(...uniqueValues.map(Number));
						const endYear = Math.max(...uniqueValues.map(Number));
						return templates[key][0].replace('{{startYear}}', startYear).replace('{{endYear}}', endYear);
					}

					case 'Education level':
					case 'Duration of follow-up': {
						const filteredValues = values
							.filter(x => x != '' && !isNaN(Number(x)))
							.map(Number);

						if (filteredValues.length === 0) {
							break;
						}
						const minDuration = Math.min(...filteredValues);
						const maxDuration = Math.max(...filteredValues);
						return templates[key][0]
							.replace('{{minDuration}}', minDuration)
							.replace('{{maxDuration}}', maxDuration)
							.replace('{{studyCount}}', filteredValues.length);
						// const minDuration = Math.min(...values.filter(x => x != '').map(Number));
						// const maxDuration = Math.max(...values.map(Number));
						// console.log("Education", minDuration, maxDuration)
						// return templates[key][0]
						// 	.replace('{{minDuration}}', minDuration)
						// 	.replace('{{maxDuration}}', maxDuration)
						// 	.replace('{{studyCount}}', values.length);
					}

					case 'Age': {
						const filteredValues = values
							.filter(x => x != '' && !isNaN(Number(x)))
							.map(Number);

						if (filteredValues.length === 0) {
							break;
						}
						const minAge = Math.min(...filteredValues);
						const maxAge = Math.max(...filteredValues);
						return templates[key][0]
							.replace('{{minAge}}', minAge)
							.replace('{{maxAge}}', maxAge)
							.replace('{{studyCount}}', filteredValues.length);
						// const minAge = Math.min(...values.filter(x => x != '').map(Number));
						// const maxAge = Math.max(...values.map(Number));
						// return templates[key][0]
						// 	.replace('{{minAge}}', minAge)
						// 	.replace('{{maxAge}}', maxAge)
						// 	.replace('{{studyCount}}', values.length);
					}

					case 'Number of participants': {
						const filteredValues = values
							.filter(x => x != '' && !isNaN(Number(x)))
							.map(Number);

						if (filteredValues.length === 0) {
							break;
						}
						const minParticipants = Math.min(...filteredValues);
						const maxParticipants = Math.max(...filteredValues);
						return templates[key][0]
							.replace('{{minParticipants}}', minParticipants)
							.replace('{{maxParticipants}}', maxParticipants)
							.replace('{{studyCount}}', filteredValues.length);
						// const minParticipants = Math.min(...values.filter(x => x != '').map(Number));
						// const maxParticipants = Math.max(...values.map(Number));
						// return templates[key][0]
						// 	.replace('{{minParticipants}}', minParticipants)
						// 	.replace('{{maxParticipants}}', maxParticipants)
						// 	.replace('{{studyCount}}', values.length);
					}

					case 'Country':
					case 'Study design':
					case 'Setting': {
						const Counts = {};
						values.forEach(value => Counts[value] = (Counts[value] || 0) + 1);
						const sentences = Object.entries(Counts).map(([list, count]) => {
							if (list) {
								if (count > 1) {
									return templates[key][0]
										.replace('{{count}}', count)
										.replace('{{list}}', list);
								} else {
									return templates[key][1]
										.replace('{{list}}', list);
								}
							}
						}).filter(Boolean);

						if (sentences.length > 1) {
							const lastSentence = sentences.pop();
							return sentences.join(', ') + ' and ' + lastSentence + '.';
						}
						if (sentences.length == 0) {
							break;
						}
						return sentences[0] + '.';
					}

					case 'Type of intervention': {
						const interventionCounts = {};
						values.forEach(value => interventionCounts[value] = (interventionCounts[value] || 0) + 1);
						return Object.entries(interventionCounts).map(([intervention, count]) => {
							if (intervention) {
								if (count > 1) {
									return `${count} studies looked at ${intervention}`;
								} else {
									return `1 study looked at ${intervention}`;
								}
							}

						}).join(', ') + '.';
					}

					case 'Whether currently pregnant':
					case 'Smoker': {
						const valueCounts = { yes: 0, no: 0 };
						values.forEach(value => {
							if (value.toLowerCase() === 'yes') {
								valueCounts.yes += 1;
							} else if (value.toLowerCase() === 'no') {
								valueCounts.no += 1;
							}
						});
						const sentences = [];
						if (valueCounts['yes'] > 0) {
							if (valueCounts['yes'] === 1) {
								sentences.push(templates[key][0]
									.replace('{{count}}', valueCounts['yes']))
							} else {
								sentences.push(templates[key][1]
									.replace('{{count}}', valueCounts['yes']))
							}
						}
						if (valueCounts['no'] > 0) {
							if (valueCounts['no'] === 1) {
								sentences.push(templates[key][2]
									.replace('{{count}}', valueCounts['no']))
							} else {
								sentences.push(templates[key][3]
									.replace('{{count}}', valueCounts['no']))
							}
						}
						if (sentences.length == 0) {
							break;
						}
						return sentences.join('. ');
					}
					case 'Countryq': {
						console.log("check for value", values);
						break;
					}
					case 'Dose':
					case 'Dose(I)':
					case 'Frequency':
					case 'Frequency(I)':
					case 'Method of delivery':
					case 'Method of delivery(I)':
					case 'Who provided the intervention':
					case 'Who provided the intervention(I)':
					case 'How the intervention was provided':
					case 'How the intervention was provided(I)': {
						const normalizedValues = values.map(normalizeValue);
						const valueCounts = {};
						normalizedValues.forEach(value => valueCounts[value] = (valueCounts[value] || 0) + 1);
						const entries = Object.entries(valueCounts);

						const sentences = entries.map(([list, count]) => {
							if (list) {
								if (count > 1) {
									return templates[key][0]
										.replace('{{count}}', count)
										.replace('{{list}}', list);
								} else {
									return templates[key][1]
										.replace('{{count}}', count)
										.replace('{{list}}', list);
								}
							}
						}).filter(Boolean);
						// console.log("Doseeee", sentences);
						if (sentences.length == 0) {
							break;
						}
						if (sentences.length > 1) {
							const lastSentence = sentences.pop();
							return sentences.join(', ') + ' and ' + lastSentence + '.';
						}
						// key + "---" + 
						return sentences[0] + '.';
					}
					// {
					// 	return handleDynamicKey(key, values);
					// }

					case 'Placebo':
					case 'Sham device':
					case 'Usual care':
					case 'No treatment': {
						// return handleComparisons(groupedData);
						break;
					}
					case 'Gender': {
						const genderCounts = {
							male: 0,
							female: 0,
							both: 0,
							percentages: {}
						};

						values.forEach(value => {
							const lowerCaseValue = value.toLowerCase();
							if (lowerCaseValue.includes('%')) {
								if (!genderCounts.percentages[value]) {
									genderCounts.percentages[value] = 0;
								}
								genderCounts.percentages[value] += 1;
							} else if (lowerCaseValue === 'male/female' || lowerCaseValue === 'male and female' || lowerCaseValue == 'both') {
								// console.log("allllllllll",value,lowerCaseValue)
								genderCounts.both += 1;
							} else if (lowerCaseValue == 'male') {
								genderCounts.male += 1;
							} else if (lowerCaseValue == 'female') {
								genderCounts.female += 1;
							}
						});

						const sentences = [];

						const percentageSentences = Object.entries(genderCounts.percentages).map(([percent, count]) => {
							return `${count} stud${count > 1 ? 'ies' : 'y'} had ${percent}`;
						});
						if (percentageSentences.length > 0) {
							sentences.push(percentageSentences.join(', '));
						}

						if (genderCounts.male > 0) {
							sentences.push(`${genderCounts.male} stud${genderCounts.male > 1 ? 'ies' : 'y'} included males`);
						}

						if (genderCounts.female > 0) {
							sentences.push(`${genderCounts.female} stud${genderCounts.female > 1 ? 'ies' : 'y'} included females`);
						}

						if (genderCounts.both > 0) {
							sentences.push(`${genderCounts.both} stud${genderCounts.both > 1 ? 'ies' : 'y'} included both males and females`);
						}

						return sentences.join(', ') + '.';
					}
					default: {
						return handleDynamicKey(key, values);
					}
				}
			}).filter(Boolean).join('. ') + '.';
			const comparisonSentence = handleComparisons(groupedData);
			// console.log('hereeeeeeeeeee', comparisonSentence + content)
			if (comparisonSentence) {
				content = content + ' ' + comparisonSentence;
			}
			// return content;
			return content
				.replace(/ \./g, '.')
				.replace(/\.\./g, '.')
				.replace(/,\./g, '.')
				.replace(/ ,/g, ',')
				.replace(/\.\./g, '.');
		},
		onLockChange() {
			// console.log('Clicked Lock',this.$tera.state.metaResult.locked)
			if (this.$tera.state.metaResult.locked) {
				this.confirmDialogVisible = true;
			} else {
				this.$tera.state.metaResult.locked = !this.$tera.state.metaResult.locked
			}
		},
		lockChangeConfirmed() {
			console.log(this.$tera.state.metaResult.locked)
			this.$tera.state.metaResult.locked = !this.$tera.state.metaResult.locked;
			this.combinedContent();
			this.confirmDialogVisible = false;
		},
		lockChangeCancelled() {
			this.confirmDialogVisible = false;
		},



	}
};
</script>
<style>
.btnStyles {
	cursor: inherit !important;
	background: transparent !important;
	color: red !important;
	width: 43px !important;
	height: 20px !important;
	border-color: transparent !important;
}

.p-dialog-header-icon {
	display: none !important;
}

.divStyle {
	display: flex;
	justify-content: space-around;
	margin-top: 15px;
}
</style>