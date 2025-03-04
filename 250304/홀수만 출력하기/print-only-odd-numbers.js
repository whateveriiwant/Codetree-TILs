const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
let numbers = [];

for (let i = 1; i < n+1; i++) {
    numbers.push(Number(input[i]));
}

for (let i of numbers) {
    if (i % 2 !== 0 && i % 3 === 0) console.log(i);
}