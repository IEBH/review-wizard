<template>
	<div>
		<h1>Study Setting</h1>
		<InputSelectMulti
			question="Where will participants be recruited from?"
			:options="settingOptions"
			:value="studySetting.settings"
			@input="updateField('settings', $event)"
		/>

		<InputSelectMulti
			question="Which regions will participants be recruited from?"
			:options="locationOptions"
			:value="studySetting.regions"
			@input="updateField('regions', $event)"
		/>

		<BasePreviewOutput :component="outputComponent" :data="studySetting" />
	</div>
</template>

<script>
import OutputStudySetting from "./OutputStudySetting.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	mixins: [deepstreamMixin("studySetting")],
	data() {
		return {
			locationOptions: [
				{ label: "Australia" },
				{ label: "China" },
				{ label: "Japan" },
				{ label: "Norway" },
				{ label: "Ukraine" },
				{ label: "United Kingdom" },
				{ label: "United States" }
			],
			outputComponent: OutputStudySetting,
			settingOptions: [
				{ label: "Hospitals" },
				{ label: "Outpatient clinics" },
				{ label: "General practices" },
				{ label: "The community" }
			]
		};
	}
};
</script>
