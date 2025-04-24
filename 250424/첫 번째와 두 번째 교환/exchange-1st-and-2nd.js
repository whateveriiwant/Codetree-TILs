const str = require('fs').readFileSync(0).toString().trim();

let arr = str.split("");
const first = arr[0];
const second = arr[1];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === first) arr[i] = second;
    else if (arr[i] === second) arr[i] = first;
}

console.log(arr.join(""));