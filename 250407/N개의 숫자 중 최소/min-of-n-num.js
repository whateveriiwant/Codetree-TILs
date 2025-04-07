const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

let min = numbers[0];
let cnt = 1;

for (let i = 1; i < n; i++) {
    if (min > numbers[i]) {
        min = numbers[i];
        cnt = 1;
    }
    else if (min === numbers[i]) cnt++;
}

console.log(min, cnt);