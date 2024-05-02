<template>
	<div>
		<Toolbar>
			<template #start>
				<strong>
					{{ $tera.state.name ? $tera.state.name : "Untitled Methods Section" }}
				</strong>
				<TheArticleCitation
					:title="$tera.state.name"
					:authors="$tera.state.authors"
					:year="titlepage.year"
				/>
			</template>
			<template #end>
				<Button
					label="Share"
					@click="openModal()"
					icon="pi pi-share-alt"
					class="p-mr-2 btsyleblue"
				/>
				<Button label="Close" @click="close" class="btsylered" />
			</template>
		</Toolbar>

		<!-- Modal to display sharing link -->
		<Dialog
			header="Share"
			:visible.sync="displayModal"
			:style="{ width: '50vw' }"
			:modal="true"
		>
			<p>Copy the link below to send to others:</p>
			<Toolbar>
				<template #start>{{ shareUrl }}</template>
				<template #end>
					<Button icon="pi pi-copy" @click="copyLink" />
				</template>
			</Toolbar>
			<input type="hidden" id="testing-code" :value="shareUrl" />
		</Dialog>

		<!-- Modal to display warning -->
		<Dialog
			header="Warning"
			:visible.sync="displayWarn"
			:style="{ width: '50vw' }"
			:modal="true"
			@hide="closeArticle"
		>
			<p>Warning: save the below link to ensure progress is not lost</p>
			<Toolbar>
				<template #start>{{ shareUrl }}</template>
				<template #end>
					<Button icon="pi pi-copy" @click="copyLink" />
				</template>
			</Toolbar>
			<input type="hidden" id="testing-code" :value="shareUrl" />
		</Dialog>

		<!-- Toast for copy msg -->
		<Toast />
	</div>
</template>

<script>
//import deepstreamMixin from "@/mixins/DeepstreamMixin";

import { mapState } from "vuex";

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";

import TheArticleCitation from "./TheArticleCitation.vue";
import deepstreamMixin from "@/mixins/DeepstreamMixin";

export default {
	name: "TheArticleToolbar",
	mixins: [deepstreamMixin("titlepage")],
	components: {
		Toolbar,
		Button,
		Dialog,
		Toast,
		TheArticleCitation
	},
	computed: mapState({
		projectId: state => state.projectId,
		projectRecord: state => state.projectRecord
	}),
	data() {
		return {
			displayModal: false,
			displayWarn: false,
			shareUrl: ""
		};
	},
	async mounted() {
		// If title does not exist, use the one from the store
		await this.methodsRecord.whenReady();
		if (!this.$tera.name) {
			await this.projectRecord.whenReady();
			this.updateField("title", this.projectRecord.get("metadata.name"));
		}
	},
	methods: {
		close() {
			this.shareUrl = `https://sr-accelerator.com/#/${process.env.VUE_APP_PROJECT}?id=${this.projectId}`;
			this.displayWarn = true;
		},
		closeArticle() {
			this.$store.commit("reset");
			this.$router.push("/");
		},
		openModal() {
			this.shareUrl = `https://sr-accelerator.com/#/${process.env.VUE_APP_PROJECT}?id=${this.projectId}`;
			this.displayModal = true;
		},
		copyLink() {
			let linkToCopy = document.querySelector("#testing-code");
			linkToCopy.setAttribute("type", "text");
			linkToCopy.select();

			try {
				document.execCommand("copy");
				this.$toast.add({
					severity: "success",
					summary: "Successfully copied to clipboard",
					life: 3000
				});
			} catch (err) {
				console.error(err);
				this.$toast.add({
					severity: "error",
					summary: "Error copying to clipboard",
					detail: err,
					life: 3000
				});
			}

			/* unselect the range */
			linkToCopy.setAttribute("type", "hidden");
			window.getSelection().removeAllRanges();
		}
	}
};
</script>
<style>
.p-toolbar {
	background-image: linear-gradient(#6880b5, #465b8b, #5971a5);
	/* background-image: linear-gradient(#7992c9, #5876b7, #547acd); */
	/* background-image: linear-gradient(#7e94c6, #5970a1, #6b8cd5); */
	color: #dcdee5;
}

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

.btsylered {
	margin: 10px;
	/* width: 100px; */
	background-color: #f4a8a2;
	border-radius: 20px;
	/* box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px; */
	color: #c03e34;
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
		background-color: #ba4a41 !important;
		border: 2px solid #e49164 !important;
	}
}
</style>
