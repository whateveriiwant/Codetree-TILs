const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);


const resultArr = [];
let result = "";

for (let i = 0; i < n; i++) {
    resultArr.push(arr[i]);
    if (arr[i] % 2 !== 0) {
        resultArr.sort((a, b) => a - b);
        result += resultArr[parseInt(resultArr.length / 2)] + ' ';
    }
}

console.log(result);