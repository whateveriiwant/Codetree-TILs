const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let min = numbers[1] - numbers[0];

for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
        if (min > numbers[j] - numbers[i]) min = numbers[j] - numbers[i];
    }
}

console.log(min);