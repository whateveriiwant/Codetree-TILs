const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);

let result = 1;

for (let i = a; i <= b; i++) {
    result *= i;
}

console.log(result);