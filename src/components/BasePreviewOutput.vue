<template>
	<Accordion style="margin-top: 50px; border: 1px solid black;">
		<AccordionTab header="Output" :active="true">
			<component
				id="output"
				:is="component"
				:data="data"
				:key="monitorChange"
			/>
			<div class="p-mt-2" style="text-align: center;">
				<Button label="Rewrite" class="btsyleblue" @click="reload" />
				<Button class="p-ml-2 btsyleblue" label="Copy" @click="copy" />
			</div>
		</AccordionTab>
	</Accordion>
</template>

<script>
import Button from "primevue/button";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

import CopyMixin from "@/mixins/CopyMixin.js";

export default {
	props: {
		component: Object,
		data: Object
	},
	mixins: [CopyMixin],
	components: {
		Accordion,
		AccordionTab,
		Button
	},
	data() {
		return {
			monitorChange: 0
		};
	},
	methods: {
		reload() {
			this.monitorChange += 1;
		}
	}
};
</script>
<style>
.btsyleblue {
	margin: 10px;
	/* width: 100px; */
	background-color: #83bfed;
	border-radius: 20px;
	/* box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px; */
	color: #05305f;
	cursor: pointer;
	display: inline-block;
	font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
	padding: 7px 20px;
	text-align: center;
	text-decoration: none;
	/* transition: all 250ms; */
	border: 0;
	font-size: 16px;

	&:hover {
		/* box-shadow: 0 0 10px 0 #28a745 inset, 0 0 10px 4px #28a745; */
		/* background-color: #0069d9 !important; */
		background-color: #437fbe !important;
	
		border: 2px solid #5679a2 !important;
	}
}
</style>
