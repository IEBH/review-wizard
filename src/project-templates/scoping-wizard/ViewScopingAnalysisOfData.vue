<template>

    <div>
		<h1>Analysis of Data</h1>
        <InputSelectMulti
                question="How will data be analysed?"
                :options="options.dataAnalysis"
                v-model="$tera.state.dataAnalysis"
        />
        <BasePreviewOutput :component="outputComponent" />
    </div>
</template>
<script>
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import OutputAnalysisOfData from "./OutputAnalysisOfData.vue";
export default {
    name: "ViewScopingAnalysisOfData",
    components: {
        InputSelectMulti,
        BasePreviewOutput
    },
    data() {
        return {
            outputComponent: OutputAnalysisOfData,
            options: {
                dataAnalysis: [
                    { label: "narrative synthesis" },
                    { label: "content analysis" }
                ]
            }
        }
        
    }
}
</script>
<style scoped></style>