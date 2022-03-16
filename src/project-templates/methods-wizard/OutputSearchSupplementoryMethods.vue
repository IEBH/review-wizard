<template>
	<div>
		<p>
			{{
				selectRandom([
					"We also ",
					"Additionally, we ",
					"To supplement the database search we ",
					"As well as searching databases we also ",
					"To maximise our chances of identifying all relevant studies, as well as searching databases we also "
				])
			}}
			{{
				joinArrayWithAnd(
					formatSelectMulti(data.supplementoryMethods)
				).toLowerCase()
			}}
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputSearchSupplementoryMethods",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
