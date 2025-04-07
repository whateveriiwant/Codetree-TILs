const arr = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 999 || arr[i] === -999) break;
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
}

console.log(max, min)