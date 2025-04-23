const [str1, str2] = require("fs").readFileSync(0).toString().trim().split(" ");

if (str1.length === str2.length) {
    console.log("same");
} else if (str1.length > str2.length) {
    console.log(str1, str1.length);
} else {
    console.log(str2, str2.length);
}