export default {
  methods: {
    copy() {
      if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById("output"));
        range.select().createTextRange();
        document.execCommand("copy");
      } else if (window.getSelection) {
        const range = document.createRange();
        range.selectNode(document.getElementById("output"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("Methods has been copied, now paste in document");
      }
    }
  }
};
