const [a, b] = require("fs").readFileSync(0).toString().split(" ").map(Number);

let sum = 0;

for (let i = a; i <= b; i++) {
    if (i % 2 === 0) sum += i;
}

console.log(sum);