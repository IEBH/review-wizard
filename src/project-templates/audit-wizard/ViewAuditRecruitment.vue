<template>
    <div>
        <h1>Recruitment</h1>
        <i
			>Strategies for achieving adequate participant enrolment to reach target sample size</i
		>
        <InputSelectMulti
                question="Strategies implemented to achieve adequate participant enrolment were:"
                :options="options.strategies"
                v-model="$tera.state.strategies"
        />
        <BasePreviewOutput :component="outputComponent" />
    </div>
</template>
<script>
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import OutputAuditRecruitment from "./OutputAuditRecruitment.vue";
export default {
    name: "ViewAuditRecruitment",
    components: {
        InputSelectMulti
    },
    data() {
		return {
            options: {
                strategies:[
                    { label: "conducted an open trial"},
                    { label: "gave telephone reminders to people who do not respond to a postal invitation"},
                    { label: "offered rewards for participation"}
                ]
            },
            outputComponent: OutputAuditRecruitment
            }
        }
    }

</script>
<style scoped></style>