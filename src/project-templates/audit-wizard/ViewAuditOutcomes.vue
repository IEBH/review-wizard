<template>
    <div>
        <h1>Outcomes</h1>
        <InputSrTableCustom
			question="What is the primary outcome/s?"
			v-model="primaryOutcomesTable"
		></InputSrTableCustom>

        <InputSrTableCustom
			question="What is the secondary outcome/s?"
			v-model="secondaryOutcomesTable"
		></InputSrTableCustom>

        <InputSrTableCustom
			question="What are adverse events of interest?"
			v-model="adverseEventsOfInterestsTable"
		></InputSrTableCustom>

        <InputTextSingleLine
			question="The clinical relevance of the chosen efficacy and harm outcomes is supported by"
			v-model="$tera.state.protocolVersion"
			placeholder="describe the clinical relevance of the chosen outcomes e.g. were they based on the omeract outcome sets for the condition of interest"
		/>
    </div>
</template>
<script>
import InputSrTableCustom from "@/components/InputSrTableCustom.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
export default {
    name: "ViewAuditOutcomes",
    components: {
        InputSrTableCustom,
        InputTextSingleLine
    },
    computed: {
        primaryOutcomesTable() {
			return this.$tera.state.primaryOutcomesTable;
		},
        secondaryOutcomesTable() {
            return this.$tera.state.secondaryOutcomesTable;
        },
        adverseEventsOfInterestsTable() {
            return this.$tera.state.adverseEventsOfInterestsTable;
        }
    }
}
</script>
<style scoped></style>