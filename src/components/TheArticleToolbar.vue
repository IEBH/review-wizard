<template>
	<div>
		<Toolbar>
			<template slot="left">
				<b>{{ title ? title : "Untitled Methods Section" }}</b>
				<TheArticleCitation :title="title" :authors="authors" :year="year" />
			</template>
			<template slot="right">
				<Button
					label="Share"
					@click="openModal()"
					icon="pi pi-share-alt"
					class="p-mr-2"
				/>
				<Button label="Close" @click="close" class="p-button-danger" />
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
				<template slot="left">{{ shareUrl }}</template>
				<template slot="right">
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
				<template slot="left">{{ shareUrl }}</template>
				<template slot="right">
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
import { mapState } from "vuex";

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";

import TheArticleCitation from "./TheArticleCitation.vue";

export default {
	name: "TheArticleToolbar",
	components: {
		Toolbar,
		Button,
		Dialog,
		Toast,
		TheArticleCitation
	},
	computed: mapState({
		title: state => state.titlepage.doc.title,
		authors: state => state.titlepage.doc.authors,
		year: state => state.titlepage.doc.year,
		articleId: state => state.articleId
	}),
	data() {
		return {
			displayModal: false,
			displayWarn: false,
			shareUrl: ""
		};
	},
	methods: {
		close() {
			this.shareUrl =
				"https://sr-accelerator.com/#/methods-wizard?id=" + this.articleId;
			this.displayWarn = true;
		},
		closeArticle() {
			// Todo: Close article logic
			this.$router.push("/");
		},
		openModal() {
			this.shareUrl =
				"https://sr-accelerator.com/#/methods-wizard?id=" + this.articleId;
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
