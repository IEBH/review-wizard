const projectTemplateImport = async () =>
	await import(
		"@/project-templates/" + process.env.VUE_APP_PROJECT + "/index.js"
		/* @vite-ignore */
	);
export default projectTemplateImport;
