const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let result = "";

let prevMaxIdx = n;

while (true) {
    let max = 0;

    for (let i = 1; i < prevMaxIdx; i++) {
        if (arr[i] > arr[max]) max = i;
    }

    result += `${max + 1} `;

    if (max === 0) break;

    prevMaxIdx = max;
}

console.log(result);