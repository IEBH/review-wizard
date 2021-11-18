<template>
	<div class="p-m-5">
		<h1>Welcome to the Methods Wizard!</h1>
		<Message :closable="false"
			>We have switched to a new database for MethodsWizard, if you have lost
			any work using the Beta version, it is still accessible at the legacy
			version.
			<a
				style="display: contents"
				href="https://methodswizard-old.netlify.app/#/"
			>
				Click here to access the legacy version</a
			>. If you still need help recovering data, feel free to
			<a
				style="display: contents"
				target="_blank"
				href="https://sr-accelerator.com/#/contact"
				>Contact Us</a
			>.
		</Message>
		<p v-if="projectId">
			To start making changes, simply select a section from the left hand side
			and begin filling it in
		</p>
		<div v-else>
			<p>
				To create a new methods section, please use the "Create New Project"
				button.
			</p>
			<p>
				Any changes made are automatically synced, just make sure to save the
				URL to continue accessing the methods section.
			</p>
			<br />
			<Button
				label="Create New Project"
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
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Message from "primevue/message";

export default {
	name: "ViewHome",
	components: {
		Toolbar,
		Button,
		Dialog,
		Toast,
		Message
	},
	data() {
		return {
			newId: "",
			shareUrl: "",
			displayWarn: false
		};
	},
	computed: {
		projectId() {
			return this.$store.state.projectId;
		}
	},
	methods: {
		newArticle() {
			console.log("Creating new project");
			this.$store
				.dispatch("createProject", {
					name: "Untitled project",
					owner: undefined,
					dateCreated: Date.now()
				})
				.then(newId => {
					this.shareUrl =
						"https://sr-accelerator.com/#/methods-wizard?id=" + newId;
					this.displayWarn = true;
				})
				.catch(err => {
					alert(err);
					console.error(err);
				});
		},
		navigateToTitlepage() {
			this.$router.replace({
				name: "titlepage",
				params: { projectId: this.newId }
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
