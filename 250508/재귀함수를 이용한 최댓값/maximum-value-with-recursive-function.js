const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let value = arr[0];

const max = (n) => {
    if (n === 0) return value;

    if (value < arr[n]) value = arr[n];
    return max(n-1);
};

console.log(max(n));