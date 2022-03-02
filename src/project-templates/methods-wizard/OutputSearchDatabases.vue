<template>
	<div>
		<p>
			{{
				selectRandom(["We searched ", "Databases used for the search were ", "Searches were run in the following databases ", "We conducted searches in the following databases ", "Searches were done in "  ])
			}}
			{{ joinArrayWithAnd(formatSelectMulti(data.databases)) }}
			{{
				selectRandom([
					"from ",
					". Searchers were run from ",
					". Databases were searched from ",
					". Dates searched were "
				])
			}}
			{{
				data.dateSearchedUntil
					? formatDateFull(data.dateSearchedUntil)
					: "inception"
			}}
			{{ selectRandom(["to ", "until ", "up to "]) }}
			{{ data.dateOfSearch ? formatDateFull(data.dateOfSearch) : "BLANK" }}
			(see Appendix X).
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputSearchDatabases",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
