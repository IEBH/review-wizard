const projectTemplateImport = async () =>
	await import(
		`../project-templates/${import.meta.env.VITE_APP_PROJECT}/index.js`
		/* @vite-ignore */
	);
export default projectTemplateImport;
