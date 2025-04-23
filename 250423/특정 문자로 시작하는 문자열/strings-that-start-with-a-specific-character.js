const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

let arr = [];
let sum = 0;

for (let i = 1; i <= n; i++) {
        if(input[i][0] === input[n+1]) {
            arr.push(input[i]);
            sum += input[i].length;
        }
}

console.log(arr.length, (sum / arr.length).toFixed(2));