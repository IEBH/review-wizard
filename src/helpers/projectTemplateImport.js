const projectTemplateImport = async () =>
	await import(
		"@/project-templates/" + process.env.VUE_APP_PROJECT + "/index.js"
	);
export default projectTemplateImport;
