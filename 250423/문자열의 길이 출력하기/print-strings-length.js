const input = require("fs").readFileSync(0).toString().trim().split("\n");

const str1 = input[0];
const str2 = input[1];

console.log(str1.length + str2.length);