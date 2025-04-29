const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += Number(input[i]);
}

sum = sum.toString();

sum = sum.slice(1) + sum.slice(0, 1);

console.log(sum);