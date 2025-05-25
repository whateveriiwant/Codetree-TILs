const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);
const result = [];

let cnt = 0;

if (arr.length === 1) result.push(1);
else {
    for (let i = 0; i < arr.length - 2; i++) {
    cnt = 0;
    if (arr[i] === arr[i + 1]) {
        for (let j = i; j < arr.length - 2; j++) {
            cnt++;
            if (arr[i] !== arr[i + 1]) break;
        }
        result.push(cnt);
    }
}
}


console.log(Math.max(...result));