<template>
	<div>
		<p>
			Participants were recruited from
			{{ joinArrayWithOr(formatSelectMulti(data.settings)).toLowerCase() }} in
			{{ joinArrayWithOr(formatSelectMulti(data.regions)) }}.
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputStudySetting",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>
