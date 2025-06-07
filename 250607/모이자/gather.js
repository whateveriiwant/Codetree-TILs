const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number); // 각 집에 사는 사람 수

let min = Math.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
        sum += arr[j] * Math.abs(j - i);
    }
    if (sum < min) min = sum;
}

console.log(min);