<template>
    <div>
            <p>
                {{
                    selectRandom([
                        ""
                            .concat(`Following factors are considered for collecting the data:  ${analysisOfData}`),
                        "The data is collected by considering the following: "
                            .concat(`${analysisOfData}`)
        
                    ])
                }}
            </p>
            <span>
				{{
					selectRandom([
						""
							.concat(`The results will be presented using the following approaches: ${resultsPresentation}`),
                            `Following approaches will be used for the presentation of data: ${resultsPresentation}`
							
					])
				}}
			</span>
    </div>
</template>
<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
    name: "OutputAnalysisApproach",
    mixins: [OutputMixin],
    computed: {
        analysisOfData: function() {
            return this.formatSelectMulti(this.$tera.state.dataDescription)
				.join(", ")
				.toLowerCase();
        },
        resultsPresentation: function() {
            return this.formatSelectMulti(this.$tera.state.resultsPresentation)
				.join(", ")
				.toLowerCase();
        },
    }

}
</script>
<style scoped></style>