export default {
  methods: {
    capitalize(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
    joinArrayWithAnd(arr) {
      if (arr.length > 1)
        return arr.slice(0, -1).join(", ") + " and " + arr.slice(-1);
      else return arr[0];
    },
    joinArrayWithOr(arr) {
      if (arr.length > 1)
        return arr.slice(0, -1).join(", ") + " or " + arr.slice(-1);
      else return arr[0];
    },
    formatSelectMulti(arr) {
      // Get only the labels the array of objects
      arr = arr.map(ele => ele.label);
      return arr;
    },
    numberToWord(string) {
      switch (string) {
        case "1":
          return "one";
        case "2":
          return "two";
        case "3":
          return "three";
        case "4":
          return "four";
        case "5":
          return "five";
        case "6":
          return "six";
        case "7":
          return "seven";
        case "8":
          return "eight";
        case "9":
          return "nine";
        default:
          return string;
      }
    },
    nameToInitials(name) {
      var initials = name.match(/\b\w/g) || [];
      initials = (
        (initials.shift() || "") + (initials.pop() || "")
      ).toUpperCase();
      return initials;
    }
  }
};
