const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const numbers = input.slice(1, n + 1).map(Number);

let cnt = 1;
let maxCnt = 1;

for (let i = 0; i < n; i++) {
    if (numbers[i] < numbers[i + 1]) cnt++;
    else {
        maxCnt = Math.max(maxCnt, cnt);
        cnt = 1;
    }
}

console.log(maxCnt);