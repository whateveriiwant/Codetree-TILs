const input = require('fs').readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

let sum = 0;
let cnt = 0;
for (let i = 1; i <= n; i++) {
    sum += input[i].length;
    if (input[i][0] === 'a') cnt++;
}

console.log(sum, cnt);