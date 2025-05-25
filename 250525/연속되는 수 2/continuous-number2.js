const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

let cnt = 1;
let maxCnt = 1;

for (let i = 0; i < n - 1; i++) {
    if (arr[i] == arr[i + 1]) cnt++;
    else {
        maxCnt = Math.max(maxCnt, cnt);
        cnt = 1;
    }
}

console.log(maxCnt);