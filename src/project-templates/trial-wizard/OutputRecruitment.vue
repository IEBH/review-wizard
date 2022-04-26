<template>
	<div>
		<p>
			{{ selectRandom(["To increase participant enrolment we"]) }}
			{{ joinArrayWithAnd(formatSelectMulti(data.recruitment)) }}.
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputRecruitment",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>
