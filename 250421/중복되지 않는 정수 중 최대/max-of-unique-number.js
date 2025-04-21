const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let cnt = 0;

numbers.sort((a, b) => (b - a));

let max = numbers[0];

for (let i of numbers) {
    if (max === i) {
        cnt++;
        // max = numbers[cnt];
    }
}

if (cnt <= 1) console.log(max);
else console.log(-1);