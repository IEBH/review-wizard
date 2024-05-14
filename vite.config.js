import {defineConfig, loadEnv} from 'vite';
import {fileURLToPath, URL} from "url";
import vue from '@vitejs/plugin-vue';
import pluginCloudflareHeaders from 'unplugin-cloudflare-headers/vite'
import {visualizer} from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
	let env = loadEnv(mode, process.cwd(), '');
	// Tidy up SITE_CSP into one horrible long line
	env.SITE_CSP = env.SITE_CSP.replace(/\s+/g, ' ').trim();

	return {
		assetsInclude: '**/*.svg',

		plugins: [
			vue(),

			// Optionally include NPM analysis - must be last in the chain to work with sourcefiles
			...(mode == 'production' ? [
				visualizer({
					filename: 'stats.html',
					title: 'TERA NPM module breakdown',
					emitFile: true,
				}),
			] : []),

			pluginCloudflareHeaders({
				'/*': [{'Content-Security-Policy': env.SITE_CSP}],
			}),
		],

		resolve: {
			alias: {
				'@': fileURLToPath(new URL("./src", import.meta.url)),

				// Various overrides as Vite seems blind to a few of these imports
				/*
				'@deepstream/client': 'node_modules/@deepstream/client/dist/src/deepstream-client.js',
				'vuex': 'node_modules/vuex/dist/vuex.esm-browser.js',
				'primevue/button': 'node_modules/primevue/button/Button.vue',
				'primevue/Button.vue/style': 'node_modules/primevue/button/button.esm.js',
				'primevue/dialog': 'node_modules/primevue/dialog/Dialog.vue',
				'primevue/toast': 'node_modules/erimevue/toast/Toast.vue',
				'primevue/toolbar': 'node_modules/primevue/toolbar/Toolbar.vue',
				*/
			},
			// extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
		},

		server: {
			headers: {
				'Content-Security-Policy': env.SITE_CSP,
			},
			port: 5173,
		},
	};
});
