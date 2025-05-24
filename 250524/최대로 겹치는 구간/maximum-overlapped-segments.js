const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

const lines = [];
for (let i = 1; i <= n; i++) {
    lines.push(input[i].split(" ").map(Number));
}

const checked = Array(201).fill(0);

for (let i of lines) {
    let x1 = i[0];
    let x2 = i[1];

    if (x1 < 0) x1 += Math.abs(x1 * 2);
    if (x2 < 0) x2 += Math.abs(x2 * 2);
    for (let j = x1; j <= x2; j++) {
        checked[j] += 1;
    }
}

let max = 0;
for (let i = 1; i < 200; i++) {
    if (checked[i] > max) {
        max = checked[i];
    }
}

console.log(max);