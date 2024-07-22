<template>
	<div>
		<p>
			{{
				selectRandom(["We searched ", "Databases used for the search were "])
			}}
			{{ joinArrayWithAnd(formatSelectMulti($tera.state.databases)) }}
			{{
				selectRandom([
					"from ",
					". Searchers were run from ",
					". Databases were searched from "
				])
			}}
			{{
				$tera.state.dateSearchedUntil
					? formatDateFull($tera.state.dateSearchedUntil)
					: "inception"
			}}
			{{ selectRandom(["to ", "until "]) }}
			{{
				$tera.state.dateOfSearch
					? formatDateFull($tera.state.dateOfSearch)
					: "BLANK"
			}}
			(see Appendix X).
		</p>

		<!--Appendix X-->
		<h3>Appendix X - Search Strategies</h3>
		<p v-for="database of $tera.state.databases" :key="database.label">
			<b>
				{{ database.label }} - run {{ formatDate($tera.state.dateOfSearch) }}
			</b>
			<br />
			<br />
			<span style="white-space: pre-wrap;">{{
				getSearchString(database)
			}}</span>
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
			{{ joinArrayWithAnd(formatSelectMulti($tera.state.registries)) }}
			{{
				selectRandom([
					"from ",
					". Searches were run from ",
					". They were searched from "
				])
			}}
			{{
				$tera.state.registryDateSearchedUntil
					? formatDateFull($tera.state.registryDateSearchedUntil)
					: "inception"
			}}
			{{ selectRandom(["to ", "until "]) }}
			{{
				$tera.state.registryDateOfSearch
					? formatDateFull($tera.state.registryDateOfSearch)
					: "BLANK"
			}}
			(see Appendix Y).
		</p>

		<!--Appendix Y-->
		<h3>Appendix Y - Search Strategies</h3>
		<p v-for="database of $tera.state.registries" :key="database.label">
			<b>
				{{ database.label }} - run
				{{ formatDate($tera.state.registryDateOfSearch) }}
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
	methods: {
		getSearchString(database) {
			console.log("output:",this.$tera.state.outputVersions);
			return database.manualVersion; //return final Version
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
