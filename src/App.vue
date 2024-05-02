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
		<div
			v-tooltip="{
				placement: 'right',
				allowHTML: true,
				content: 'Toggle sidebar (<kbd>[</kbd>)'
			}"
			class="sidebar-collapse"
			@click="
				collapsed = !collapsed;
				toggleSidebar(collapsed);
			"
		>
			<i
				style="font-size: xx-large;"
				:class="collapsed ? 'pi pi-angle-right' : 'pi pi-angle-left'"
			/>
		</div>
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

// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";
import VTooltip from "v-tooltip";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

export default {
	name: "App",
	components: {
		TheArticleToolbar,
		ProjectEdit
	},
	directives: {
		tooltip: VTooltip
	},
	async mounted() {
		this.onResize();
		window.addEventListener("resize", this.onResize);
		// Initialize menu
		this.updateMenu();
	},
	methods: {
		onToggleCollapse(collapsed) {
			this.collapsed = collapsed;
		},
		toggleSidebar(collapsed) {
			this.collapsed = collapsed !== undefined ? collapsed : !this.collapsed;
			document.body.classList.toggle("sidebar-collapsed", this.collapsed);
			document.body.classList.toggle("sidebar-full", !this.collapsed);

			// globalThis.localStorage.setItem('sidebarCollapsed', this.collapsed ? 1 : 0)
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
			return require("./assets/" + process.env.VUE_APP_PROJECT + ".png");
		}
	},
	data() {
		return {
			collapsed: true,
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
			//return this.$tera.state.id;
		},
		methodsRecord() {
			return this.$store.state.methodsRecord;
			//return this.$tera.state.methodsRecord;
		}
	}
};
</script>

<style>
/* body {
	background-color: #ffffff;
} */
/* Sidebar body.sidebar-full / body.sidebar-collapsed {{{ */
body {
	background-color: #ffffff;
	--sidebar-width: 300px;

	&.sidebar-full {
		--sidebar-width: 300px;
	}

	&.sidebar-collapsed {
		--sidebar-width: 50px;
	}
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
	/* background-image: linear-gradient(#536fab, white); */
	background-image: linear-gradient(#6880b5, #465b8b, #5971a5);
	/* color: #e3e4e8; */
}

.vsm--header {
	color: #e3e4e8 !important;
}

.vsm--title {
	color: #e3e4e8 !important;
}

.vsm--link_active {
	background-color: rgba(255, 255, 255, 0.3) !important;
}

.vsm--link {
	color: #f9fafb !important;
}

/* .vsm--link_mobile-item:hover {
	background-color: rgba(255, 255, 255, .3) !important;
	color: #fd3411 !important;
} */

.vsm--icon {
	background-color: transparent !important;
}

.vsm--toggle-btn {
	background-color: #647bae !important;
	color: #f2f2f2 !important;
	display: none !important;
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

/* width */
::-webkit-scrollbar {
	width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
	box-shadow: inset 0 0 5px grey;
	border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	/* background: #536fab;  */
	background: #7f8daf;
	border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #536fab;
}

&.collapsed {
	& .label {
		display: none;
	}

	& .sidebar-header-logo {
		width: 40px !important;
		height: 40px !important;
		margin-left: -4px;
	}
}
& .sidebar-collapse {
	position: fixed;
	left: calc(var(--sidebar-width) - 30px);
	bottom: 80px;
	width: 50px;
	height: 50px;
	z-index: 1000;
	transform: scale(0);
	opacity: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	background: #5c7cc0;
	border-radius: 50%;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3333333333);

	color: #fff;
	font-size: x-large;

	cursor: pointer;

	transition: all 0.3s ease;

	&:hover {
		background: var(--accent-highlight);
	}
}

.pad-sidebar:hover .sidebar-collapse {
	transform: scale(1);
	opacity: 1;
	background: #5c7cc0;
}

/* &:hover .sidebar-collapse {
	transform: scale(1);
	opacity: 1;
	background: #5c7cc0;
} */
</style>
