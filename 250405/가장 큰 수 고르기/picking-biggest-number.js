const numbers = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

let max = 0;

for (let i of numbers) {
    if (i > max) max = i;
}

console.log(max);