const input = require("fs").readFileSync(0).toString().trim().split("\n");

const str1 = input[0];
const str2 = input[1];
let cnt = 0;

for (let i of str1) {
    if (i === str2) cnt++;
}

console.log(cnt);