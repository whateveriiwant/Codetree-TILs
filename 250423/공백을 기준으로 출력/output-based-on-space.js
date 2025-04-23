const input = require("fs").readFileSync(0).toString().trim().split("\n");

const str1 = input[0];
const str2 = input[1];

let result = "";

for (let i of str1) {
    if (i === " ") continue;
    result += i;
}

for (let i of str2) {
    if (i === " ") continue;
    result += i;
}

console.log(result)