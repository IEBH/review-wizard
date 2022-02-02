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
			let elExists = false;
			let returnString = "";
			for (let i in arr) {
				// Last element
				if (i == arr.length - 1 && arr[i]) {
					returnString += elExists ? " and " : "";
					returnString += arr[i];
					elExists = true;
				}
				// First and middle elements
				else if (arr[i]) {
					returnString += elExists ? ", " : "";
					returnString += arr[i];
					elExists = true;
				}
			}
			return elExists ? returnString : "BLANK";
		},
		joinArrayWithOr(arr) {
			let elExists = false;
			let returnString = "";
			for (let i in arr) {
				// Last element
				if (i == arr.length - 1 && arr[i]) {
					returnString += elExists ? " or " : "";
					returnString += arr[i];
					elExists = true;
				}
				// First and middle elements
				else if (arr[i]) {
					returnString += elExists ? ", " : "";
					returnString += arr[i];
					elExists = true;
				}
			}
			return elExists ? returnString : "BLANK";
		},
		// Perform the array.map operation safely
		mapArray(arr, field) {
			if (arr && Array.isArray(arr)) {
				return arr.map(el => el[field]);
			} else {
				return [];
			}
		},
		formatSelectMulti(arr) {
			// Get only the labels the array of objects
			if (arr) {
				arr = arr.map(ele => ele.label);
				return arr;
			} else return [];
		},
		formatDate(timestamp) {
			timestamp = new Date(timestamp);
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
			timestamp = new Date(timestamp);
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
				case null:
					return "BLANK";
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
			if (name) {
				var initials = name.match(/\b\w/g) || [];
				initials = (
					(initials.shift() || "") + (initials.pop() || "")
				).toUpperCase();
				return initials;
			} else {
				return "N/A";
			}
		}
	}
};
