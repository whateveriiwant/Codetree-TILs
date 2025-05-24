const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const ground = Array(201).fill(0).map(() => Array(201).fill(0));

for (let i of rects) {
    const x1 = i[0] + 100;
    const y1 = i[1] + 100;
    const x2 = i[2] + 100;
    const y2 = i[3] + 100;

    for (let j = x1; j < x2; j++) {
        for (let k = y1; k < y2; k++) {
            ground[j][k] = 1;
        }
    }
}

let sum = 0;
for (let i of ground) {
    for (let j of i) {
        if (j === 1) sum += 1;
    }
}

console.log(sum);