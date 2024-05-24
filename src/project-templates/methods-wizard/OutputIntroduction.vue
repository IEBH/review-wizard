<template>
	<div>
		<span>
			{{
				selectRandom([
					"The protocol is registed at: ",
					"The protocol is available via: ",
				]) +
					$tera.state.introprotocol 
			}}
		</span>
		<!-- <p v-html="forProtocol+$tera.state.introprotocol"></p> -->
		<p v-html="$tera.state.intro"></p>
	</div>
</template>
<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputIntroduction",
	mixins: [OutputMixin],
	data() {
		return {
			forProtocol: "The protocol is registed at: "
		}
	},
};
</script>
