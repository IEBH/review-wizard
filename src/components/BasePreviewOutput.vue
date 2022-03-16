<template>
	<Accordion style="margin-top: 50px; border: 1px solid black;">
		<AccordionTab header="Output" :active="true">
			<component
				id="output"
				:is="component"
				:data="data"
				:key="monitorChange"
			/>
			<div class="p-mt-2">
				<Button label="Rewrite" @click="reload" />
				<Button class="p-ml-2" label="Copy" @click="copy" />
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
