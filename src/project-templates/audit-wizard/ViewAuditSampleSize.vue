<template>
    <div>
        <h1>Sample Size</h1>
        <i
			>Estimated number of participants needed to achieve study objectives and how it was determined, including clinical and statistical assumptions supporting any sample size calculations</i
		>
        <InputTextSingleLine
			question="What is the planned sample size?"
			v-model="$tera.state.plannedSampleSize"
            placeholder="100 medical records (EMR based) or 100 clinical staff members (survey)"
		/>
        <BasePreviewOutput :component="outputComponent" />
    </div>
</template>
<script>
import InputTextSingleLine from "@/components/InputTextSingleLine.vue";
import OutputAuditSampleSize from "./OutputAuditSampleSize.vue";

export default {
    name: "ViewAuditSampleSize",
    components: {
        InputTextSingleLine
    },
    data() {
		return {
			outputComponent: OutputAuditSampleSize
            }
        }
    }
</script>
<style scoped></style>