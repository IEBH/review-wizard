<template>
	<div>
		<p>
            <span v-if="$tera.state.participantsRecruitedFrom && $tera.state.participantsRecruitedFrom.length || $tera.state.healthServicesParticipantsRecruited && $tera.state.healthServicesParticipantsRecruited.length">
                <span v-if="$tera.state.participantsRecruitedFrom && $tera.state.participantsRecruitedFrom.length">
                {{
                    selectRandom([
                        "Participants will be recruited from the following: ",
                        "Recruitment of participants will occur from the following: ",
                        "The recruitment process will involve participants from the following: ",
                        "The following will serve as the sources for participant recruitment: ",
                        "Participants will be gathered from the following: "
                    ])
                }}
                </span>
                <span v-if="$tera.state.participantsRecruitedFrom && $tera.state.participantsRecruitedFrom.length">
                    {{ joinArrayWithAnd(formatSelectMulti($tera.state.participantsRecruitedFrom))+ "." }}
                </span>
                
                <span v-if="$tera.state.healthServicesParticipantsRecruited && $tera.state.healthServicesParticipantsRecruited.length">
                {{
                    selectRandom([
                        "Participants will be recruited from the following health services: ",
                        "Recruitment of participants will take place through the following health services: ",
                        "The recruitment process will involve participants from these health services:",
                        "Participants will be gathered from the following list of health services:",
                        "The following health services will serve as sources for participant recruitment: "
                    ])
                }}
                </span>
                <span v-if="$tera.state.healthServicesParticipantsRecruited && $tera.state.healthServicesParticipantsRecruited.length">
                    {{ joinArrayWithAnd(formatSelectMulti($tera.state.healthServicesParticipantsRecruited)) }}
                </span>
        </span>
        <span v-else> {{ $tera.state.noStudySetting }} </span>
			
				
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
