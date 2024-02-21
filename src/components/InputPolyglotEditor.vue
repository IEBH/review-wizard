<template>
	<div>
		<editor
			ref="queryEditor"
			mode="text"
			theme="chrome"
			v-bind:value="value"
			v-on:input="update($event)"
			v-on:init="editorInit"
			width="100%"
			height="250"
			v-bind:options="editorOptions"
			:style="setStyle"
		></editor>
	</div>
</template>
<script>
import ace from "vue2-ace-editor";
import PolyglotMode from "../syntax/polyglot-syntax.js";

export default {
	name: "InputTabsMulti",
	props: {
		question: String,
		value: String,
		placeholder: String,
		version: String,
		readOnly: Boolean
	},
	data() {
		return {
			editorOptions: {
				showPrintMargin: false,
				wrap: true,
				readOnly: this.readOnly
			}
		};
	},
	components: {
		editor: ace
	},
	computed: {
		setStyle: function() {
			if (this.version == "muanualVersion") {
				return {
					"background-color": "white"
				};
			} else {
				return {
					"background-color": "AliceBlue"
				};
			}
		}
	},
	methods: {
		editorInit(editor) {
			// Ace editor settings
			// brace = polyglotSyntax(brace);
			// window.ace.config.set("modePath", "syntax/ace");
			require("brace/mode/javascript"); //language
			require("brace/theme/chrome");
			editor.setFontSize("16px");
		},
		update(e) {
			if (e) {
				this.$emit("editor", e);
			}
			var shouldShow = !this.$refs.queryEditor.editor.session.getValue().length;
			var node = this.$refs.queryEditor.editor.renderer.emptyMessageNode;
			if (!shouldShow && node) {
				this.$refs.queryEditor.editor.renderer.scroller.removeChild(
					this.$refs.queryEditor.editor.renderer.emptyMessageNode
				);
				this.$refs.queryEditor.editor.renderer.emptyMessageNode = null;
			} else if (shouldShow && !node) {
				node = this.$refs.queryEditor.editor.renderer.emptyMessageNode = document.createElement(
					"div"
				);
				node.textContent = this.placeholder;
				node.className = "ace_emptyMessage";
				node.style.padding = "0 9px";
				node.style.position = "absolute";
				node.style.zIndex = 9;
				node.style.opacity = 0.5;
				this.$refs.queryEditor.editor.renderer.scroller.appendChild(node);
			}
		}
	},
	mounted() {
		// Set the polyglot syntax
		const customMode = new PolyglotMode();
		this.$refs.queryEditor.editor.getSession().setMode(customMode);
		setTimeout(this.update(), 100);
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
