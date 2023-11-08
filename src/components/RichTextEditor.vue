<template>
	<div>
	  <div ref="editor"></div>
	</div>
  </template>
  
  <script>
  import Quill from 'quill';
  import 'quill/dist/quill.snow.css';
  
  export default {
	mounted() {
	  this.quill = new Quill(this.$refs.editor, {
		theme: 'snow',
	  });
	},
	beforeDestroy() {
	  this.quill = null;
	},
	methods: {
	  getEditorContent() {
		return this.quill.root.innerHTML;
	  },
	  setEditorContent(content) {
		this.quill.clipboard.dangerouslyPasteHTML(content);
	  },
	},
  };
  </script>
  