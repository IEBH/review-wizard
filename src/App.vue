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

		<!-- If methodsRecord exists render small logo and toolbar -->
		<div v-if="methodsRecord" class="p-grid p-ai-center">
			<div class="p-col-12 p-md-2 p-lg-1">
				<img class="logo" alt="Logo" :src="getLogoPath()" height="50px" />
			</div>
			<div class="p-col-12 p-md-10 p-lg-11">
				<TheArticleToolbar />
			</div>
		</div>

		<!-- Else render a larger logo -->
		<div v-else class="p-grid p-ai-center">
			<div class="p-col-12 p-md-3 p-lg-2">
				<img class="logo" alt="Logo" :src="getLogoPath()" height="150px" />
			</div>
			<div class="p-col-12 p-md-9 p-lg-9">
				<h1 class="logo-text-large">
					{{ pascalCaseTitle() }}
				</h1>
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
import projectTemplateImport from "@/helpers/projectTemplateImport.js";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

export default {
	name: "App",
	components: {
		TheArticleToolbar,
		ProjectEdit
	},
	async mounted() {
		this.onResize();
		window.addEventListener("resize", this.onResize);
		// Initialize localStorage
		const storageProjectId = localStorage.getItem("projectId");
		if (storageProjectId && !this.projectId) {
			this.$store.dispatch("initializeFromProjectId", storageProjectId);
		}
		// Initialize menu
		this.updateMenu();
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
		},
		async updateMenu() {
			const { getMenu } = await projectTemplateImport();
			this.menu = getMenu(this.$store.state.projectId);
		},
		pascalCaseTitle() {
			return upperFirst(camelCase(process.env.VUE_APP_PROJECT));
		},
		getLogoPath() {
			var images = require.context("./assets/", false, /\.png$/);
			return images("./" + process.env.VUE_APP_PROJECT + ".png");
		}
	},
	data() {
		return {
			collapsed: false,
			isOnMobile: false,
			menu: []
		};
	},
	watch: {
		projectId: async function() {
			// Update menu
			this.updateMenu();
		}
	},
	computed: {
		projectId() {
			return this.$store.state.projectId;
		},
		methodsRecord() {
			return this.$store.state.methodsRecord;
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
