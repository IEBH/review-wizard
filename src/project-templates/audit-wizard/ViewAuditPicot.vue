<template>
	<div>
		<h1>Eligibility Criteria (PICOST)</h1>
		<InputSelectMulti
                question="What age groups are eligible participants in?"
                :options="options.ageGroups"
                v-model="$tera.state.participantsRecruitedFrom"
        />
		<InputTextSingleLine
			question="What is the audit population? (give inclusion/exclusion criteria)"
			v-model="$tera.state.auditPopulation"
			placeholder="18-25 years"
		/>
		<InputSelectMulti
                question="What sexes are eligible for inclusion?"
                :options="options.sexes"
                v-model="$tera.state.sexes"
        />
		<InputSelectMulti
                question="What conditions are eligible for study?"
                :options="options.conditions"
                v-model="$tera.state.conditions"
        />
		<InputSelectMulti
                question="What severity of condition is eligible? (optional)"
                :options="options.severity"
                v-model="$tera.state.severity"
        />
		<InputSelectMulti
                question="What other factors are eligible for inclusion?"
                :options="options.inclusionFactors"
                v-model="$tera.state.inclusionFactors"
        />
		<InputSelectMulti
                question="What other factors are excluded from the study?"
                :options="options.inclusionFactors"
                v-model="$tera.state.excludedFactors"
        />
		<InputSelectMulti
                question="What measurements were performed on participants at baseline (start of study)?"
                :options="options.measurements"
                v-model="$tera.state.measurements"
        />
	</div>
</template>

<script>
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
export default {
	name: "ViewAuditPicot",
	components: {
		InputSelectMulti,
		InputTextSingleLine
	},
	data() {
		return {
			options: {
				ageGroups: [
					{ label: "Infants" },
					{ label: "Children" },
					{ label: "Adolescents" },
					{ label: "Adults" },
					{ label: "Elderly" }
				],
				sexes: [
					{ label: "Female" },
					{ label: "Male" }
				],
				conditions: [
					{ label: "Healthy" },
					{ label: "Diabetic" },
					{ label: "Demented" },
					{ label: "Immunocompromised" }
				],
				severity: [
					{ label: "Mild" },
					{ label: "Moderate" },
					{ label: "Severe" }
				],
				inclusionFactors: [
					{ label: "Pregnant"},
					{ label: "Smoking"},
					{ label: "Non-smoking"},
					{ label: "Obese"},
					{ label: "Overweight"},
					{ label: "Institutionalised"}
				],
				measurements: [
					{ label: "Blood glucose level" },
					{ label: "Blood pressure" },
					{ label: "Pulse" }
				]
            }
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>