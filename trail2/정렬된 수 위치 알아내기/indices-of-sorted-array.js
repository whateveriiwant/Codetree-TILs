const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const sortedArr = arr.slice();
sortedArr.sort((a, b) => a - b);

const result = [];
let lastUsed = {};

for (let i = 0; i < n; i++) {
    const v = arr[i];

    if (v in lastUsed) {
        const start = lastUsed[v] + 1;  
        result.push(sortedArr.indexOf(v, start) + 1);
        lastUsed[v] = sortedArr.indexOf(v, start);
    } else {
        result.push(sortedArr.indexOf(v) + 1);
        lastUsed[v] = sortedArr.indexOf(v);
    }
}

console.log(result.join(' '));