<template>
    <div>
        <h1>Analysis Approach</h1>
        <InputSelectMulti
                question="How were the included data described/collated?"
                :options="options.dataDescription"
                v-model="$tera.state.dataDescription"
        />

        <InputSelectMulti
                question="How will your results be presented?"
                :options="options.resultsPresentation"
                v-model="$tera.state.resultsPresentation"
        />

        <BasePreviewOutput :component="outputComponent" />
    </div>
</template>
<script>
import InputSelectMulti from "@/components/InputSelectMulti.vue";
import BasePreviewOutput from "@/components/BasePreviewOutput.vue";
import OutputAnalysisApproach from "./OutputAnalysisApproach.vue";
export default {
    name: "ViewScopingAnalysisApproach",
    components: {
        InputSelectMulti,
        BasePreviewOutput
    },
    data() {
        return {
            outputComponent: OutputAnalysisApproach,
            options: {
                dataDescription: [
                    { label: "by themes" },
                    { label: "by country" },
                    { label: "by age group" }
                ],
                resultsPresentation: [
                    { label: "graphical"},
                    { label: "tabular"}
                ]
            }
        }
        
    }
}
</script>
<style scoped></style>