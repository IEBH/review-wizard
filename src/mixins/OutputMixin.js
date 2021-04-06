export default {
  methods: {
    capitalize(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
    uncapitalize(s) {
      if (typeof s !== "string") return "";
      return s.charAt(0).toLowerCase() + s.slice(1);
    },
    selectRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },
    joinArrayWithAnd(arr) {
      if (arr.length > 1)
        return arr.slice(0, -1).join(", ") + " and " + arr.slice(-1);
      else if (arr.length === 1) return arr[0];
      else return "undefined";
    },
    joinArrayWithOr(arr) {
      if (arr.length > 1)
        return arr.slice(0, -1).join(", ") + " or " + arr.slice(-1);
      else if (arr.length === 1) return arr[0];
      else return "undefined";
    },
    formatSelectMulti(arr) {
      // Get only the labels the array of objects
      arr = arr.map(ele => ele.label);
      return arr;
    },
    formatDate(timestamp) {
      var d;
      try {
        d = timestamp.toDate();
      } catch {
        d = timestamp;
      }
      if (d) {
        return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
      } else {
        return "[no date specified]";
      }
    },
    formatDateFull(timestamp) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const nth = function(d) {
        if (d > 3 && d < 21) return "th";
        switch (d % 10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
          default:
            return "th";
        }
      };
      var d;
      try {
        d = timestamp.toDate();
      } catch {
        d = timestamp;
      }
      return (
        d.getDate() +
        nth(d.getDate()) +
        " " +
        monthNames[d.getMonth()] +
        " " +
        d.getFullYear()
      );
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
