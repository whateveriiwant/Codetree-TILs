const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = 1;

for (let i = 1; i <= b; i++) {
    if (i % a === 0) result *= i;
}

console.log(result);