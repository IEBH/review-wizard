export default {
  methods: {
    capitalize(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
    joinArrayWithAnd(arr) {
      return arr.slice(0, -1).join(", ") + " and " + arr.slice(-1);
    },
    formatSelectMulti(arr) {
      // Get only the labels the array of objects
      arr = arr.map(ele => ele.label);
      // Seperate by and and convert to lowercase
      return this.joinArrayWithAnd(arr).toLowerCase();
    }
  }
};
