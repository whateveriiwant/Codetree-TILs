let [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);
let result = 1;

for (let i = 0; i < b; i++) {
    result *= a;
}

console.log(result);