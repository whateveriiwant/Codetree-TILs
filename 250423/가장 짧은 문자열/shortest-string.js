const input = require("fs").readFileSync(0).toString().trim().split("\n");

let arr = [];

for (let i = 0; i <= 2; i++) {
    arr.push(input[i].length);
}

let max = arr[0];
let min = arr[0];

for (let i of arr) {
    if (i > max) max = i;
    if (i < min) min = i;
}

console.log(max - min);