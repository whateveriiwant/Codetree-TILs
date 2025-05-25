const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

const arr = Array(2001).fill(0).map(() => Array(2001).fill(0));
const OFFSET = 1000;

for (let i = 0; i < 2; i++) {
    const [x1, y1, x2, y2] = i === 0 ? rect1.map(Number) : rect2.map(Number);

    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            if (arr[j + OFFSET][k + OFFSET] === 1) arr[j + OFFSET][k + OFFSET] = 3;
            else arr[j + OFFSET][k + OFFSET] = i === 0 ? 1 : 2;
        }
    }
}

let sum = 0;
for (let i of arr) {
    for (let j of i) {
        if (j === 1 || j === 3) sum++;
    }
}

console.log(sum);