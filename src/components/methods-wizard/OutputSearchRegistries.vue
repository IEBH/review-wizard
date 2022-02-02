<template>
	<div>
		<p>
			{{
				selectRandom(["We searched ", "Databases used for the search were "])
			}}
			{{ joinArrayWithAnd(formatSelectMulti(data.registries)) }}
			{{
				selectRandom([
					"from ",
					". Searchers were run from ",
					"Databases were searched from "
				])
			}}
			{{
				data.registryDateSearchedUntil
					? formatDateFull(data.registryDateSearchedUntil)
					: "inception"
			}}
			{{ selectRandom(["to ", "until "]) }}
			{{
				data.registryDateOfSearch
					? formatDateFull(data.registryDateOfSearch)
					: "BLANK"
			}}
			(see Appendix Y).
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputSearchRegistries",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
