const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

let result = "";

for (let i = 1; i <= n; i++) {
    result += input[i];
}

console.log(result);