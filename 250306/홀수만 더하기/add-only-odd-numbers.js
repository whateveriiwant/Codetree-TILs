const input = require("fs").readFileSync(0).toString().split("\n");
const n = Number(input[0]);
let result = 0;

for (let i = 1; i <= n; i++) {
    let x = Number(input[i]);
    if (x % 2 !== 0 && x % 3 === 0) result += x;
}

console.log(result);