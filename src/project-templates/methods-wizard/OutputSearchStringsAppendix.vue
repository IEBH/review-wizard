<template>
	<div>
		<h3>Appendix X - Search Strategies</h3>
		<p v-for="(database, index) of data.databases" :key="index">
			<b> {{ database.label }} - run {{ formatDate(data.dateOfSearch) }} </b>
			<br />
			<br />
			<span style="white-space: pre-wrap;">{{ database.string }}</span>
		</p>

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
