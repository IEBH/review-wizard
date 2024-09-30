<template>
	<div>
		<p>
            <span v-if="$tera.state.participantsRecruitedFrom && $tera.state.participantsRecruitedFrom.length">
                {{
                    selectRandom([
                        "The eligible participants are in following age groups: ",
                        "The eligible participants fall into the following age groups: ",
                        "The age groups of eligible participants are as follows: ",
                        "The following age categories define eligible participants: ",
                    ])
                }}
            </span>
			<span v-if="$tera.state.participantsRecruitedFrom && $tera.state.participantsRecruitedFrom.length">
                    {{ joinArrayWithAnd(formatSelectMulti($tera.state.participantsRecruitedFrom))+ "." }}
            </span>
            <span v-if="$tera.state.auditPopulation && $tera.state.auditPopulation.length">
                {{
                    selectRandom([
                        "The audit population is ",
                        "The audit covers the following population: ",
                        "The population included in the audit is: ",
                        "The audit involves the following population: ",
                    ])
                }}
            </span>
			<span v-if="$tera.state.auditPopulation && $tera.state.auditPopulation.length">
                    {{ $tera.state.auditPopulation+ "." }}
            </span>

    
            <span v-if="$tera.state.measurements && $tera.state.measurements.length">
                {{
                    selectRandom([
                        "The baseline measurements performed on participants are as follows: ",
                        "The following measurements were taken from participants at baseline: ",
                        "The measurements conducted on participants at baseline are: ",
                        "Baseline participant measurements include the following: ",
                        "The following measurements were recorded from participants at baseline: "
                    ])
                }}
            </span>
			<span v-if="$tera.state.measurements && $tera.state.measurements.length">
                {{ joinArrayWithAnd(formatSelectMulti($tera.state.measurements))+ "." }}
            </span>
				
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputAuditStudySetting",
	mixins: [OutputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
