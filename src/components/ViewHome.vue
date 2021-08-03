<template>
	<div class="p-m-5">
		<h1>Welcome to the Methods Wizard!</h1>
		<p v-if="articleId">
			To start making changes, simply select a section from the left hand side
			and begin filling it in
		</p>
		<div v-else>
			<p>
				To create a new methods section, please use the "Create New Methods
				Section" button.
			</p>
			<p>
				Any changes made are automatically synced, just make sure to save the
				URL to continue accessing the methods section.
			</p>
			<br />
			<Button
				label="Create New Methods Section"
				@click="newArticle"
				class="create-button"
			/>

			<!-- Modal to display warning -->
			<Dialog
				header="Alert"
				:visible.sync="displayWarn"
				:style="{ width: '50vw' }"
				:modal="true"
				@hide="navigateToTitlepage"
			>
				<p>Save the below link to ensure progress is not lost</p>
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
	</div>
</template>

<script>
import { createNewArticle } from "../api/firebase.js";

import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";

export default {
	name: "ViewHome",
	components: {
		Toolbar,
		Button,
		Dialog,
		Toast
	},
	data() {
		return {
			newId: "",
			shareUrl: "",
			displayWarn: false
		};
	},
	computed: {
		articleId() {
			return this.$store.state.articleId;
		}
	},
	methods: {
		newArticle() {
			createNewArticle()
				.then(val => {
					this.newId = val.id;
					this.shareUrl =
						"https://sr-accelerator.com/#/methods-wizard?id=" + this.newId;
					this.displayWarn = true;
				})
				.catch(err => console.log(err));
		},
		navigateToTitlepage() {
			this.$router.replace({
				name: "titlepage",
				params: { articleId: this.newId }
			});
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
