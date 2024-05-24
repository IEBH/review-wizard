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

export default {
	name: "OutputIntroduction",
	data() {
		return {
			forProtocol: "The protocol is registed at: "
		}
	},
	methods:{
		selectRandom(arr) {
			return arr[Math.floor(Math.random() * arr.length)];
		},
	}
};
</script>
