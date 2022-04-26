<template>
	<div>
		<p v-if="data.approval">
			{{ data.approval }}
		</p>
		<p v-if="data.protocol">
			{{ data.protocol }}
		</p>
		<p v-if="data.consent">
			{{ data.consent }}
		</p>
		<p v-if="data.confidentiality">
			{{ data.confidentiality }}
		</p>
		<p v-if="data.declaration">
			{{ data.declaration }}
		</p>
		<p v-if="data.access">
			{{ data.access }}
		</p>
		<p v-if="data.care">
			{{ data.care }}
		</p>
		<p v-if="data.dissemination">
			{{ data.dissemination }}
		</p>
	</div>
</template>

<script>
import OutputMixin from "@/mixins/OutputMixin.js";
export default {
	name: "OutputEthicsAndDissemination",
	mixins: [OutputMixin],
	props: {
		data: Object
	}
};
</script>
