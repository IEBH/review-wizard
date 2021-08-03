<template>
	<!-- Collapsed and onMobile control the padding of content relative to sidebar -->
	<div
		id="app"
		:class="[
			{ 'pad-sidebar': methodsRecord },
			{ collapsed: collapsed },
			{ onmobile: isOnMobile }
		]"
	>
		<sidebar-menu
			v-if="methodsRecord"
			:menu="menu"
			:collapsed="collapsed"
			theme="white-theme"
			@toggle-collapse="onToggleCollapse"
			width="300px"
			class="sidebar"
			:showOneChild="true"
		/>
		<div
			v-if="isOnMobile && !collapsed"
			class="sidebar-overlay"
			@click="collapsed = true"
		/>

		<!-- If articleId exists render small logo and toolbar -->
		<div v-if="methodsRecord" class="p-grid p-ai-center">
			<div class="p-col-12 p-md-2 p-lg-1">
				<img class="logo" alt="Logo" src="./assets/hat.png" height="50px" />
			</div>
			<div class="p-col-12 p-md-10 p-lg-11">
				<TheArticleToolbar />
			</div>
		</div>

		<!-- Else render a larger logo -->
		<div v-else class="p-grid p-ai-center">
			<div class="p-col-12 p-md-3 p-lg-2">
				<img class="logo" alt="Logo" src="./assets/hat.png" height="150px" />
			</div>
			<div class="p-col-12 p-md-9 p-lg-9">
				<h1 class="logo-text-large">MethodsWizard</h1>
			</div>
		</div>

		<div class="p-shadow-10 p-m-2" style="padding:20px">
			<ProjectEdit class="p-input-filled" />
		</div>
	</div>
</template>

<script>
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";

import TheArticleToolbar from "./components/TheArticleToolbar.vue";
import ProjectEdit from "./components/ProjectEdit.vue";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default {
	name: "App",
	components: {
		TheArticleToolbar,
		ProjectEdit
	},
	mounted() {
		this.onResize();
		window.addEventListener("resize", this.onResize);
	},
	methods: {
		onToggleCollapse(collapsed) {
			this.collapsed = collapsed;
		},
		onResize() {
			if (window.innerWidth <= 767) {
				this.isOnMobile = true;
				this.collapsed = true;
			} else {
				this.isOnMobile = false;
				this.collapsed = false;
			}
		}
	},
	data() {
		return {
			collapsed: false,
			isOnMobile: false
		};
	},
	computed: {
		methodsRecord() {
			return this.$store.state.methodsRecord;
		},
		menu() {
			return [
				{
					header: true,
					title: "Methods-Wizard",
					hiddenOnCollapse: true
				},
				{
					title: "Title Page",
					icon: "pi pi-file",
					href: `/${this.$store.state.articleId}/titlepage`
				},
				{
					header: true,
					title: "Method",
					hiddenOnCollapse: true
				},
				{
					title: "Eligibility Criteria (PICOST)",
					icon: "pi pi-file",
					href: `/${this.$store.state.articleId}/method/picot`
				},
				{
					title: "Search",
					icon: "pi pi-search",
					child: [
						{
							href: `/${this.$store.state.articleId}/method/search`,
							title: "Search Strategy"
						},
						{
							href: `/${this.$store.state.articleId}/method/search/bibliographic-databases`,
							title: "Search Strings for Databases"
						},
						{
							href: `/${this.$store.state.articleId}/method/search/trial-registries`,
							title: "Search Strings for Trial Registries"
						},
						{
							href: `/${this.$store.state.articleId}/method/search/publication-type`,
							title: "Restrictions on Publication Type"
						},
						{
							href: `/${this.$store.state.articleId}/method/search/supplementory-methods`,
							title: "Supplementary Methods"
						}
					]
				},
				{
					title: "Study Selection and Screening",
					icon: "pi pi-check",
					href: `/${this.$store.state.articleId}/method/screening`
				},
				{
					title: "Data Extraction",
					icon: "pi pi-upload",
					href: `/${this.$store.state.articleId}/method/data-extraction`
				},
				{
					title: "Assessment of the RoB",
					icon: "pi pi-exclamation-circle",
					href: `/${this.$store.state.articleId}/method/risk-of-bias`
				},
				{
					title: "Measurement of Effect",
					icon: "pi pi-sliders-v",
					href: `/${this.$store.state.articleId}/method/measurement-of-effect`
				},
				{
					title: "Unit of Analysis",
					icon: "pi pi-chart-bar",
					href: `/${this.$store.state.articleId}/method/unit-of-analysis`
				},
				{
					title: "Dealing with Missing Data",
					icon: "pi pi-question",
					href: `/${this.$store.state.articleId}/method/missing-data`
				},
				{
					title: "Heterogeneity/Publication Bias",
					icon: "pi pi-users",
					href: `/${this.$store.state.articleId}/method/heterogeneity-publication-biases`
				},
				{
					title: "Subgroup and Sensitivity Analysis",
					icon: "pi pi-chart-line",
					href: `/${this.$store.state.articleId}/method/subgroup-sensitivity-analysis`
				},
				{
					header: true,
					title: "Output",
					hiddenOnCollapse: true
				},
				{
					title: "Output",
					icon: "pi pi-download",
					href: `/${this.$store.state.articleId}/output`
				}
			];
		}
	}
};
</script>

<style>
body {
	background-color: #ffffff;
}
.logo {
	display: block;
	margin: auto;
}
.logo-text-small {
	padding-left: 20px;
	font-size: 3em;
}
.logo-text-large {
	padding-left: 20px;
	font-size: 5em;
}
.toolbar {
	padding: 0px 20px 20px 20px;
}

.v-sidebar-menu {
	background-color: #ffffff !important;
}
.pad-sidebar {
	/* Padding left for sidebar */
	padding-left: 300px;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	transition: 0.3s ease;
}
#app.collapsed {
	padding-left: 50px;
}
#app.onmobile {
	padding-left: 50px;
}
.sidebar-overlay {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: #000;
	opacity: 0.5;
	z-index: 900;
}
</style>
