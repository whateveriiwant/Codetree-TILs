const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];

const palindrome = (str) => {
    if (str.slice(0, str.length/2) === str.split("").reverse().slice(str.length/2 + 1, str.length).join("")) {
        return "Yes";
    }
    return "No";
};

console.log(palindrome(str));