<template>
  <div>
    <p>{{ question }}</p>
    <!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
    <editor
      ref="queryEditor"
      mode="text"
      theme="chrome"
      v-bind:value="value"
      v-on:input="$emit('input', $event)"
      v-on:init="editorInit"
      width="100%"
      height="250"
      v-bind:options="editorOptions"
    ></editor>
  </div>
</template>

<script>
import ace from "vue2-ace-editor";
import PolyglotMode from "../syntax/polyglot-syntax.js";

export default {
  name: "InputTextMultiSyntax",
  props: {
    question: String,
    value: String
  },
  data() {
    return {
      editorOptions: {
        showPrintMargin: false,
        wrap: true
      }
    };
  },
  components: {
    editor: ace
  },
  methods: {
    editorInit(editor) {
      // Ace editor settings
      // brace = polyglotSyntax(brace);
      // window.ace.config.set("modePath", "syntax/ace");
      require("brace/mode/javascript"); //language
      require("brace/theme/chrome");
      editor.setFontSize("16px");
    }
  },
  mounted() {
    // Set the polyglot syntax
    const customMode = new PolyglotMode();
    this.$refs.queryEditor.editor.getSession().setMode(customMode);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
