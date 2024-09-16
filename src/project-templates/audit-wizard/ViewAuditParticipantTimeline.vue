<template>
    <div>
        <h1>Participant Timeline</h1>
        <InputSelectYesNo
			question="Did you fill out a schematic diagram?"
			v-model="$tera.state.isSchematicDiagramFilled"
		/>
    </div>

</template>
<script>
import InputSelectYesNo from "@/components/InputSelectYesNo.vue";
export default {
    name: "ViewAuditParticipantTimeline",
    components: {
        InputSelectYesNo
    }
}
</script>
<style scoped></style>