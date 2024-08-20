<template>
    <div>
            <p>
                {{
                    selectRandom([
                        ""
                            .concat(`Following methods are used for the analysis of data:  ${analysisOfData}`),
                        "The data is analysed using the following methods: "
                            .concat(`${analysisOfData}`)
        
                    ])
                }}
            </p>
    </div>
</template>
<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
    name: "OutputAnalysisOfData",
    mixins: [OutputMixin],
    computed: {
        analysisOfData: function() {
            return this.formatSelectMulti(this.$tera.state.dataAnalysis)
				.join(", ")
				.toLowerCase();
        }
    }

}
</script>
<style scoped></style>