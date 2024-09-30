<template>
	<div>
		<p>
			{{
				selectRandom([
					"We included " +
						typesInclude +
						" of " +
						populationInclude +
                        ".We included " +
                        greyLitTypesInclude +
						". We included concepts involving " +
						conceptInclude +
						". We excluded studies if the controls used " +
						conceptExclude +
						". The primary theme was " +
						primaryThemeInclude +
						", and secondary themes were " +
						secondaryThemeInclude +
						".",
					"All relevant " +
						typesInclude +
						" containing " +
						populationInclude +
						" were included" +
                        ". We included " +
                        greyLitTypesInclude + 
						". As long as they contained the following concepts " +
						conceptInclude +
						". We excluded studies if the controls used " +
						conceptExclude +
						". Our primary theme of interest was " +
						primaryThemeInclude +
						". The secondary themes of interest were " +
						secondaryThemeInclude +
						".",
					"We aimed to find, assess and synthesize all " +
						typesInclude +
						" containing " +
						populationInclude +
                        ". We included "+
                        greyLitTypesInclude +
						". If they used the following concepts " +
						conceptInclude +
						". We excluded studies if " +
						conceptExclude +
						" was/were used as the control" +
						". If " +
						primaryThemeInclude +
						" was reported we included it as the primary theme, while if " +
						secondaryThemeInclude +
						" were reported we included them as the secondary theme/s" +
						".",
					"This review aimed to find, assess and synthesize all " +
						typesInclude +
						"  that compared " +
						conceptInclude +
						" to " +
						contextInclude +
                        ". We included " +
                        greyLitTypesInclude + 
						". Although, studies of " +
						conceptExclude +
						" or where the control was " +
						contextExclude +
						" were excluded" +
						". Only Studies on " +
						populationInclude +
						" were included in the review" +
						". The primary theme of the review was/were" +
						primaryThemeInclude +
						", while the secondary theme/s were " +
						secondaryThemeInclude +
						".",
					"To conduct this review we identified and included studies about " +
						typesInclude +
						"  which compared " +
						conceptInclude +
						" to " +
						contextInclude +
                        ". " +
                        "We included " +
						greyLitTypesInclude  +
						". Studies which were about " +
						conceptExclude +
						" or that were compared to " +
						contextExclude +
						" were not included" +
						". Studies which were on " +
						populationInclude +
						" were assessed as relevant to this review" +
						". The primary outcome of interest was/were " +
						primaryThemeInclude +
						", while the secondary theme/s of interest were " +
						secondaryThemeInclude +
						"."
				])
			}}
		</p>
		<!-- Bullet points -->
		<h3>Participants</h3>
		<span>
			{{
				selectRandom([
					selectRandom([
						"We included: ",
						"Included participants were: ",
						"The following participants were included: "
					]) +
						populationInclude +
						". ",
					"Studies of " + populationInclude + " were eligible for this review."
				])
			}}
		</span>
		<span v-if="populationExclude != 'BLANK'">
			{{
				selectRandom([
					"We excluded: ",
					"Participants were excluded if they were: "
				]) +
					populationExclude +
					"."
			}}
		</span>

		<h3>Concepts</h3>
		<span>
			{{
				selectRandom([
					"We included: ",
					"Included concepts were: ",
					"Eligible concepts were: ",
					"The following concepts were included: ",
					"Studies were eligible if they evaluated: "
				]) +
					conceptInclude +
					". "
			}}
		</span>
		<span v-if="conceptExclude != 'BLANK'">
			{{
				selectRandom([
					"We excluded: ",
					"Concepts were excluded if they involved the following: ",
					"Concepts were excluded if they involved: ",
					"Concepts were excluded if they had:",
					"Concepts were excluded if they had any of: "
				]) +
					conceptExclude +
					"."
			}}
		</span>

		<h3>Context</h3>
		<span>
			{{
				selectRandom([
					"We included: ",
					"Studies with the following context were eligible: "
				]) +
					contextInclude +
					". "
			}}
		</span>
		<span v-if="contextExclude != 'BLANK'">
			{{
				selectRandom([
					"We excluded: ",
					"Studies were excluded if the context had any of the following: ",
					"Studies were excluded if the context had any of: "
				]) +
					contextExclude +
					"."
			}}
		</span>

		<h3>Themes</h3>
		<span>
			{{
				selectRandom([
					"We included the following primary theme: ",
					"Studies with the following primary themes were included: ",
					"Included primary themes were: ",
					"The primary theme/s was/were: "
				]) +
					primaryThemeInclude +
					". "
			}}
		</span>
		<span v-if="secondaryThemeInclude != 'BLANK'">
			{{
				"Included secondary themes were: " + secondaryThemeInclude + ". "
			}}
		</span>


		<h3>Study Types</h3>
		<span>
			{{
				selectRandom([
					"We included: ",
					"Included study types were: ",
					"The following study types were included: "
				]) +
					typesInclude +
					"."
			}}
		</span>
        <h3>Grey Literatures</h3>
        <span>
			{{
				selectRandom([
					"We included "
				]) +
                greyLitTypesInclude +
					"."
			}}
		</span>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputPicot",
	mixins: [OutputMixin],
	computed: {
		populationInclude: function() {
			return this.listMainWithExample(this.$tera.state.population, true);
		},
		populationExclude: function() {
			return this.listMainWithExample(this.$tera.state.population, false);
		},
		conceptInclude: function() {
			return this.listMainWithExample(this.$tera.state.concept, true);
		},
		conceptExclude: function() {
			return this.listMainWithExample(this.$tera.state.concept, false);
		},
		contextInclude: function() {
			return this.listMainWithExample(this.$tera.state.context, true);
		},
		contextExclude: function() {
			return this.listMainWithExample(this.$tera.state.context, false);
		},
		primaryThemeInclude: function() {
			if (this.$tera.state.theme) {
				return this.listMainWithExample(
					this.$tera.state.theme.filter(el => el.type),
					true
				);
			} else {
				return "BLANK";
			}
		},
		secondaryThemeInclude: function() {
			if (this.$tera.state.theme) {
				return this.listMainWithExample(
					this.$tera.state.theme.filter(el => !el.type),
					true
				);
			} else {
				return "BLANK";
			}
		},
		typesInclude: function() {
			return this.joinArrayWithOr(
				this.formatSelectMulti(this.$tera.state.types)
			).toLowerCase();
		},
        greyLitTypesInclude: function() {
            return this.joinArrayWithOr(
				this.formatSelectMulti(this.$tera.state.greyLiteraturesSelected)
			).toLowerCase();
        }
	},
	methods: {
		listMainWithExample(data, include = true) {
			if (data) {
				const filteredArray = include
					? data.filter(el => el.inclusion)
					: data.filter(el => !el.inclusion);
				// If there is at least one main input specified
				if (filteredArray.some(el => el.main)) {
					const mappedArray = filteredArray.map(el => {
						if (el.main) {
							return (
								el.main.trim() +
								(el.description ? `; ${el.description.trim()}` : "") +
								(el.examples ? ` (e.g. ${el.examples.trim()})` : "")
							);
						}
					});
					return this.joinArrayWithOr(mappedArray);
				} else {
					return "BLANK";
				}
			} else {
				return "BLANK";
			}
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
