const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1);

const freq = new Map();

arr.forEach(x => {
    if (freq.has(x)) freq.set(x, freq.get(x) + 1);
    else freq.set(x, 1);
});

const maxarr = Array.from(freq.values());

console.log(Math.max(...maxarr));