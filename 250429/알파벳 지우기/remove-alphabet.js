const input = require("fs").readFileSync(0).toString().trim().split("\n");

const a = input[0].split("");
const b = input[1].split("");

let result = 0;

let numA = 0;
for (let i of a) {
    if (i >= '0' && i <= '9') {
        numA += i;
    } else continue;
}
result += Number(numA);

let numB = 0;
for (let i of b) {
    if (i >= '0' && i <= '9') {
        numB += i;
    } else continue;
}
result += Number(numB);

console.log(result);