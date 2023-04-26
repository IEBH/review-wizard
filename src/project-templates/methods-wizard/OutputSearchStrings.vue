<template>
	<div>
		<p>
			{{
				selectRandom(["We searched ", "Databases used for the search were "])
			}}
			{{ joinArrayWithAnd(formatSelectMulti(data.databases)) }}
			{{
				selectRandom([
					"from ",
					". Searchers were run from ",
					". Databases were searched from "
				])
			}}
			{{
				data.dateSearchedUntil
					? formatDateFull(data.dateSearchedUntil)
					: "inception"
			}}
			{{ selectRandom(["to ", "until "]) }}
			{{ data.dateOfSearch ? formatDateFull(data.dateOfSearch) : "BLANK" }}
			(see Appendix X).
		</p>

		<!--Appendix X-->
		<h3>Appendix X - Search Strategies</h3>
		<p v-for="(database, index) of data.databases" :key="index">
			<b> {{ database.label }} - run {{ formatDate(data.dateOfSearch) }} </b>
			<br />
			<br />
			<span style="white-space: pre-wrap;">{{ database.string }}</span>
		</p>

		<p>
			{{
				selectRandom([
					"We searched ",
					"Trial registries used for the search were ",
					"The following trial registries were searched ",
					"To identify ongoing studies, we searched "
				])
			}}
			{{ joinArrayWithAnd(formatSelectMulti(data.registries)) }}
			{{
				selectRandom([
					"from ",
					". Searches were run from ",
					". They were searched from "
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

		<!--Appendix Y-->
		<h3>Appendix Y - Search Strategies</h3>
		<p v-for="(database, index) of data.registries" :key="index">
			<b>
				{{ database.label }} - run
				{{ formatDate(data.registryDateOfSearch) }}
			</b>
			<br />
			<br />
			<span style="white-space: pre-wrap;">{{ database.string }}</span>
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputSearchStrings",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
