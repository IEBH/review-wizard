export default {
	methods: {
		// Capitalize the first letter of a sentence/word
		capitalize(s) {
			if (typeof s !== "string") return "";
			return s.charAt(0).toUpperCase() + s.slice(1);
		},
		// Uncapitalize the first letter of a sentence/word
		uncapitalize(s) {
			if (typeof s !== "string") return "";
			return s.charAt(0).toLowerCase() + s.slice(1);
		},
		// Select a random sentence
		selectRandom(arr) {
			return arr[Math.floor(Math.random() * arr.length)];
		},
		// Join array of words with commas and "and" for the last word
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
		// Join array of words with commas and "or" for the last word
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
		// Format the array when user can select from multiple options
		formatSelectMulti(arr) {
			// Get only the labels the array of objects
			if (arr) {
				arr = arr.map(ele => ele.label);
				return arr;
			} else return [];
		},
		// Format the date to day/month/year
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
		// Format date as 30th of January 2021
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
		// Convert a number to word e.g `1 -> one`
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
		// Convert a name to initials e.g. `Connor Forbes -> CF`
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
