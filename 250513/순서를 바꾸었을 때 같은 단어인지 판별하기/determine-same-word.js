const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0].split("");
const str2 = input[1].split("");

if (str1.sort().join("") === str2.sort().join("")) {
    console.log('Yes');
} else {
    console.log('No');
}