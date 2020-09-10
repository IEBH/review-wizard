<template>
  <div>
    <p>{{ question }}</p>
    <!-- Listen to on change event instead of v-on:input to achieve same result as v-model.lazy -->
    <editor
      ref="queryEditor"
      v-bind:value="value"
      v-on:input="$emit('input', $event)"
      v-on:init="editorInit"
      lang="javascript"
      theme="chrome"
      width="100%"
      height="250"
      v-bind:options="editorOptions"
    ></editor>
  </div>
</template>

<script>
import ace from "vue2-ace-editor";
// var brace = window.ace.acequire("ace/ace");
// import "brace/theme/chrome";
// import polyglotSyntax from "../syntax/mode-polyglot.js";

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
      editor.setFontSize("18px");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
