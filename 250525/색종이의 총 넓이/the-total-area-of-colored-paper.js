const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(" ").map(Number));

const arr = Array(201).fill(0).map(() => Array(201).fill(0));
const OFFSET = 100;

for (let i = 0; i < n; i++) {
    const [x1, y1] = rects[i].map(Number);
    const [x2, y2] = [x1 + 8, y1 + 8];

    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            arr[j + OFFSET][k + OFFSET] = 1;
        }
    }
}

let sum = 0;
for (let i of arr) {
    for (let j of i) {
        if (j === 1) sum++;
    }
}

console.log(sum);