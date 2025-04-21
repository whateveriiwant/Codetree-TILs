const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let cnt = 0;

numbers.sort((a, b) => (b - a));

let max = numbers[0];

for (let i = 1; i < n; i++) {
    if (max === numbers[i]) {
        cnt++;
        max = numbers[cnt+1];
    }
}

if (cnt <= 1) console.log(max);
else console.log(-1);