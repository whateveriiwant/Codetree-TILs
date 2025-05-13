const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
let words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}

words.sort();
let arr = [];

for (let i of words) {
    if (i.slice(0, t.length) == t) arr.push(i);
}

console.log(arr[k - 1]);