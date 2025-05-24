const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

const checked = Array(101).fill(0);

for (let i of segments) {
    for (let j = i[0]; j <= i[1]; j++) {
        checked[j] += 1;
    }
}

console.log(Math.max(...checked));