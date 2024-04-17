<template>
	<div>
		<p
			v-if="
				$tera.state.type === 'Individual' ||
					$tera.state.type === 'Individual and other'
			"
		>
			{{
				selectRandom([
					"We used "
						.concat($tera.state.type ? $tera.state.type.toLowerCase() : "BLANK")
						.concat(" participants as the unit of analysis."),
					"The unit of analysis was "
						.concat($tera.state.type ? $tera.state.type.toLowerCase() : "BLANK")
						.concat(" patients.")
				])
			}}
		</p>
		<p v-if="$tera.state.type === 'Individual and other'">
			{{
				"Where data on the number of individuals with primary and secondary outcomes of interest was not available, we extracted the information as it presented (e.g. "
					.concat($tera.state.example ? $tera.state.example : "BLANK")
					.concat(").")
			}}
			{{
				"Where the unit of randomisation was not at individual level we "
					.concat($tera.state.example2 ? $tera.state.example2 : "BLANK")
					.concat(".")
			}}
			{{
				"For studies that presented outcomes in other units, this data was extracted as presented."
			}}
		</p>
		<p v-if="$tera.state.type === 'Other'">
			The unit of analysis was
			{{
				$tera.state.otherType ? $tera.state.otherType.toLowerCase() : "BLANK"
			}}.
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputUnitOfAnalysis",
	mixins: [OutputMixin]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
