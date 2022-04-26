<template>
	<div>
		<p>
			{{
				selectRandom([
					"Participants were recruited from ",
					"The recruitment for the study was undertaken in "
				])
			}}
			{{ joinArrayWithOr(formatSelectMulti(data.settings)).toLowerCase() }}
			{{
				selectRandom(["in ", "within ", "from ", "located in ", "based in "])
			}}
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
