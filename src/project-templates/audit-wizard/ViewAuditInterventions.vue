<template>
    <div>
        <h1>Interventions</h1>

        <InputSrTableCustom
			question="What are the intervention arms?"
			v-model="table"
		></InputSrTableCustom>

        <InputSrTableCustom
			question="What are the control arms?"
			v-model="controlArmsTable"
		></InputSrTableCustom>

        <InputSelectMulti
                question="Under what conditions will treatment be discontinued?"
                :options="options.conditions"
                v-model="$tera.state.conditionsTreatment"
        />
        <InputSelectMulti
                question="Adherence to intervention protocols were maintained by"
                :options="options.employees"
                v-model="$tera.state.adherenceEmployees"
        />
        <InputSelectMulti
                question="Adherence was monitored by"
                :options="options.adherenceMonitoringFactors"
                v-model="$tera.state.adherenceMonitoringFactors"
        />
        <InputTextSingleLine
			question="What treatment or instructions will be given to all groups?"
			v-model="$tera.state.treatment"
			placeholder="Painkillers"
		/>
        <InputTextSingleLine
			question="What interventions were not allowed?"
			v-model="$tera.state.interventionsNotAllowed"
			placeholder="Other antibiotics"
		/>
    </div>
</template>
<script>
import InputSrTableCustom from "@/components/InputSrTableCustom.vue";
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
export default {
    name: "ViewAuditInterventions",
    components: {
        InputSelectMulti,
        InputTextSingleLine,
        InputSrTableCustom
    },
    data() {
		return {
			options: {
				conditions: [
					{ label: "adverse reaction" },
					{ label: "participant request" },
					{ label: "improving disease" },
					{ label: "worsening disease" },
				],
                employees: [
                    { label: "nurses" },
                    { label: "research assistants" },
                    { label: "researchers" },
                    { label: "physicians" },
                ],
                adherenceMonitoringFactors: [
                    { label: "counting drug tablets not used" },
                    { label: "laboratory tests" }
                ]
            }
		};
	},
    computed: {
        table() {
			return this.$tera.state.auditInterventionsTable;
		},
        controlArmsTable() {
            return this.$tera.state.controlArmsTable;
        }
    }
}
</script>
<style scoped></style>