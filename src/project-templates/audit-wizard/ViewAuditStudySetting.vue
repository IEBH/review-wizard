<template>
    <div>
        <h1>Study Setting</h1>
        <InputSelectMulti
                question="Where will participants be recruited from?"
                :options="options.participants"
                v-model="$tera.state.participantsRecruitedFrom"
        />
        <InputSelectMulti
                question="Which health servcies will participants be recruited from?"
                :options="options.healthServices"
                v-model="$tera.state.healthServicesParticipantsRecruited"
        />
    </div>
</template>
<script>
import InputSelectMulti from "@/components/InputSelectMulti.vue";
export default {
    name: "ViewAuditStudySetting",
    components: {
        InputSelectMulti
    },
    data() {
		return {
			options: {
				participants: [
					{ label: "Inpatient" },
					{ label: "Outpatient clinics" },
					{ label: "Emergency Department" },
					{ label: "The community" },
				]
			,
            healthServices: [
                    { label: "GCUH" },
					{ label: "Robina" },
					{ label: "Other QLD" },
					{ label: "NSW" }
            ]
            }
		};
	}
}
</script>
<style scoped></style>